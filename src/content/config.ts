// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    published: z.date(),
    author: z.string(),
    categories: z.array(z.string()),
    draft: z.boolean().optional().default(false),
    cover: z
      .object({
        src: z.string().default('./header.png'),
        alt: z.string().default('Cover image'),
      })
      .optional(),
    credit: z
      .object({
        url: z.string(),
        author: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
};
