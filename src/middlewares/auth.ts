import type { Context, Next } from 'hono'
import { jwt } from 'hono/jwt'
import { secureHeaders } from 'hono/secure-headers'
const JwtSecret:any = process.env.JWT_SECRET

export const secureHeadersMiddleware = secureHeaders()
export async function authMiddleware(c: Context, next: Next) {
    const jwtMiddleware = jwt({
        secret: JwtSecret,
    })
    return jwtMiddleware(c, next)
}