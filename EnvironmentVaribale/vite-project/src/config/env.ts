import { z } from "zod";


export const environmentVariable = z.object({
    VITE_API_CODE : z.string(),
})

export const env = environmentVariable.parse(import.meta.env)