import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';
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
      server.middlewares.use((req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next();
        if (!(req.url ?? '').startsWith('/content/')) return next();

        void serveContentAsset(req, res, next).catch(next);
      });
    },
    async writeBundle() {
      await copyContentAssets();
    },
  };
}

type MiddlewareNext = (error?: unknown) => void;

async function serveContentAsset(req: IncomingMessage, res: ServerResponse, next: MiddlewareNext) {
  const url = decodeURIComponent((req.url ?? '').split('?')[0]);
  const filePath = path.resolve(contentRoot, url.slice('/content/'.length));
  const relativePath = path.relative(contentRoot, filePath);

  if (
    relativePath === '..' ||
    relativePath.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relativePath)
  ) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  try {
    const canonicalRoot = await fs.realpath(contentRoot);
    const canonicalPath = await fs.realpath(filePath);
    const canonicalRelativePath = path.relative(canonicalRoot, canonicalPath);

    if (
      canonicalRelativePath === '..' ||
      canonicalRelativePath.startsWith(`..${path.sep}`) ||
      path.isAbsolute(canonicalRelativePath)
    ) {
      res.statusCode = 403;
      res.end('Forbidden');
      return;
    }

    const stat = await fs.stat(canonicalPath);
    if (!stat.isFile()) return next();

    const data = await fs.readFile(canonicalPath);
    res.setHeader('Content-Type', mimeTypes[path.extname(filePath)] ?? 'application/octet-stream');
    res.setHeader('Content-Length', data.length);
    if (req.method === 'HEAD') {
      res.end();
    } else {
      res.end(data);
    }
  } catch (error) {
    if (isMissingError(error)) return next();
    throw error;
  }
}

function isMissingError(error: unknown) {
  if (!error || typeof error !== 'object' || !('code' in error)) return false;
  const code = error.code;
  return code === 'ENOENT' || code === 'ENOTDIR';
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
    } else if (entry.isSymbolicLink()) {
      throw new Error(`Symlinks are not allowed in content/: ${src}`);
    } else if (filter(entry.name)) {
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.copyFile(src, dest);
    }
  }
}
