<script setup></script>

<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.swiper-container {
  display: block;
  position: relative;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  margin: 1.5rem auto;
}

.swiper-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.swiper-wrapper::-webkit-scrollbar {
  display: none;
}

@media all and (min-width: 768px) {
  .swiper-container {
    display: none;
  }
}
</style>
