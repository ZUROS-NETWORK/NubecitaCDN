import { Hono } from "hono"

import { uploadRoutes } from "./uploadRouter.js"
import { staticFilesNoCache } from "./staticFiles.js"
import { staticFiles } from "./staticFilesNoCache.js"
import { pages } from "../views/index.js"

export const router = new Hono()

router.route('/', pages)
router.route('/upload', uploadRoutes)
router.route('/', staticFilesNoCache)
router.route('/', staticFiles)