<script setup lang="ts">
import { ref, computed } from "vue";
import { formatDistanceToNow } from "date-fns";

const props = defineProps<{
  id: string;
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

const emit = defineEmits<{
  (e: "vote", payload: { id: string; type: "positive" | "negative" }): void;
}>();

const selectedVote = ref<"positive" | "negative" | null>(null);
const voteSubmitted = ref(false);

const voteNow = () => {
  if (selectedVote.value) {
    emit("vote", { id: props.id, type: selectedVote.value });
    voteSubmitted.value = true;
  }
};

const toggleVote = (type: "positive" | "negative") => {
  selectedVote.value = selectedVote.value === type ? null : type;
};

const timeAgo = computed(() =>
  formatDistanceToNow(new Date(props.lastUpdated), {
    addSuffix: true,
  }),
);

const resetVote = () => {
  selectedVote.value = null;
  voteSubmitted.value = false;
};
</script>

<template>
  <div class="grid-item relative">
    <NuxtImg
      :src="`/img/participants/${props.picture}`"
      alt="Profile Image"
      class="grid-item__image"
      sizes="100vw sm:50vw md:400px"
      role="none"
    />
    <div class="grid-item__content">
      <div class="flex">
        <div class="flex items-end">
          <div
            v-if="positivePercentage > negativePercentage"
            class="btn like-status relative -top-1 hover:border-0"
          >
            <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
          </div>
          <div v-else class="btn dislike-status relative -top-1 hover:border-0">
            <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
          </div>
          <h2
            class="text-white text-3xl font-[400] mb-1 ml-2 text-left line-clamp-2 w-[85%]"
          >
            {{ props.name }}
          </h2>
        </div>
      </div>
      <div class="w-2/3 mx-auto">
        <p class="font-thin text-xs line-clamp-2">
          {{ props.description }}
        </p>
      </div>
      <div class="mt-3 w-[90%]">
        <div class="text-right mb-3 text-xs font-semibold">
          {{ voteSubmitted ? "Thank you for your vote!" : timeAgo }} in
          {{ props.category }}
        </div>
        <div class="grid-item__actions">
          <button
            @click="toggleVote('positive')"
            :class="[
              'btn',
              'like-btn',
              { selected: selectedVote === 'positive' },
            ]"
          >
            <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
          </button>
          <button
            @click="toggleVote('negative')"
            :class="[
              'btn',
              'dislike-btn',
              { selected: selectedVote === 'negative' },
            ]"
          >
            <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
          </button>
          <button
            @click="voteSubmitted ? resetVote() : voteNow()"
            :disabled="!selectedVote"
            class="btn vote-btn"
          >
            {{ voteSubmitted ? "Vote Again" : "Vote Now" }}
          </button>
        </div>
      </div>
    </div>
    <div class="grid-item__votes">
      <div
        class="like-bar text-left"
        :style="{ width: positivePercentage + '%' }"
      >
        <img src="assets/img/thumbs-up.svg" alt="thumbs up" class="mr-2" />
        {{ positivePercentage }}%
      </div>
      <div
        class="dislike-bar text-right"
        :style="{ width: negativePercentage + '%' }"
      >
        <img src="assets/img/thumbs-down.svg" alt="thumbs down" class="mr-2" />
        {{ negativePercentage }}%
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-item {
  position: relative;
  border: 1px solid #ccc;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
}

.grid-item__image {
  width: 100%;
  height: 100%;
}

.grid-item__content {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  position: absolute;
  bottom: 30px;
  left: 0;
  padding: 1rem 0;
}

.grid-item__actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.grid-item__actions .btn {
  margin: 0 0.5rem;
}

.grid-item__votes {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
}

.like-bar,
.dislike-bar {
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 30px;
  color: white;
  font-weight: bold;
  padding: 0 1rem;
}

.like-bar {
  background-color: rgba(60, 187, 180, 0.6);
  width: 50%;
  justify-content: flex-start;
}

.dislike-bar {
  background-color: rgba(249, 173, 29, 0.6);
  width: 50%;
  justify-content: flex-end;
}

.like-btn,
.dislike-btn,
.like-status,
.dislike-status {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
}

.like-btn:hover,
.like-btn:active,
.dislike-btn:hover,
.dislike-btn:active {
  border: 2px solid white;
}

.like-btn,
.like-status {
  background-color: rgba(60, 187, 180, 1);
  border: 1px solid rgba(60, 187, 180, 1);
}

.dislike-btn,
.dislike-status {
  background-color: rgba(249, 173, 29, 1);
  border: 1px solid rgba(249, 173, 29, 1);
}

.btn.vote-btn {
  background-color: #333;
  color: white;
  border: 2px solid white;
  padding: 0.5rem 1rem;
  margin-left: 0.3rem;
  margin-right: 0;
  transition: background-color 0.3s;
}

.vote-btn:disabled {
  background-color: rgba(0, 0, 0, 0.6);
  border-color: #fff;
  cursor: not-allowed;
}

.vote-btn:hover:not(:disabled) {
  background-color: #555;
}

.btn.selected {
  border: 2px solid white;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
