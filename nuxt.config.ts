// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    "@vueuse/nuxt", // "nuxt-vuefire",
    // "nuxt-appwrite",
    "@nuxthub/core",
    "@nuxt/test-utils/module",
    "@formkit/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  // vuefire: {
  //   config: {
  //     apiKey: process.env.FIREBASE_API_KEY,
  //     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //     projectId: process.env.FIREBASE_PROJECT_ID,
  //     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //     appId: process.env.FIREBASE_APP_ID,
  //     measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  //   },
  // },
  // appwrite: {
  //   endpoint: "https://cloud.appwrite.io/v1",
  //   project: "6667f4050021e6eb57db",
  // },
  formkit: {
    autoImport: true,
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  hub: {
    // NuxtHub options
  },
});
