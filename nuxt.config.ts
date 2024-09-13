// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Template project',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  colorMode: {
    preference: 'light',
  },

  ui: {
    primary: 'green',
    gray: 'cool',
  },

  ssr: false,
})
