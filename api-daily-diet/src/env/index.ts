import { z } from 'zod'

const envSchema = z.object({
    PORT: z
        .string()
        .transform((v) => parseInt(v))
        .default('8000'),
    JWT_SECRET: z.string(),
    JWT_EXPIRATION_TIME: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('⚠️ Invalid enviroment variables', _env.error.format())

    throw new Error('Invalid enviroment variables')
}

export const env = _env.data