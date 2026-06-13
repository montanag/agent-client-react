import { z } from 'zod'
import { DbEntitySchema } from './common.model'


export const ToolsetVersionSchema = DbEntitySchema.extend({
    toolsetUuid: z.string(),
    version: z.string(),
    providerUuid: z.string(),
    objectLocation: z.string(),
    supportsMultiInstance: z.boolean(),
    active: z.boolean(),
})

export type ToolsetVersion = z.infer<typeof ToolsetVersionSchema>