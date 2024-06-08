import { defineFormKitConfig } from "@formkit/vue";
// import { createProPlugin, inputs } from "@formkit/pro";

export default defineFormKitConfig(() => {
  // here we can access `useRuntimeConfig` because
  // our function will be called by Nuxt.
  const config = useRuntimeConfig();

  // and we can use the variables to import secrets.
  //
  // ⚠️ this is just an example — if you want to use FormKit Pro
  // you will need to install the @formkit/pro dependency.
  // const pro = createProPlugin(config.FORMKIT_PRO_KEY, inputs);
  //
  // return {
  //   plugins: [pro],
  // };
});
