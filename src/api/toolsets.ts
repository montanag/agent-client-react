// TODO: Move base URL to a config file or env var
const baseUrl = "http://localhost:3001"
const resourceUrl = baseUrl + "/api/toolsets"

export async function getToolsets() {
    const res = await fetch(resourceUrl)
    return res.json();
}