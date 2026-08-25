import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';

const contentRoot = path.resolve(process.cwd(), 'content');

const mimeTypes: Record<string, string> = {
  '.c': 'text/plain',
  '.cpp': 'text/plain',
  '.excalidraw': 'application/json',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

/**
 * Serves non-Markdown files from `content/` at `/content/` during development
 * and copies them into the build output. SVG diagrams (and any future linked
 * files) are referenced from Markdown with absolute `/content/...` URLs — see
 * `remarkContentAssets` — because Astro's image pipeline cannot probe the
 * draw.io-exported SVGs used across the content.
 */
export function contentAssets(): Plugin {
  return {
    name: 'content-assets',
    configureServer(server) {
      server.middlewares.use('/content/', async (req, res, next) => {
        try {
          const url = decodeURIComponent((req.url ?? '').split('?')[0]);
          const filePath = path.join(contentRoot, url);
          if (!filePath.startsWith(contentRoot)) return next();

          const data = await fs.readFile(filePath);
          res.setHeader(
            'Content-Type',
            mimeTypes[path.extname(filePath)] ?? 'application/octet-stream'
          );
          res.end(data);
        } catch {
          next();
        }
      });
    },
    async writeBundle() {
      await copyContentAssets();
    },
  };
}

async function copyContentAssets() {
  const outRoot = path.resolve(process.cwd(), 'dist', 'content');
  await copyDir(contentRoot, outRoot, (file) => path.extname(file) !== '.md');
}

async function copyDir(from: string, to: string, filter: (file: string) => boolean) {
  const entries = await fs.readdir(from, { withFileTypes: true });
  for (const entry of entries) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) {
      await copyDir(src, dest, filter);
    } else if (filter(entry.name)) {
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.copyFile(src, dest);
    }
  }
}
