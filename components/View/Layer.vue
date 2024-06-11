<script setup lang="ts">
import { ref, watch } from "vue";
import { useItemStore } from "~/store/useItemStore";

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

onMounted(() => {
  itemStore.loadItems();
});

const items = itemStore.items;

const handleVote = ({
  name,
  type,
}: {
  name: string;
  type: "positive" | "negative";
}) => {
  itemStore.voteItem(name, type);
};
</script>

<template>
  <div class="view-layer relative">
    <ViewList v-if="currentView === 'List'">
      <ItemList
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :description="item.description"
        :category="item.category"
        :picture="item.picture"
        :lastUpdated="item.lastUpdated"
        :votes="item.votes"
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
