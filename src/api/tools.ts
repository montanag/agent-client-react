import z, { ZodObject } from "zod"
import type { Tool } from "../models/tool"

// TODO: Move base URL to a config file or env var
const baseUrl = "http://localhost:3001"
const resourceUrl = baseUrl + "/api/tools"

export async function getTools(): Promise<Tool[]> {
    // Fetch the tools
    const result = await fetch(resourceUrl)
    const raw = await result.json()

    // Map the tool json objects to strongly types tools
    return raw.map((tool: any): Tool => {
        // Get the input schema
        if (!tool.inputSchema) {
            throw new Error(
                `Tool "${tool?.name}" does not contain an inputs schema.`
            )
        }

        // Verify the input schema
        const schema = z.fromJSONSchema(tool.inputSchema);
        if (!(schema instanceof ZodObject)) {
            throw new Error(
                `Tool "${tool?.name}" has an invalid inputSchema: expected a ZodObject, got ${schema.constructor.name}`
            );
        }

        return {
            ...tool,
            inputSchema: schema,
        };
    });
}

export async function executeTool() {
    const res = await fetch(resourceUrl + "/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "toolUuid": "gmail-search-emails-tool",
            "input": {
                query: "my query"
            }
        })
    })
    return res;
}