import { Hono } from "hono"

import { uploadRoutes } from "./uploadRouter.js"

export const router = new Hono()

router.route('/upload', uploadRoutes)