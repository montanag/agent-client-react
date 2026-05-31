import { z } from 'zod'

export class UnauthorizedError extends Error {
    constructor() {
        super('Unauthorized')
        this.name = 'UnauthorizedError'
    }
}

export async function apiFetch<T>({
    schema,
    url,
    options,
    unauthorizedBehavior = "redirectAndThrow"
}: {
    schema: z.ZodType<T>,
    url: string,
    options?: RequestInit,
    unauthorizedBehavior?: "redirectAndThrow" | "throwOnly"
}): Promise<T> {
    const res = await fetch(url, { credentials: 'include', ...options })

    if (res.status === 401) {
        if (unauthorizedBehavior === "redirectAndThrow") {
            window.location.href = '/signin'
        }
        throw new UnauthorizedError()
    }

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`)
    }

    const data = await res.json()
    return schema.parse(data) // throws if shape doesn't match
}