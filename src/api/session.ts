// TODO: Move base URL to a config file or env var
const baseUrl = "http://localhost:3001"
const resourceUrl = baseUrl + "/api/session"

export interface CreateVoiceSessionResponse {
    token: string
}

export async function createVoiceSession(): Promise<CreateVoiceSessionResponse> {
    const result = await fetch(resourceUrl + "/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
    return (await result.json()) as CreateVoiceSessionResponse;
}