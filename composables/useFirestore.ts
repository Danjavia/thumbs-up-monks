// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
//
// export const useFirestore = () => {
//   const config = useRuntimeConfig();
//
//   const firebaseConfig = {
//     apiKey: config.public.apiKey,
//     authDomain: config.public.authDomain,
//     projectId: config.public.projectId,
//     storageBucket: config.public.storageBucket,
//     messagingSenderId: config.public.messagingSenderId,
//     appId: config.public.appId,
//     measurementId: config.public.measurementId,
//   };
//
//   console.log("DFB config loaded", firebaseConfig);
//
//   const firebaseApp = initializeApp(firebaseConfig);
//   const firestore = getFirestore(firebaseApp);
//
//   return {
//     firebaseApp,
//     firestore,
//   };
// };
