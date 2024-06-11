// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: "%s - Thumbs Up for Monks",
      meta: [
        {
          name: "description",
          content: "A little test for try leaderboard system",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Thumbs Up for Monks" },
        { property: "og:description", content: "Descripción del sitio" },
      ],
    },
  },
  plugins: ["~/plugins/firebase.client.ts"],
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    },
  },
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
    "@nuxt/test-utils/module",
    "@nuxt/test-utils/module",
    "@formkit/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  formkit: {
    autoImport: true,
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
});
