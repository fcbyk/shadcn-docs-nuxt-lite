// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['..'],
  content: {
    highlight: {
      langs: ['mdc', 'tsx'],
    },
  },
  compatibilityDate: '2025-05-13',
});
