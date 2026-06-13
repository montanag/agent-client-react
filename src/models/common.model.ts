import z from "zod";


export const DbEntitySchema = z.object({
    uuid: z.string(),
    createdAt: z.iso.datetime().transform(val => new Date(val)),
    updatedAt: z.iso.datetime().transform(val => new Date(val)),
})