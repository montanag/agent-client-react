import z from "zod"

export const UserSchema = z.object({
    name: z.string(),
    uuid: z.string(),
    email: z.email(),
    googleId: z.string(),
    createdAt: z.iso.datetime().transform(val => new Date(val)),
    updatedAt: z.iso.datetime().transform(val => new Date(val)),
})

export type User = z.infer<typeof UserSchema>