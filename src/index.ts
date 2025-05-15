import { Hono } from 'hono'
import 'dotenv/config'

import { serve } from '@hono/node-server'
import { cors } from 'hono/cors';
import { router } from './routes/index.js'
import { corsMiddleware } from './middlewares/cors.js';
const app = new Hono()

app.use('*', corsMiddleware);

const port: any = process.env.PORT || 3000;
app.route('/', router);
serve({
  fetch: app.fetch,
  port: port
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})