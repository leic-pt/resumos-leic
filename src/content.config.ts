import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

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
    template: z.string().optional(),
    components: z.array(z.string()).optional(),
    years: z
      .array(
        z.object({
          name: z.string(),
          semesters: z.array(
            z.object({
              name: z.string(),
              courses: z.array(
                z.object({
                  name: z.string(),
                  description: z.string(),
                  link: z.string(),
                  image: z.string().optional(),
                  color: z.string(),
                  long: z.boolean().optional(),
                })
              ),
            })
          ),
        })
      )
      .optional(),
  }),
});

export const collections = { pages };
