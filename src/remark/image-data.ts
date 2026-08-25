import { visit } from 'unist-util-visit';
import type { Image, Node, Root } from 'mdast';
import type { Plugin } from 'unified';

type MutableData = {
  hName?: string;
  hProperties?: Record<string, unknown>;
  [key: string]: unknown;
};

const getData = (node: Node): MutableData => (node.data ??= {}) as MutableData;

const onImageVisit = (node: Image): void => {
  const data = getData(node);
  const hProperties = (data.hProperties ??= {});

  if (data.preImageDataAlreadyVisited) return;

  if (!node.url) return;

  const splits = node.url.split('#');
  if (splits.length > 1) {
    const properties = splits.pop() as string;
    for (const prop of properties.split(';')) {
      const [k, v] = prop.split('=');
      hProperties[`data-${k}`] = v;
    }
    node.url = splits.join('#');
    data.remarkPreImages = true;
  }

  // SVGs don't get their captions set automatically, so manually create them
  const isSvg = splits[0].endsWith('.svg');
  if (isSvg && node.title) {
    const title = node.title;
    data.preImageDataAlreadyVisited = true;
    const nodeCopy = { ...node };
    const imageNode = node as { type: string; data?: unknown; children?: Node[] };
    imageNode.type = 'figure';
    imageNode.data = { hName: 'figure' };
    imageNode.children = [
      nodeCopy,
      {
        type: 'figureCaption',
        data: { hName: 'figcaption' },
        children: [{ type: 'text', value: title }],
      } as Node,
    ];
  }
};

/**
 * Port of `plugins/gatsby-remark-pre-image-data`: parses `#k=v;k=v` fragments
 * on image URLs into `data-hProperties` (`data-k` attributes, fragment
 * stripped), and wraps titled SVGs in a `figure` + `figcaption` (SVG captions
 * are not handled by the image pipeline). Guarded by
 * `data.preImageDataAlreadyVisited` so a later pass does not re-process it.
 */
export const remarkImageData: Plugin<[], Root, Root> = () => (tree) => {
  visit(tree, 'image', onImageVisit);
};
