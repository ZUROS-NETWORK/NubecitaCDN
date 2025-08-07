import { html } from "hono/html";

export const Home = () => {
    return html`
      <div class="min-h-screen bg-gradient-to-br from-slate-50 to-white">

      <header class="container mx-auto px-4 py-6">
        <nav class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 flex items-center justify-center">
              <img src="/favicon.webp" alt="NubecitaCDN Logo" />
            </div>
            <span class="text-xl font-bold text-pink-600">NubecitaCDN</span>
          </div>
          <div class="hidden md:flex items-center gap-6">
            <a href="#features" class="text-gray-600 hover:text-gray-900 transition-colors">
              Características
            </a>
            <a href="#how-it-works" class="text-gray-600 hover:text-gray-900 transition-colors">
              Cómo funciona
            </a>
          </div>
        </nav>
      </header>

      <section class="container mx-auto px-4 py-20 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Sirve tu contenido
          <br />
          <span class="text-pink-600">más rápido</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Una herramienta simple para servir contenido estático con optimización automática de imágenes 
          y distribución global a través de Cloudflare.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" class="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium">
            Comenzar ahora
          </a>
          <a href="https://github.com/ZUROS-NETWORK/NubecitaCDN" class="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            GitHub
          </a>
        </div>
      </section>

    
      <section id="features" class="container mx-auto px-4 py-20">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Una solución práctica y eficiente para proyectos que buscan optimizar 
            la entrega de contenido sin complejidad.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Carga ultrarrápida
            </h3>
            <p class="text-gray-600">
              Combinado con el caché de Cloudflare para distribución global 
              y tiempos de carga optimizados.
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Optimización automática
            </h3>
            <p class="text-gray-600">
              Convierte automáticamente las imágenes a formato WebP 
              para reducir el tamaño sin perder calidad.
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Distribución global
            </h3>
            <p class="text-gray-600">
              Aprovecha la red global de Cloudflare para servir 
              contenido desde el punto más cercano a tus usuarios.
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Tus propios servidores
            </h3>
            <p class="text-gray-600">
              Utiliza tu infraestructura existente de manera eficiente 
              sin depender de servicios complejos.
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Configuración simple
            </h3>
            <p class="text-gray-600">
              Implementación sencilla y práctica, sin necesidad 
              de configuraciones complejas o infraestructura adicional.
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Contenido estático
            </h3>
            <p class="text-gray-600">
              Perfecto para imágenes, scripts, hojas de estilo 
              y cualquier archivo web estático.
            </p>
          </div>
        </div>
      </section>


      <section id="how-it-works" class="bg-gray-50 py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Cómo funciona
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Una solución que no es una CDN tradicional, pero que funciona eficazmente 
              cuando se combina con el sistema de caché de Cloudflare.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">1</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Sube tu contenido
              </h3>
              <p class="text-gray-600">
                Carga tus archivos estáticos: imágenes, CSS, JavaScript y más.
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">2</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Optimización automática
              </h3>
              <p class="text-gray-600">
                Las imágenes se convierten automáticamente a WebP para mejor rendimiento.
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">3</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Distribución global
              </h3>
              <p class="text-gray-600">
                Cloudflare distribuye tu contenido globalmente con caché inteligente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="border-t border-gray-200 text-white py-12">
          <div class="text-center text-sm text-gray-400">
            © NubecitaCDN 
<div>Lucia Nishimiya <span class="mt-2 block"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 inline-block"> <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path> </svg> </span></div>
            
      </footer>
    </div>
`;
}