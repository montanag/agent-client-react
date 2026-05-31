import { z, ZodObject, type ZodRawShape } from 'zod'

export const ToolSchema = z.object({
    uuid: z.string(),
    name: z.string(),
    description: z.string(),
    inputSchema: z.record(z.string(), z.unknown())
})

export type Tool<TSchema extends ZodObject<ZodRawShape> = ZodObject<ZodRawShape>> =
    Omit<z.infer<typeof ToolSchema>, 'inputSchema'> & {
        inputSchema: TSchema
    }