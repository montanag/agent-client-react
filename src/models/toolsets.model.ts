import { z } from 'zod'
import { DbEntitySchema } from './common.model'


export const ToolsetSchema = DbEntitySchema.extend({
    name: z.string(),
    description: z.string().optional(),
    providerUuid: z.string(),
})

export type Toolset = z.infer<typeof ToolsetSchema>