import z from "zod";
import { ToolsetSchema } from "../models/toolsets.model";
import { request } from "./common";


const baseUrl = import.meta.env.VITE_API_BASE_URL
const resourceUrl = baseUrl + "/api/toolsets"

export async function getToolsets() {
    return await request({ schema: z.array(ToolsetSchema), url: resourceUrl })
}

export async function getToolsetByUuid(uuid: string) {
    return await request({ schema: ToolsetSchema, url: `${resourceUrl}/${uuid}` })
}   