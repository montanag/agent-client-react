import { UserSchema, type User } from "../models/user";
import { apiFetch } from "./common";

// TODO: Move base URL to a config file or env var
const baseUrl = "http://localhost:3001"
const resourceUrl = baseUrl + "/api/auth"

export async function authenticateGoogle(credential: string): Promise<User> {
    return await apiFetch({
        schema: UserSchema,
        url: resourceUrl + '/google',
        options: {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ credential }),
        }
    });
}

export async function verifyAuthentication(unauthorizedBehavior: "redirectAndThrow" | "throwOnly" = "redirectAndThrow"): Promise<User> {
    return await apiFetch({ schema: UserSchema, url: resourceUrl + '/me', unauthorizedBehavior });
}
