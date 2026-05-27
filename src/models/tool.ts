import type { ZodObject, ZodRawShape } from "zod";

export interface Tool<TSchema extends ZodObject<ZodRawShape> = ZodObject<ZodRawShape>> {
    uuid: string;
    name: string;
    description: string;
    inputSchema: TSchema;
};