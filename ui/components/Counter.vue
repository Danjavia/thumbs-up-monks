<script setup lang="ts">
import { ref } from "vue";

let count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
  <div>
    <UButton label="hola mundo" />

    <UButton @click="decrement">-</UButton>
    <h1 class="bg-red-800">{{ count }}</h1>
    <UButton @click="increment">+</UButton>
  </div>
</template>

<style scoped></style>
