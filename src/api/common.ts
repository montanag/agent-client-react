import { z } from 'zod'

export async function apiFetch<T>(
    schema: z.ZodType<T>,
    url: string,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(url, { credentials: 'include', ...options })

    if (res.status === 401) {
        window.location.href = '/signin'
        throw new Error('Unauthorized')
    }

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`)
    }

    const data = await res.json()
    return schema.parse(data) // throws if shape doesn't match
}