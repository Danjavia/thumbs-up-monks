<script setup lang="ts">
const currentView = ref("List");
const viewMethod = (option: string) => {
  currentView.value = option;
};
</script>

<template>
  <div class="participants">
    <div class="relative flex justify-between items-center z-10">
      <h4 class="text-3xl">Previous Rulings</h4>
      <Dropdown
        :options="['List', 'Grid']"
        default-option="List"
        @onSelected="viewMethod"
      />
    </div>

    <ViewLayer :currentView="currentView" />

    <SwiperContainer>
      <SwiperItem>Hola mundo</SwiperItem>
      <SwiperItem>Hola mundo</SwiperItem>
      <SwiperItem>Hola mundo</SwiperItem>
      <SwiperItem>Hola mundo</SwiperItem>
      <SwiperItem>Hola mundo</SwiperItem>
      <SwiperItem>Hola mundo</SwiperItem>
      <SwiperItem>Hola mundo</SwiperItem>
      <SwiperItem>Hola mundo</SwiperItem>
    </SwiperContainer>
  </div>
</template>

<style scoped></style>
