import { Hono } from "hono"
import { serveStatic } from '@hono/node-server/serve-static'

export const staticFiles = new Hono()

staticFiles.use('/nocache/*', serveStatic({
    root: './public',
    rewriteRequestPath: (path) => path.replace(/^\/nocache/, ''),
    onFound: (_path, c) => {
      c.header('Cache-Control', 'no-store, no-cache, must-revalidate')
      c.header('Pragma', 'no-cache')
      c.header('Expires', '0')
    }
  }))