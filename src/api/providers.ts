// TODO: Move base URL to a config file or env var
const baseUrl = "http://localhost:3001"
const resourceUrl = baseUrl + "/api/providers"

export interface InstallToolsetResponse {
    type: string,
    authorizationUrl: string
}

export async function installToolset(): Promise<InstallToolsetResponse> {
    const result = await fetch(resourceUrl + "/install", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            providerUuid: "google-provider"
        })
    })

    return await result.json();
}