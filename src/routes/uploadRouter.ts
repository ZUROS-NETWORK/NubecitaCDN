import { Hono } from "hono"
import { handleUpload } from "../handlers/uploadHandler.js"
import { authMiddleware } from "../middlewares/auth.js"

export const uploadRoutes = new Hono()

uploadRoutes.post('/', authMiddleware, handleUpload)
