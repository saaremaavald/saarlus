// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  // ssr: false,
  experimental : {
    payloadExtraction : false
  },
  extends: ['content-wind'],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: {depth: 2, exclude: [1,2]}
    }
  },
  app: {
    baseURL: '/saarlus/',
  }
})
