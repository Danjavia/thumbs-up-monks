<script setup lang="ts"></script>

<template>
  <div class="default-layout">
    <Navbar />
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
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

::selection {
  background: #b3d4fc; /* Fondo del texto resaltado */
  color: #000; /* Color del texto resaltado */
}

::-moz-selection {
  background: #b3d4fc; /* Fondo del texto resaltado para Firefox */
  color: #000; /* Color del texto resaltado para Firefox */
}
</style>
