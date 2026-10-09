import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { contributorsLoader } from './data/load-contributors';

/**
 * All site pages live in `content/` as markdown files with a `path`
 * frontmatter field (e.g. `/asa/introducao`). The homepage is the entry
 * whose path is `/`.
 */
const pages = defineCollection({
  loader: glob({ base: './content', pattern: '**/*.md', deferRender: true, retainBody: false }),
  schema: z.object({
    path: z.string(),
    title: z.string().optional(),
    description: z.string().nullable().optional(),
    type: z.string().optional(),
    components: z.array(z.string()).optional(),
  }),
});

const contributors = defineCollection({
  loader: contributorsLoader(),
});

export const collections = { contributors, pages };
