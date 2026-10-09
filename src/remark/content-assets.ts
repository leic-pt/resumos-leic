import path from 'node:path';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import type { VFile } from 'vfile';

const contentRoot = path.resolve(process.cwd(), 'content');

const rasterExtensions: string[] = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

/**
 * Rewrites relative image URLs to absolute `/content/...` URLs: SVGs bypass
 * Astro's image pipeline and are served as static files by the `contentAssets` Vite plugin;
 * raster images keep their relative URL so they go through Astro's optimized
 * pipeline, and are wrapped in a link to the original file.
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
      const isSvg = url.endsWith('.svg');
      const fullPath = `/content/${path.posix.join(directory, url)}`;

      if (isSvg) {
        node.url = fullPath;
        return;
      }

      if (index === undefined || !parent) return;
      if (rasterExtensions.includes(path.extname(fullPath).toLowerCase())) {
        parent.children[index] = {
          type: 'link',
          url: fullPath,
          data: {
            hProperties: {
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
