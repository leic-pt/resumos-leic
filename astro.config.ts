import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { unified } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeKatex from 'rehype-katex';
import rehypePrismPlus from 'rehype-prism-plus';
import type { TrustContext } from 'katex';
import remarkDirective from 'remark-directive';
import remarkMath from 'remark-math';
import { contentAssets } from './src/lib/content-assets';
import { remarkColor } from './src/remark/color';
import { remarkContentAssets } from './src/remark/content-assets';
import { remarkDirectiveCustom } from './src/remark/directive';
import { remarkEmbedSnippet } from './src/remark/embed-snippet';
import { remarkImageData } from './src/remark/image-data';
import { katexMacros } from './src/remark/katex-macros';
import { remarkMermaid } from './src/remark/mermaid';
import { collectText, headingAriaLabel, rehypeHeadingIds } from './src/remark/rehype-heading-ids';
import { rehypeMathDisplay } from './src/remark/rehype-math-display';
import { rehypeContentBlocks } from './src/remark/rehype-content-blocks';
import './src/remark/prism-mips-asm';
import { remarkToc } from './src/remark/toc';

const vitePlugins = [contentAssets()];

const vite = {
  plugins: vitePlugins,
  environments: {
    ssr: {
      resolve: {
        // The package's ESM build uses extensionless relative imports and its
        // `main` points at a UMD build — neither works under Node ESM. Bundle
        // it through Vite's resolver instead of externalizing it.
        noExternal: [
          '@algolia/autocomplete-core',
          '@algolia/autocomplete-shared',
          '@algolia/autocomplete-plugin-algolia-insights',
        ],
      },
    },
    prerender: {
      resolve: {
        noExternal: [
          '@algolia/autocomplete-core',
          '@algolia/autocomplete-shared',
          '@algolia/autocomplete-plugin-algolia-insights',
        ],
      },
    },
  },
};

export default defineConfig({
  site: 'https://resumos.leic.pt',
  // Gatsby builds every page with a trailing slash; match its URL scheme.
  trailingSlash: 'always',
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  integrations: [react()],
  vite,
  markdown: {
    syntaxHighlight: false,
    processor: unified({
      // The Gatsby pipeline did not run smartypants; keep the content text
      // byte-identical (e.g. `etc...` must not become `etc…`).
      smartypants: false,
      remarkPlugins: [
        remarkMath,
        remarkDirective,
        remarkColor,
        remarkDirectiveCustom,
        [remarkToc, { tight: true }],
        remarkImageData,
        remarkEmbedSnippet,
        remarkMermaid,
        remarkContentAssets,
      ],
      rehypePlugins: [
        // Astro assigns heading ids after user plugins, so ids must be added
        // here first for rehype-autolink-headings to work.
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            // rehype-autolink-headings v7 dropped the `className` option; the
            // link classes and aria-label come from a properties builder.
            // v7 dropped both the `className` option and the default SVG
            // content; the octicon link icon and `anchor before` classes are
            // recreated to match the Gatsby output.
            content: {
              type: 'element',
              tagName: 'svg',
              properties: {
                ariaHidden: 'true',
                focusable: 'false',
                height: 16,
                viewBox: '0 0 16 16',
                width: 16,
              },
              children: [
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    fillRule: 'evenodd',
                    d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
                  },
                  children: [],
                },
              ],
            },
            properties: (element: Parameters<typeof collectText>[0]) => ({
              className: ['anchor', 'before'],
              ariaLabel: headingAriaLabel(element as Parameters<typeof headingAriaLabel>[0]),
            }),
          },
        ],
        [rehypePrismPlus, { ignoreMissing: true }],
        [
          rehypeKatex,
          {
            strict: 'ignore',
            macros: katexMacros,
            throwOnError: false,
            // Allow the \htmlClass macro (used by \smartcolor) — ported from
            // the Gatsby configuration.
            trust: (context: TrustContext) =>
              context.command === '\\htmlClass' && /md-color--[a-zA-Z]+/.test(context.class),
          },
        ],
        rehypeMathDisplay,
        rehypeContentBlocks,
        [rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }],
      ],
    }),
  },
});
