import z from 'zod'
import { DbEntitySchema } from './common.model'

export const ToolSchema = DbEntitySchema.extend({
    toolsetVersionUuid: z.string(),
    name: z.string(),
    description: z.string(),
    inputSchema: z.record(z.string(), z.unknown()),
})

// export type Tool<TSchema extends ZodObject<ZodRawShape> = ZodObject<ZodRawShape>> =
//     Omit<z.infer<typeof ToolSchema>, 'inputSchema'> & {
//         inputSchema: TSchema
//     }

export type Tool = z.infer<typeof ToolSchema>;