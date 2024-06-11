<script setup lang="ts">
import { ref, watch } from "vue";
import { useItemStore } from "~/store/useItemStore";
import type { IVote } from "~/types/vote";

const props = defineProps<{
  currentView: string;
}>();

const emit = defineEmits<{
  (e: "update:currentView", value: string): void;
}>();

const internalView = ref(props.currentView || "List");

watch(
  () => props.currentView,
  (newVal) => {
    internalView.value = newVal || "List";
  },
);

watch(internalView, (newVal) => {
  emit("update:currentView", newVal);
});

// Votes management
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
  <div class="view-layer relative">
    <ViewList v-if="currentView === 'List'">
      <ItemList
        v-for="item in items"
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
    </ViewList>
    <ViewGrid v-else>
      <ItemGrid
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :description="item.description"
        :category="item.category"
        :picture="item.picture"
        :lastUpdated="item.lastUpdated"
        :votes="item.votes"
      />
    </ViewGrid>
  </div>
</template>

<style>
.view-layer {
  margin: 2.6rem auto;
  width: 100%;
  display: none;
}

@media all and (min-width: 768px) {
  .view-layer {
    display: block;
  }
}
</style>
