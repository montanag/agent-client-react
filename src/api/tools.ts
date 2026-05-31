import z, { ZodObject, type ZodRawShape } from "zod"
import { ToolSchema, type Tool } from "../models/tool"
import { apiFetch } from "./common"

// TODO: Move base URL to a config file or env var
const baseUrl = "http://localhost:3001"
const resourceUrl = baseUrl + "/api/tools"

export async function getTools(): Promise<Tool[]> {
    // Fetch the tools
    const baseTools = await apiFetch(z.array(ToolSchema), resourceUrl)

    // Map the tool json objects to strongly types tools
    return baseTools.map((tool: z.infer<typeof ToolSchema>): Tool => {
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

export async function executeTool<TSchema extends ZodObject<ZodRawShape>>(
    toolUuid: string,
    input: z.infer<TSchema>
): Promise<unknown> {
    const result = await fetch(resourceUrl + "/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            toolUuid,
            input: input
        })
    })
    return result.json();
}