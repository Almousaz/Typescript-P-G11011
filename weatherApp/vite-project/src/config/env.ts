import { z } from "zod";


export const environmentVariable = z.object({
    VITE_BASE_URL : z.string(),
    VITE_API_KEY : z.string()

})

export const env = environmentVariable.parse(import.meta.env)