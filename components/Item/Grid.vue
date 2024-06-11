<script setup lang="ts">
import { ref, computed } from "vue";
import { defineProps } from "vue";
import { formatDistanceToNow } from "date-fns";

const props = defineProps<{
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: { positive: number; negative: number };
}>();

const positiveVotes = ref(props.votes.positive);
const negativeVotes = ref(props.votes.negative);

const totalVotes = computed(() => positiveVotes.value + negativeVotes.value);
const positivePercentage = computed(() =>
  ((positiveVotes.value / totalVotes.value) * 100).toFixed(1),
);
const negativePercentage = computed(() =>
  ((negativeVotes.value / totalVotes.value) * 100).toFixed(1),
);

const vote = (type: "positive" | "negative") => {
  if (type === "positive") positiveVotes.value++;
  else negativeVotes.value++;
};

const timeAgo = computed(() =>
  formatDistanceToNow(new Date(props.lastUpdated), { addSuffix: true }),
);
</script>

<template>
  <div class="grid-item">
    <NuxtImg
      :src="`/img/participants/${picture}`"
      alt="Profile Image"
      class="grid-item__image"
      sizes="100vw sm:50vw md:400px"
      role="none"
    />
    <div class="grid-item__content">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <span>{{ timeAgo }} in {{ category }}</span>
      <div class="grid-item__actions">
        <button @click="vote('positive')" class="btn like-btn">👍</button>
        <button @click="vote('negative')" class="btn dislike-btn">👎</button>
        <button class="btn vote-btn">Vote Now</button>
      </div>
    </div>
    <div class="grid-item__votes">
      <div class="like-bar" :style="{ width: positivePercentage + '%' }">
        👍 {{ positivePercentage }}%
      </div>
      <div class="dislike-bar" :style="{ width: negativePercentage + '%' }">
        👎 {{ negativePercentage }}%
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-item {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.grid-item__image {
  width: 100%;
  height: auto;
}

.grid-item__content {
  padding: 1rem 0;
}

.grid-item__actions .btn {
  margin: 0.5rem;
}

.grid-item__votes {
  display: flex;
  width: 100%;
}

.like-bar,
.dislike-bar {
  height: 20px;
}

.like-bar {
  background-color: #4caf50;
}

.dislike-bar {
  background-color: #f44336;
}
</style>
