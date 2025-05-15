import { Hono } from "hono"
import { serveStatic } from '@hono/node-server/serve-static'

export const staticFilesNoCache = new Hono()

staticFilesNoCache.use('/*', serveStatic({
    root: './public',
    onFound: (path, c) => {
      c.header('Cache-Control', 'public, max-age=31536000, immutable')
    }
  }))
