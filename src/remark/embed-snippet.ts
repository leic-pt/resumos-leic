// Adapted from https://github.com/gatsbyjs/gatsby/blob/gatsby-remark-embed-snippet%408.17.0-react19.2/packages/gatsby-remark-embed-snippet/src/index.js
import fs from 'node:fs';
import path from 'node:path';
import { visit } from 'unist-util-visit';
import type { Code, Node, Root } from 'mdast';
import type { Plugin } from 'unified';
import parseNumericRange from 'parse-numeric-range';

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

export const remarkEmbedSnippet: Plugin<[], Root, Root> = () => (tree, file) => {
  const directory = file.dirname;
  if (!directory || !fs.existsSync(directory)) {
    throw new Error(`Invalid directory specified "${directory}"`);
  }

  visit(tree, 'inlineCode', (node) => {
    const value = node.value;
    if (!value.startsWith('embed:')) return;

    const filePath = value.slice(6);
    let snippetPath = path.join(directory, filePath);

    // Embed specific lines numbers of a file
    let lines: number[] = [];
    let snippetName = '';
    const rangePrefixIndex = snippetPath.indexOf('#L');
    if (rangePrefixIndex > -1) {
      const range = snippetPath.slice(rangePrefixIndex + 2);
      if (range.length === 1) {
        lines = [Number.parseInt(range, 10)];
      } else {
        lines = parseNumericRange(range);
      }
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
        const endSnippetMatcher = new RegExp(`(.*)[\r\n][^\r\n]*end-snippet{${snippetName}}`, 'gs');
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
    const codeNode = node as Node as Code;
    codeNode.type = 'code';
    codeNode.value = code;
    codeNode.lang = language;
  });
};
