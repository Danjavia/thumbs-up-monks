// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
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
    "@nuxt/ui",
    "@formkit/nuxt",
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  ui: {
    global: true,
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
