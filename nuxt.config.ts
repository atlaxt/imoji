import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/ui',
    'nuxt-gtag',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  gtag: {
    id: 'G-4R3XKFL775',
  },
  site: {
    url: 'https://imoji.co/',
    name: 'imoji – Copy & Explore Emojis Easily',
  },
  robots: {
    sitemap: 'https://imoji.co/sitemap.xml',
  },

})
