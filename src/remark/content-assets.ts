import path from 'node:path';
import { readFileSync } from 'node:fs';
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
      addSvgDimensions(node, path.posix.join(directory, url));
    });
  };
}

/**
 * Adds explicit width/height to SVG images (derived from the file's own
 * attributes) so they don't cause layout shift while loading. The image
 * pipeline never processes these files, so nothing else sets dimensions.
 */
function addSvgDimensions(node: { data?: Record<string, unknown> }, url: string) {
  try {
    const file = readFileSync(path.join(contentRoot, url), 'utf8');
    const svgStart = file.indexOf('<svg');
    if (svgStart === -1) return;
    const rootTag = file.slice(svgStart, file.indexOf('>', svgStart) + 1);
    const width = /width="([\d.]+)/.exec(rootTag)?.[1];
    const height = /height="([\d.]+)/.exec(rootTag)?.[1];
    const viewBox = /viewBox="[\d.\s-]+ ([\d.]+) ([\d.]+)"/.exec(rootTag);
    if (!width || !height) {
      if (!viewBox) return;
      setDimensions(node, viewBox[1], viewBox[2]);
      return;
    }
    setDimensions(node, width, height);
  } catch {
    // Missing/broken asset: leave the image without dimensions.
  }
}

function setDimensions(node: { data?: Record<string, unknown> }, width: string, height: string) {
  node.data ??= {};
  const properties = (node.data.hProperties ??= {}) as Record<string, unknown>;
  properties.width = Number.parseFloat(width);
  properties.height = Number.parseFloat(height);
}
