import z from "zod";
import { ToolsetSchema } from "../models/toolsets.model";
import { request } from "./common";
import { ToolSchema } from "../models/tools.model";


const baseUrl = import.meta.env.VITE_API_BASE_URL
const resourceUrl = baseUrl + "/api/toolsets"

export async function getToolsets() {
    return await request({ schema: z.array(ToolsetSchema), url: resourceUrl })
}

export async function getToolByUuid(uuid: string) {
    return await request({ schema: ToolSchema, url: `${resourceUrl}/${uuid}` })
}   