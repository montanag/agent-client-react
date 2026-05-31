import { z } from 'zod'

export const ToolsetSchema = z.object({
    uuid: z.string(),
    providerUuid: z.string(),
    name: z.string(),
    imgUrl: z.url(),
})

export type Toolset = z.infer<typeof ToolsetSchema>