import z from "zod"
import { DbEntitySchema } from "./common.model";


export const ProviderSchema = DbEntitySchema.extend({
    name: z.string(),
})

export type Provider = z.infer<typeof ProviderSchema>
