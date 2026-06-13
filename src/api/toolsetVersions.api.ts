import z from "zod";
import { request } from "./common";
import { ToolsetVersionSchema } from "../models/toolsetVersions.model";


const baseUrl = import.meta.env.VITE_API_BASE_URL;
const resourceUrl = (toolsetUuid: string) => baseUrl + `/api/toolsets/${toolsetUuid}/versions`

export async function getToolsetVersions(toolsetUuid: string) {
    return await request({ schema: z.array(ToolsetVersionSchema), url: resourceUrl(toolsetUuid) })
}

export async function getToolsetVersionByUuid(toolsetUuid: string, uuid: string) {
    return await request({ schema: ToolsetVersionSchema, url: `${resourceUrl(toolsetUuid)}/${uuid}` })
}