// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/main.css',
  ],
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
})
