import z from "zod";
import { ToolsetSchema } from "../models/toolset";
import { apiFetch } from "./common";

// TODO: Move base URL to a config file or env var
const baseUrl = "http://localhost:3001"
const resourceUrl = baseUrl + "/api/toolsets"

export async function getToolsets() {
    return await apiFetch({ schema: z.array(ToolsetSchema), url: resourceUrl })
}