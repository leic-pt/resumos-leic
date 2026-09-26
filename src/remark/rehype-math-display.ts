import type { Root } from 'hast';
import type { Plugin } from 'unified';
import { SKIP, visit } from 'unist-util-visit';

/** Restore Gatsby's outer display-math wrapper after rehype-katex. */
export const rehypeMathDisplay: Plugin<[], Root> = () => (tree) => {
  visit(tree, 'element', (node, index, parent) => {
    if (
      node.tagName !== 'span' ||
      !Array.isArray(node.properties.className) ||
      !node.properties.className.includes('katex-display') ||
      index === undefined ||
      !parent
    ) {
      return;
    }

    parent.children[index] = {
      type: 'element',
      tagName: 'div',
      properties: { className: ['math', 'math-display'] },
      children: [node],
    };

    return SKIP;
  });
};
