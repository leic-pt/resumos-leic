import { visit } from 'unist-util-visit';
import type { Parent, Root as MdastRoot } from 'mdast';
import type { Element, Root as HastRoot } from 'hast';
import type { Plugin } from 'unified';
import type { MarkdownHeading } from 'astro';

type MutableData = {
  hName?: string;
  hProperties?: Record<string, unknown>;
  [key: string]: unknown;
};

/**
 * Convert code blocks with language `toc` to a `<nav class="toc">` element,
 * which will be further processed by `rehypeToc` below.
 */
export const remarkToc: Plugin<[], MdastRoot, MdastRoot> = () => {
  return (tree) => {
    // find position of TOC
    const index = tree.children.findIndex((node) => node.type === 'code' && node.lang === 'toc');
    if (index < 0) {
      return;
    }

    const tocNode = tree.children[index] as Parent;
    tocNode.type = 'html';
    tocNode.children = [];
    const data = (tocNode.data ??= {}) as MutableData;
    data.hName = 'nav';
    const properties = (data.hProperties ??= {});
    properties.className = ['toc'];
  };
};

/**
 * Find `<nav class="toc">` elements and generate a table of contents based on the
 * headings astro has exposed.
 */
export const rehypeToc: Plugin<[], HastRoot> = () => (tree, file) => {
  visit(tree, 'element', (node) => {
    if (node.tagName !== 'nav' && !node.properties?.className?.includes('toc')) {
      return;
    }
    node.children = [buildToc(file.data.astro?.headings ?? [])];
  });
};

// TOC does not include headings with level 1
const EXCLUDED_LEVEL = 1;

const buildToc = (headings: MarkdownHeading[]): Element => {
  const ul = (): Element => ({ type: 'element', tagName: 'ul', properties: {}, children: [] });
  const li = (heading: MarkdownHeading): Element => ({
    type: 'element',
    tagName: 'li',
    properties: {},
    children: [
      {
        type: 'element',
        tagName: 'a',
        properties: { href: `#${heading.slug}` },
        children: [{ type: 'text', value: heading.text }],
      },
    ],
  });
  const stack: Element[] = [ul()];
  let lastItem: Element | null = null;

  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];

    if (heading.depth <= EXCLUDED_LEVEL) {
      continue;
    }

    if (heading.depth > stack.length + EXCLUDED_LEVEL) {
      // increase nesting level
      if (!lastItem || heading.depth > stack.length + EXCLUDED_LEVEL + 1) {
        throw new Error(
          `heading with depth ${heading.depth} exists without any parent heading of depth ${heading.depth - 1}`
        );
      }

      const newDepth = ul();
      lastItem.children.push(newDepth);
      stack.push(newDepth);
    } else if (heading.depth < stack.length + EXCLUDED_LEVEL) {
      stack.pop();
    }

    let item = li(heading);
    stack[stack.length - 1].children.push(item);
    lastItem = item;
  }

  return stack[0];
};
