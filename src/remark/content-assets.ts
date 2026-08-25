import path from 'node:path';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import type { VFile } from 'vfile';

const contentRoot = path.resolve(process.cwd(), 'content');

/**
 * Rewrites relative SVG image URLs to absolute `/content/...` URLs so they
 * bypass Astro's image pipeline (which cannot probe the draw.io SVGs used in
 * the content) and are served as static files by the `contentAssets` Vite
 * plugin. Raster images keep going through Astro's optimized pipeline.
 */
export function remarkContentAssets() {
  return (tree: Root, file: VFile) => {
    const filePath = (file as { path?: string }).path;
    if (!filePath) return;

    const relative = path.relative(contentRoot, filePath);
    const directory = path.posix.dirname(relative);

    visit(tree, 'image', (node) => {
      const url = node.url;
      if (url.startsWith('/') || URL.canParse(url)) return;
      if (!/\.svg$/i.test(url.split('#')[0] ?? url)) return;

      node.url = `/content/${path.posix.join(directory, url)}`;
    });
  };
}
