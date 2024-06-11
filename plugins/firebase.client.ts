import { defineNuxtPlugin } from "#app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.apiKey,
    authDomain: config.public.authDomain,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    messagingSenderId: config.public.messagingSenderId,
    appId: config.public.appId,
    measurementId: config.public.measurementId,
  };

  const app = initializeApp(firebaseConfig);

  // used for the firestore refs
  const db = getFirestore(app);

  return {
    provide: {
      db,
    },
  };
});
