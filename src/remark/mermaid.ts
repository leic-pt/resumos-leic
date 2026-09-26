import { visit } from 'unist-util-visit';
import type { Node, Root, Text } from 'mdast';
import type { Plugin } from 'unified';

type MutableData = {
  hName?: string;
  hProperties?: Record<string, unknown>;
  [key: string]: unknown;
};

/**
 * Port of `plugins/gatsby-remark-mermaid`: turns fenced code blocks with
 * `lang: mermaid` into a paragraph containing the raw diagram text, rendered
 * as `<div class="mermaid">` via `data.hName` / `data.hProperties` (the
 * mermaid client library picks it up from the DOM).
 */
export const remarkMermaid: Plugin<[], Root, Root> = () => (tree) => {
  visit(tree, { type: 'code', lang: 'mermaid' }, (node) => {
    const code = node as Node & {
      children?: Text[];
      value?: string;
      meta?: string;
      lang?: string;
    };

    code.type = 'paragraph';
    code.children = [{ type: 'text', value: code.value ?? '' }];

    const data = (code.data ??= {}) as MutableData;
    const hProperties = (data.hProperties ??= {});
    const classes = (hProperties.class as string[] | undefined) ?? (hProperties.class = []);

    classes.push('mermaid');
    data.hName = 'div';

    delete code.value;
    delete code.meta;
    delete code.lang;
  });
};
