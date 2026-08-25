import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { unified } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeKatex from 'rehype-katex';
import rehypePrismPlus from 'rehype-prism-plus';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { contentAssets } from './src/lib/content-assets';
import { remarkColor } from './src/remark/color';
import { remarkContentAssets } from './src/remark/content-assets';
import { remarkDirectiveCustom } from './src/remark/directive';
import { remarkEmbedSnippet } from './src/remark/embed-snippet';
import { remarkImageData } from './src/remark/image-data';
import { katexMacros } from './src/remark/katex-macros';
import { remarkMermaid } from './src/remark/mermaid';
import './src/remark/prism-mips-asm';
import { remarkToc } from './src/remark/toc';

const vitePlugins = [contentAssets()];

const vite = {
  plugins: vitePlugins,
  environments: {
    ssr: {
      resolve: {
        // The autocomplete packages' ESM builds use extensionless relative
        // imports and their `main` points at UMD builds — neither works under
        // Node ESM. Bundle them through Vite's resolver instead of
        // externalizing them.
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
  integrations: [react()],
  vite,
  build: {
    // Inline all stylesheets into the HTML: CSS is small and this removes a
    // render-blocking request on every page load.
    inlineStylesheets: 'always',
  },
  markdown: {
    syntaxHighlight: false,
    processor: unified({
      remarkPlugins: [
        remarkGfm,
        remarkMath,
        remarkDirective,
        remarkColor,
        remarkImageData,
        remarkDirectiveCustom,
        [remarkToc, { tight: true }],
        remarkEmbedSnippet,
        remarkMermaid,
        remarkContentAssets,
      ],
      rehypePlugins: [
        [rehypePrismPlus, { ignoreMissing: true }],
        [rehypeKatex, { strict: 'ignore', macros: katexMacros, throwOnError: false }],
        [rehypeAutolinkHeadings, { behavior: 'prepend', className: ['anchor', 'before'] }],
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      ],
    }),
  },
});
