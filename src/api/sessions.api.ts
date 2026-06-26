import z from "zod";
import { SessionSchema } from "../models/sessions.model";
import { ToolSchema, type Tool } from "../models/tools.model";
import { request } from "./common";


const baseUrl = import.meta.env.VITE_API_BASE_URL
const resourceUrl = baseUrl + "/api/sessions"

export async function createSession() {
    return await request({ schema: SessionSchema, url: resourceUrl, options: { method: "POST" } });
}

export async function getSessionByUuid(uuid: string) {
    return await request({ schema: SessionSchema, url: `${resourceUrl}/${uuid}` });
}

export async function getSessions() {
    return await request({ schema: SessionSchema.array(), url: resourceUrl });
}

export async function getTools(): Promise<Tool[]> {
    return await request({ schema: ToolSchema.array(), url: `${resourceUrl}/1234/tools` });
}

export async function executeTool(qualifiedToolName: string, input: any) {
    return await request({
        schema: z.any(), url: `${resourceUrl}/1234/tools/${qualifiedToolName}/execute`, options: {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json"
            }
        }
    },)
}