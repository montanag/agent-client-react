// TODO: Move base URL to a config file or env var
const baseUrl = "http://localhost:3001"
const resourceUrl = baseUrl + "/api/tools"

export async function getTools() {
    const res = await fetch(resourceUrl)
    return res.json();
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