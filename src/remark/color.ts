import { visit } from 'unist-util-visit';
import type { Node, Root } from 'mdast';
import type { Plugin } from 'unified';

type MutableData = {
  hName?: string;
  hProperties?: Record<string, unknown>;
  [key: string]: unknown;
};

/**
 * Port of `plugins/gatsby-remark-color`: turns links whose URL starts with
 * `color:` into a `<span class="md-color--<suffix>">` wrapper (the suffix is
 * the part after `color:`), keeping the link's children as the span's content.
 */
export const remarkColor: Plugin<[], Root, Root> = () => (tree) => {
  visit(tree, 'link', (node) => {
    if (!node.url.startsWith('color:')) return;

    const colorNode = node as Node & { type: string };
    colorNode.type = 'paragraph';

    const data = (colorNode.data ??= {}) as MutableData;
    const hProperties = (data.hProperties ??= {});
    const classes = (hProperties.class as string[] | undefined) ?? (hProperties.class = []);

    classes.push(`md-color--${node.url.replace('color:', '')}`);
    data.hName = 'span';
  });
};
