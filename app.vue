<script lang="ts" setup>
import { checkAndCreateCollection } from "~/fixtures/uploadData";

onMounted(() => {
  // Check if exists data in DB, else populate with data.ts
  checkAndCreateCollection();
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  --color-green-positive: 60, 187, 180;
  --color-yellow-negative: 249, 173, 29;
  --color-dark-background: rgba(0, 0, 0, 0.4);
  --color-darker-background: rgba(0, 0, 0, 0.6);
  --color-darker-gray: rgba(51, 51, 51, 1);
  --color-dark-gray: rgba(70, 70, 70, 1);
  --color-light-gray: rgba(235, 235, 235, 1);
  --color-light-background: rgba(255, 255, 255, 0.4);
  --color-lighter-background: rgba(255, 255, 255, 0.8);
  --color-white: rgba(255, 255, 255, 1);
}

html,
body {
  width: 100%;
  margin: 0;
  background-color: var(--color-white);
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 400;
}

body {
  position: relative;
  font-family: "Lato", sans-serif;
  line-height: 1.2;
}

a,
a:visited {
  color: var(--color-white);
}

/* Main Styles */
button {
  font-family: "Lato", sans-serif;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

hr[role="separator"] {
  border: 0 none;
  border-bottom: 2px dotted var(--color-dark-gray);
  margin: 1.5rem 1rem;
}
</style>
