import { Hono } from "hono"
import { html, raw } from "hono/html"
import { Layout } from "./components/Layout.js"
import { Home } from "./pages/Home.js"

export const pages = new Hono()

pages.get('/', (c) => {
  return c.html(
    Layout(
      html`
      ${Home()}
      `,
    {title: "NubecitaCDN", description: "NubecitaCDN es una herramienta para servir contenido estático a través del caché Cloudflare. Es una solución sencilla y práctica para proyectos que buscan utilizar sus propios servidores."})
  )
})

pages.get('/dashboard', (c) => {
  return c.html(
    Layout(
      html`
      <h1>Welcome to the Click Me Page</h1>
      <button onclick="alert('Button clicked!')">Click Me!</button>
    `, {title: "Click Me Page", description: "A simple page with a button that shows an alert when clicked."})
  )
})