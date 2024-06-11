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
  formatDistanceToNow(new Date(props.lastUpdated), {
    addSuffix: true,
  }),
);
</script>

<template>
  <div class="list-item relative">
    <div
      class="bg-custom-gradient absolute top-0 right-0 flex justify-center items-center h-full w-[96%]"
    />

    <NuxtImg
      sizes="100vw sm:50vw md:100vw"
      :src="`/img/participants/${picture}`"
      alt="Profile Image"
      class="object-cover"
      width="257px"
      height="170px"
      role="none"
    />

    <div class="list-item__content relative flex justify-between items-center">
      <div class="list-item__header">
        <h2 class="text-white text-2xl font-[400]">{{ name }}</h2>
        <p class="font-thin text-xs overflow-ellipsis">{{ description }}</p>
      </div>
      <div class="list-item__footer">
        <div>
          <span>{{ timeAgo }} in {{ category }}</span>
        </div>
        <div class="list-item__actions flex items-center">
          <button @click="vote('positive')" class="btn like-btn">
            <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
          </button>
          <button @click="vote('negative')" class="btn dislike-btn">
            <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
          </button>
          <button class="btn vote-btn">Vote Now</button>
        </div>
      </div>
    </div>
    <div class="list-item__votes">
      <div class="like-bar" :style="{ width: positivePercentage + '%' }">
        <img src="assets/img/thumbs-up.svg" alt="thumbs up" class="mr-2" />
        {{ positivePercentage }}%
      </div>
      <div class="dislike-bar" :style="{ width: negativePercentage + '%' }">
        <img src="assets/img/thumbs-down.svg" alt="thumbs down" class="mr-2" />
        {{ negativePercentage }}%
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  display: flex;
  overflow: hidden;
  border: 1px solid #ccc;
  color: white;
  margin-bottom: 1rem;
}

.list-item__image img {
  object-fit: fill;
}

.list-item__content {
  flex-grow: 1;
  z-index: 1;
  padding: 1rem;
}

.list-item__header h2 {
  margin: 0;
}

.list-item__header p {
  margin: 0.5rem 0;
}

.list-item__footer {
  justify-content: space-between;
  align-items: center;
}

.list-item__actions .btn {
  margin: 0 0.5rem;
}

.list-item__votes {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
}

.like-bar,
.dislike-bar {
  z-index: 1;
  display: flex;
  height: 54px;
  align-items: center;
}

.like-bar {
  background-color: rgba(60, 187, 180, 0.6);
  padding-left: 1rem;
}

.dislike-bar {
  background-color: rgba(249, 173, 29, 0.6);
  justify-content: flex-end;
  padding-right: 1rem;
}

.dislike-btn,
.like-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
}

.dislike-btn:hover,
.dislike-btn:active,
.like-btn:hover,
.like-btn:active {
  border: 2px solid white;
}

.like-btn {
  background-color: rgba(var(--color-green-positive), 1);
  border: 1px solid rgba(var(--color-green-positive), 1);
}

.dislike-btn {
  background-color: rgba(var(--color-yellow-negative), 1);
  border: 1px solid rgba(var(--color-yellow-negative), 1);
}

.vote-btn {
  @apply bg-gray-800 text-white border border-white px-4 text-lg;
  height: 45px;
  transition: background-color 0.3s;
}

.vote-btn:hover {
  @apply bg-gray-600;
}
</style>
