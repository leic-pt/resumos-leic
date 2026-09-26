import type { Element, Root } from 'hast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

/** Keep native scrolling blocks readable and keyboard-accessible after Prism. */
export const rehypeContentBlocks: Plugin<[], Root> = () => (tree) => {
  visit(tree, 'element', (node) => {
    if (node.tagName === 'table') {
      node.properties.tabIndex = 0;
      return;
    }
    if (node.tagName !== 'pre') return;

    const code = node.children.find(
      (child): child is Element => child.type === 'element' && child.tagName === 'code'
    );
    if (!code) return;

    const preClasses = node.properties.className ?? [];
    if (preClasses.some((name) => name.startsWith('language-'))) return;

    // Unsupported grammars leave the language on code but skip Prism's pre styling.
    const codeClasses = code.properties.className ?? [];
    const language = codeClasses.find((name) => name.startsWith('language-'));
    if (!language) code.properties.className = [...codeClasses, 'language-text'];
    node.properties.className = [...preClasses, language ?? 'language-text'];
  });
};
