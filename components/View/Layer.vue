<script setup lang="ts">
import { ref, watch } from "vue";

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

const items = ref([
  {
    name: "Kanye West",
    description:
      "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    category: "entertainment",
    picture: "kanye.png",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: { positive: 23, negative: 36 },
  },
  {
    name: "Mark Zuckerberg",
    description:
      "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
    category: "business",
    picture: "mark.png",
    lastUpdated: "2021-02-14T23:10:19.134Z",
    votes: { positive: 418, negative: 324 },
  },
  {
    name: "Cristina Fernández de Kirchner",
    description:
      "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
    category: "politics",
    picture: "cristina.png",
    lastUpdated: "2020-12-10T23:41:07.120Z",
    votes: { positive: 45, negative: 97 },
  },
  {
    name: "Malala Yousafzai",
    description:
      "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
    category: "politics",
    picture: "malala.png",
    lastUpdated: "2020-12-10T23:41:07.120Z",
    votes: { positive: 18, negative: 3 },
  },
  {
    name: "Elon Musk",
    description:
      "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
    category: "business",
    picture: "elon.png",
    lastUpdated: "2020-12-20T23:43:38.041Z",
    votes: { positive: 1237, negative: 894 },
  },
  {
    name: "Greta Thumberg",
    description:
      "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
    category: "environment",
    picture: "greta.png",
    lastUpdated: "2021-02-26T23:44:50.326Z",
    votes: { positive: 118, negative: 45 },
  },
]);
</script>

<template>
  <div class="layer-view">
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
.layer-view {
  margin: 2.6rem auto;
  width: 100%;
  display: none;
}

@media all and (min-width: 768px) {
  .layer-view {
    display: block;
  }
}
</style>
