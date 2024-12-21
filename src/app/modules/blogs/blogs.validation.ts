import { z } from "zod";

const createBlogValidation = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required"),
        content: z.string().min(1, "Content is required"),
        author: z.string(),
    })
})

export const blogValidation = {
    createBlogValidation
}
