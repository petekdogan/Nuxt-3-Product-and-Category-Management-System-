// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  appConfig: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    provider: {
      type: 'authjs',
    }
  },
    runtimeConfig: {
      public: {
        apiBase: '/api'
      }
    },

    build: {
      transpile: ['@prisma/client/default'], // Prisma kullanıyorsanız
    },

})