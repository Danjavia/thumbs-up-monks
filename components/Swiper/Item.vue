<script setup></script>

<template>
  <div class="swiper-slide"><slot></slot></div>
</template>

<style>
.swiper-slide {
  min-width: 350px;
  height: 350px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-right: 1rem;
}
</style>
