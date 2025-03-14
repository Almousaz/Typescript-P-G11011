import { z } from "zod";
// import dotenv from 'dotenv'
// dotenv.config({path : '.env'})
export const zEnv = z.object({
    VITE_SOME_SECRET : z.string(),
    VITE_ANOTHER_SECRET : z.string()
})

export const env = zEnv.parse(import.meta.env)
