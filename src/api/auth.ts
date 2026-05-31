// TODO: Move base URL to a config file or env var
const baseUrl = "http://localhost:3001"
const resourceUrl = baseUrl + "/api/auth"

export async function authenticateGoogle(credential: string) {
    const result = await fetch(resourceUrl + '/google', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // sends/receives the httpOnly cookie
        body: JSON.stringify({ credential }),
    });
    return await result.json();
}