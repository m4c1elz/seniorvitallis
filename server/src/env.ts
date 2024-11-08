import { z } from "zod"
import "dotenv/config"

const envSchema = z.object({
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string(),
    JWT_REFRESH_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
