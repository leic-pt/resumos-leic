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

interface NumericRange {
  lower: number;
  upper: number;
}

const RANGE_PATTERN = /^(\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(\d+)$/;

const parsePositiveInteger = (value: string): number | undefined => {
  const result = Number(value);
  return Number.isSafeInteger(result) && result >= 1 ? result : undefined;
};

// Parse ranges without expanding every selected line.
const parseNumericRange = (input: string, lineCount: number): NumericRange[] | undefined => {
  if (!input.trim()) return undefined;

  const ranges: NumericRange[] = [];
  for (const part of input.split(',').map((str) => str.trim())) {
    if (!part) return undefined;

    if (/^\d+$/.test(part)) {
      const line = parsePositiveInteger(part);
      if (line === undefined) return undefined;
      if (line <= lineCount) ranges.push({ lower: line, upper: line });
      continue;
    }

    const match = RANGE_PATTERN.exec(part);
    if (!match) return undefined;

    const lhs = parsePositiveInteger(match[1]);
    const rhs = parsePositiveInteger(match[3]);
    if (lhs === undefined || rhs === undefined) return undefined;

    // `-` and `..` include the endpoint; ellipsis operators exclude it.
    const inclusiveEndpoint = match[2] === '-' || match[2] === '..' || match[2] === '\u2025';
    if (Math.min(lhs, rhs) > lineCount) continue;
    if (!inclusiveEndpoint && lhs === rhs) continue;

    const clampedLhs = Math.min(lhs, lineCount);
    const clampedRhs = Math.min(rhs, lineCount);
    const lower = Math.min(clampedLhs, clampedRhs) + (!inclusiveEndpoint && lhs > rhs ? 1 : 0);
    const upper =
      Math.max(clampedLhs, clampedRhs) -
      (!inclusiveEndpoint && lhs < rhs && rhs <= lineCount ? 1 : 0);

    if (lower <= upper) ranges.push({ lower, upper });
  }

  return ranges;
};

const selectLines = (sourceLines: string[], ranges: NumericRange[]): string => {
  return sourceLines
    .filter((_, index) => {
      const line = index + 1;
      return ranges.some((range) => line >= range.lower && line <= range.upper);
    })
    .join('\n');
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
    function fatal(reason: string, node?: Node): never {
      throw file.fail(reason, node, 'remark-embed-snippet');
    }

    const directory = options.directory || file.dirname;
    if (!directory) {
      fatal('Cannot resolve embedded snippets because the Markdown file has no directory.');
    }

    const contentRoot = (() => {
      try {
        return fs.realpathSync(path.resolve(directory));
      } catch {
        fatal(`Invalid embed directory "${directory}".`);
      }
    })();

    const contentRootIsDirectory = (() => {
      try {
        return fs.statSync(contentRoot).isDirectory();
      } catch {
        // A successful realpath should normally make this unreachable; treat
        // races and unusual filesystem errors as an invalid root.
        return false;
      }
    })();
    if (!contentRootIsDirectory) {
      fatal(`Invalid embed directory "${directory}": not a directory.`);
    }

    const isWithinContentRoot = (candidate: string): boolean => {
      const relative = path.relative(contentRoot, candidate);
      return (
        relative === '' ||
        (!path.isAbsolute(relative) && relative !== '..' && !relative.startsWith(`..${path.sep}`))
      );
    };

    visit(tree, 'inlineCode', (node) => {
      const value = node.value;
      if (!value.startsWith('embed:')) return;

      const { requestedPath, lineRange, snippetName } = (() => {
        const embeddedPath = value.slice(6);
        const rangePrefixIndex = embeddedPath.indexOf('#L');
        if (rangePrefixIndex > -1) {
          return {
            requestedPath: embeddedPath.slice(0, rangePrefixIndex),
            lineRange: embeddedPath.slice(rangePrefixIndex + 2),
            snippetName: '',
          };
        }

        // Check for a `{snippet: "snippetName"}` suffix following the file path.
        const optionIndex = embeddedPath.indexOf('{');
        if (optionIndex === -1) {
          return {
            requestedPath: embeddedPath,
            lineRange: undefined,
            snippetName: '',
          };
        }

        const optionStr = embeddedPath.slice(optionIndex);
        const requestedPath = embeddedPath.slice(0, optionIndex);
        const optionValue: unknown = (() => {
          try {
            return JSON.parse(optionStr.replace(/snippet\s*:/, '"snippet":'));
          } catch {
            fatal(`Invalid snippet options specified: ${optionStr}`, node);
          }
        })();
        if (
          typeof optionValue !== 'object' ||
          optionValue === null ||
          !('snippet' in optionValue) ||
          typeof optionValue.snippet !== 'string'
        ) {
          fatal(`Invalid snippet options specified: ${optionStr}`, node);
        }

        return {
          requestedPath,
          lineRange: undefined,
          snippetName: optionValue.snippet,
        };
      })();

      const normalizedPath = normalizePath(requestedPath);
      const unresolvedSnippetPath = path.resolve(contentRoot, normalizedPath);
      if (!isWithinContentRoot(unresolvedSnippetPath)) {
        fatal(`Embedded snippet path escapes the content root: "${requestedPath}".`, node);
      }

      const snippetPath = (() => {
        try {
          return fs.realpathSync(unresolvedSnippetPath);
        } catch {
          fatal(`Invalid snippet specified; no such file "${requestedPath}".`, node);
        }
      })();

      if (!isWithinContentRoot(snippetPath)) {
        fatal(`Embedded snippet path escapes the content root: "${requestedPath}".`, node);
      }

      const sourceCode = (() => {
        try {
          return fs.readFileSync(snippetPath, 'utf8').trim();
        } catch {
          fatal(`Unable to read embedded snippet "${requestedPath}".`, node);
        }
      })();

      const code = (() => {
        if (lineRange !== undefined) {
          const sourceLines = sourceCode ? sourceCode.split('\n') : [];
          const ranges = parseNumericRange(lineRange, sourceLines.length);
          if (ranges === undefined) {
            fatal(
              `Invalid line range "${lineRange}" in embedded snippet "${requestedPath}".`,
              node
            );
          }
          return selectLines(sourceLines, ranges);
        }

        if (snippetName.length) {
          // Both markers are literal; scan positionally to avoid regex
          // metacharacters and backtracking on an absent closing marker.
          const startMarker = `start-snippet{${snippetName}}`;
          const startIndex = sourceCode.indexOf(startMarker);
          if (startIndex === -1) return '';

          let start = startIndex + startMarker.length;
          while (
            start < sourceCode.length &&
            sourceCode[start] !== '\r' &&
            sourceCode[start] !== '\n'
          ) {
            start++;
          }
          if (sourceCode[start] === '\r') start++;
          if (sourceCode[start] === '\n') start++;

          const endIndex = sourceCode.indexOf(`end-snippet{${snippetName}}`, start);
          if (endIndex === -1) return sourceCode.slice(start);

          const lineStart =
            Math.max(
              sourceCode.lastIndexOf('\n', endIndex),
              sourceCode.lastIndexOf('\r', endIndex)
            ) + 1;
          // Exclude just the separator before the closing marker, not authored
          // blank lines inside the region. Treat CRLF as one line ending.
          let end = lineStart;
          if (end > start && sourceCode[end - 1] === '\n') end--;
          if (end > start && sourceCode[end - 1] === '\r') end--;
          return sourceCode.slice(start, Math.max(start, end));
        }

        return sourceCode;
      })();

      // PrismJS themes target `pre[class*="language-"]`, so the language must
      // be set on the code node for the theme styles to apply.
      const language = getLanguage(normalizedPath);

      // Change the node type to code, insert our file as value and set language.
      const codeNode = node as Node & { type: string; value?: string; lang?: string | null };
      codeNode.type = 'code';
      codeNode.value = code;
      codeNode.lang = language;
    });
  };
};
