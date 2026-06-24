import z from 'zod'
import { DbEntitySchema } from './common.model'

export const SessionSchema = DbEntitySchema.extend({
    userUuid: z.string(),
})

export type Session = z.infer<typeof SessionSchema>
