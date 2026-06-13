import z from "zod"
import { DbEntitySchema } from "./common.model"


export const UserSchema = DbEntitySchema.extend({
    name: z.string(),
    email: z.email(),
    googleId: z.string(),
})

export type User = z.infer<typeof UserSchema>