// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // DEVTOOLS
  devtools: { enabled: false },

  // MODULES
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@pinia/nuxt',
    'nuxt-icon',
  ],

  // ENVIRONMENT VARIABLES
  // Process Environment Variables
  runtimeConfig: {
    public: {
      pretixBaseUrl: process.env.PRETIX_BASE_URL,
      pretixEndpoint: process.env.PRETIX_API_ENDPOINT,
      pretixApiKey: process.env.PRETIX_API_KEY,
    }
  },

  // HEAD
  app: {
    head: {
      title: 'Theaterdeck',
      meta: [
        {name: 'description', content: 'Dies ist die Website des Theaterdeck Hamburgs.'},
      ],
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap'},
      ],
    }
  },
    
  // STYLESHEETS
  css: [
    "~/assets/css/main.css",
    "~/assets/css/tailwind.css",
  ],

  // POSTCSS CONFIG
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
