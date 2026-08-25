import fs from 'node:fs';
import path from 'node:path';
import { visit } from 'unist-util-visit';
import type { Node, Root } from 'mdast';
import type { Plugin } from 'unified';

interface EmbedSnippetOptions {
  /** Directory to resolve `embed:` paths from; defaults to the markdown file's directory. */
  directory?: string;
}

// Language defaults to extension.toLowerCase();
// This map tracks languages that don't match their extension.
const FILE_EXTENSION_TO_LANGUAGE_MAP: Record<string, string> = {
  js: 'jsx',
  md: 'markup',
  sh: 'bash',
  rb: 'ruby',
  rs: 'rust',
  py: 'python',
  ps1: 'powershell',
  psm1: 'powershell',
  bat: 'batch',
  h: 'c',
  tex: 'latex',
  csproj: 'xml',
};

const getLanguage = (file: string): string => {
  if (!file.includes('.')) return 'none';
  const extension = file.split('.').pop() as string;
  return FILE_EXTENSION_TO_LANGUAGE_MAP[extension] ?? extension.toLowerCase();
};

// Port of `normalize-path` (v3): backslashes to forward slashes, collapsed
// duplicate separators, trailing slash stripped, win32 namespaces preserved.
const normalizePath = (filePath: string): string => {
  if (filePath === '\\' || filePath === '/') return '/';
  if (filePath.length <= 1) return filePath;

  let prefix = '';
  let rest = filePath;
  if (filePath.length > 4 && filePath[3] === '\\') {
    const ch = filePath[2];
    if ((ch === '?' || ch === '.') && filePath.slice(0, 2) === '\\\\') {
      rest = filePath.slice(2);
      prefix = '//';
    }
  }

  const segments = rest.split(/[/\\]+/);
  if (segments[segments.length - 1] === '') segments.pop();
  return prefix + segments.join('/');
};

// Port of `parse-numeric-range`: parses "1", "1-5", "1..5", "1...5" and comma
// separated combinations into an array of line numbers.
const parseNumericRange = (input: string): number[] => {
  const result: number[] = [];
  for (const part of input.split(',').map((str) => str.trim())) {
    if (/^-?\d+$/.test(part)) {
      result.push(parseInt(part, 10));
      continue;
    }
    const match = /^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/.exec(part);
    if (!match) continue;
    const lhs = parseInt(match[1], 10);
    const rhs = parseInt(match[3], 10);
    const increment = lhs < rhs ? 1 : -1;
    let end = rhs;
    // Make it inclusive by moving the right 'stop-point' away by one.
    if (match[2] === '-' || match[2] === '..' || match[2] === '\u2025') end += increment;
    for (let i = lhs; i !== end; i += increment) result.push(i);
  }
  return result;
};

/**
 * Port of `gatsby-remark-embed-snippet@8.14.0`: only *inline code* nodes whose
 * value starts with `embed:` are transformed — fenced code blocks are left
 * untouched. The path after `embed:` is resolved relative to the markdown
 * file's directory (or the `directory` option); the node becomes a `code` node
 * whose `value` is the trimmed file contents and whose `lang` is derived from
 * the file extension. Also supports `#L<line>` / `#L<range>` suffixes and a
 * `{snippet: "name"}` option selecting `start-snippet{name}` /
 * `end-snippet{name}` regions.
 */
export const remarkEmbedSnippet: Plugin<[options?: EmbedSnippetOptions], Root, Root> = (
  options = {}
) => {
  return (tree, file) => {
    let directory = options.directory;
    if (!directory) {
      directory = file.dirname;
    }
    if (!directory || !fs.existsSync(directory)) {
      throw new Error(`Invalid directory specified "${directory}"`);
    }

    visit(tree, 'inlineCode', (node) => {
      const value = node.value;
      if (!value.startsWith('embed:')) return;

      const filePath = value.slice(6);
      let snippetPath = normalizePath(path.join(directory, filePath));

      // Embed specific lines numbers of a file
      let lines: number[] = [];
      let snippetName = '';
      const rangePrefixIndex = snippetPath.indexOf('#L');
      if (rangePrefixIndex > -1) {
        const range = snippetPath.slice(rangePrefixIndex + 2);
        lines = range.length === 1 ? [Number.parseInt(range, 10)] : parseNumericRange(range);
        // Remove everything after the range prefix from file path
        snippetPath = snippetPath.slice(0, rangePrefixIndex);
      } else {
        // Check for a `{snippet: "snippetName"}` suffix following the file path.
        const optionIndex = snippetPath.indexOf('{');
        if (optionIndex > -1) {
          const optionStr = snippetPath.slice(optionIndex);
          snippetPath = snippetPath.slice(0, optionIndex);
          try {
            const optionValue = JSON.parse(optionStr.replace(/snippet\s*:/, '"snippet":')) as {
              snippet?: unknown;
            };
            if (optionValue && typeof optionValue.snippet !== 'undefined') {
              snippetName = optionValue.snippet as string;
            } else {
              throw new Error(`Invalid snippet options specified: ${optionStr}`);
            }
          } catch {
            throw new Error(`Invalid snippet options specified: ${optionStr}`);
          }
        }
      }

      if (!fs.existsSync(snippetPath)) {
        throw new Error(`Invalid snippet specified; no such file "${snippetPath}"`);
      }

      let code = fs.readFileSync(snippetPath, 'utf8').trim();

      if (lines.length) {
        code = code
          .split('\n')
          .filter((_, lineNumber) => lines.includes(lineNumber + 1))
          .join('\n');
      } else if (snippetName.length) {
        const startSnippetMatcher = new RegExp(
          `start-snippet{${snippetName}}[^\r\n]*[\r\n](.*)`,
          'gs'
        );
        const startSnippetMatch = startSnippetMatcher.exec(code);
        if (startSnippetMatch && startSnippetMatch.length >= 2) {
          code = startSnippetMatch[1];
          const endSnippetMatcher = new RegExp(
            `(.*)[\r\n][^\r\n]*end-snippet{${snippetName}}`,
            'gs'
          );
          const endSnippetMatch = endSnippetMatcher.exec(code);
          if (endSnippetMatch && endSnippetMatch.length >= 2) {
            code = endSnippetMatch[1];
          }
        } else {
          code = '';
        }
      }

      // PrismJS themes target `pre[class*="language-"]`, so the language must
      // be set on the code node for the theme styles to apply.
      const language = getLanguage(snippetPath);

      // Change the node type to code, insert our file as value and set language.
      const codeNode = node as Node & { type: string; value?: string; lang?: string | null };
      codeNode.type = 'code';
      codeNode.value = code;
      codeNode.lang = language;
    });
  };
};
