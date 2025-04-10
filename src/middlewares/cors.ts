import { cors } from "hono/cors";

export const corsMiddleware = cors({
  origin: process.env.CORS_ORIGIN || '*', 
  allowMethods: process.env.CORS_ALLOW_METHODS?.split(',') || ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: process.env.CORS_ALLOW_HEADERS?.split(',') || ['Content-Type', 'Authorization'], 
  exposeHeaders: process.env.CORS_EXPOSE_HEADERS?.split(',') || ['Content-Length', 'X-Custom-Header'], 
  credentials: process.env.CORS_CREDENTIALS === 'true',
  maxAge: parseInt(process.env.CORS_MAX_AGE || '86400'),
});