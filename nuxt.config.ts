// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Lato: [300, 400, 700],
    },
  },
  css: ["~/assets/css/reset.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxthub/core",
    "@nuxt/test-utils/module",
    "@formkit/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image"
  ],
  // ui: {
  //   global: false,
  // },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  hub: {
    // NuxtHub options
  },
});