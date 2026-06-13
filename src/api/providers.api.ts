import z from "zod"
import { request } from "./common"
import { ProviderSchema } from "../models/providers.model"


const baseUrl = import.meta.env.VITE_API_BASE_URL
const resourceUrl = baseUrl + "/api/providers"

export async function getProviders() {
    return await request({ schema: z.array(ProviderSchema), url: resourceUrl })
}

export async function getProviderByUuid(uuid: string) {
    return await request({ schema: ProviderSchema, url: `${resourceUrl}/${uuid}` })
}