import path from 'node:path';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import type { VFile } from 'vfile';

const contentRoot = path.resolve(process.cwd(), 'content');

const rasterExtensions: Record<string, true> = {
  '.png': true,
  '.jpg': true,
  '.jpeg': true,
  '.gif': true,
  '.webp': true,
};

/**
 * Rewrites relative image URLs to absolute `/content/...` URLs: SVGs bypass
 * Astro's image pipeline (which cannot probe the draw.io SVGs used in the
 * content) and are served as static files by the `contentAssets` Vite plugin;
 * raster images keep their relative URL so they go through Astro's optimized
 * pipeline, and are wrapped in a link to the original file — matching the
 * Gatsby output where clicking a diagram opens the full-resolution image.
 */
export function remarkContentAssets() {
  return (tree: Root, file: VFile) => {
    const filePath = 'path' in file && typeof file.path === 'string' ? file.path : undefined;
    if (!filePath) return;

    const relative = path.relative(contentRoot, filePath).split(path.sep).join('/');
    const directory = path.posix.dirname(relative);

    visit(tree, 'image', (node, index, parent) => {
      const url = node.url;
      if (url.startsWith('/') || URL.canParse(url)) return;
      const cleanUrl = url.split('#')[0] ?? url;
      const isSvg = /\.svg$/i.test(cleanUrl);

      if (isSvg) {
        node.url = `/content/${path.posix.join(directory, url)}`;
        return;
      }

      if (index === undefined || !parent) return;
      if (rasterExtensions[path.extname(cleanUrl).toLowerCase()]) {
        const data = (node.data ??= {}) as { hProperties?: Record<string, unknown> };
        data.hProperties = {
          ...(data.hProperties ?? {}),
          widths: [370, 800, 1200],
          sizes: '(max-width: 740px) 100vw, 740px',
        };
        const original = `/content/${path.posix.join(directory, cleanUrl)}`;
        parent.children[index] = {
          type: 'link',
          url: original,
          // Gatsby's image links open the full-resolution file in a new tab.
          data: {
            hProperties: {
              className: ['gatsby-resp-image-link'],
              target: '_blank',
              rel: 'noopener',
            },
          },
          children: [node],
        };
      }
    });
  };
}
