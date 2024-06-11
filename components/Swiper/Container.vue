<script setup lang="ts">
// Votes management
import { useItemStore } from "~/store/useItemStore";
import type { IVote } from "~/types/vote";

const itemStore = useItemStore();
const items = computed(() => itemStore.items);

const voteNow = (data: IVote) => {
  itemStore.voteItem(data);
};

onMounted(() => {
  itemStore.loadItems();
});
</script>

<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <SwiperItem v-for="item in items">
        <ItemGrid
          :id="item?.id"
          :key="item.name"
          :name="item.name"
          :description="item.description"
          :category="item.category"
          :picture="item.picture"
          :lastUpdated="item.lastUpdated"
          :votes="item.votes"
          @vote="voteNow"
        />
      </SwiperItem>
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

.swiper-wrapper > div {
  min-width: 350px;
  height: 350px;
  display: block;
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
