import * as z from "zod"

export const articleSchema = z.object({
    title: z.string().min(5, {
        message: "Title must be at least 5 characters.",
    }),
    slug: z.string().min(5, {
        message: "Slug must be at least 5 characters.",
    }).regex(/^[a-z0-9-]+$/, {
        message: "Slug must contain only lowercase letters, numbers, and hyphens.",
    }),
    status: z.enum(["published", "draft", "archived"]),
    category: z.string().min(1, {
        message: "Please select a category.",
    }),
    content: z.string().optional(),
})

export type ArticleFormValues = z.infer<typeof articleSchema>
