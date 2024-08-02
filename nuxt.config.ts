// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-07-04',
  // ==============      MODULES      ==============
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxt/image'],
  // ============== DISABLE DARK MODE ==============
  colorMode: {
    preference: 'light',
  },
  // ============== META AND SEO DATA ==============
  app: {
    head: {
      title: 'Theaterdeck Hamburg',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Theater Jugend Hamburg e.V.: Theaterschule für Jugendliche seit 1983. Inklusive Kurse, Eigenproduktionen und Plattform für junge Regisseure. Erfahre Theater hautnah im Theaterdeck!',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Theater Jugend Hamburg, Theaterschule Hamburg, Jugendtheater, Inklusives Theater, Theaterkurse für Jugendliche, Theaterdeck Hamburg, Junge Regisseure Hamburg, Theaterproduktionen Hamburg, Schauspielunterricht Jugendliche, Kritisches Theater, Spieldeck Hamburg, Theaterpädagogik',
        },
        {
          hid: 'author',
          name: 'author',
          content: 'Theaterdeck Hamburg',
        },
      ],
    },
  },
  // ============== ENVIRONMENT VARIABLES ==============
  runtimeConfig: {
    pretixApiKey: process.env.PRETIX_API_KEY,
    public: {
      pretixLocalBaseUrl: process.env.PRETIX_LOCAL_BASE_URL,
      pretixBaseUrl: process.env.PRETIX_BASE_URL,
      pretixApiEndpoint: process.env.PRETIX_API_ENDPOINT,
    },
  },
  // ==============    STYLESHEETS    ==============
  css: [
    '~/assets/css/main.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/fonts.css',
  ],
})
