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
  <div class="list-item relative">
    <div
      class="bg-custom-gradient absolute top-0 right-0 flex justify-center items-center h-full w-[96%]"
    />

    <div>
      <div
        v-if="positivePercentage > negativePercentage"
        class="absolute top-0 left-0 btn like-btn"
        aria-label="More positive votes"
      >
        <img src="assets/img/thumbs-up.svg" alt="thumbs up icon" />
      </div>
      <div
        v-else
        class="absolute top-0 left-0 btn dislike-btn"
        aria-label="More negative votes"
      >
        <img src="assets/img/thumbs-down.svg" alt="thumbs down icon" />
      </div>
    </div>

    <NuxtImg
      sizes="100vw sm:50vw md:100vw"
      :src="`/img/participants/${props.picture}`"
      alt="Profile Image of {{ props.name }}"
      class="object-cover"
      width="257px"
      height="170px"
    />

    <div class="list-item__content relative flex justify-between">
      <div class="list-item__header flex-1">
        <h2 class="text-white text-2xl font-[400]">{{ props.name }}</h2>
        <p class="font-thin text-xs line-clamp-2">{{ props.description }}</p>
      </div>
      <div class="list-item__footer">
        <div class="text-right mb-3 text-xs font-semibold">
          {{ voteSubmitted ? "Thank you for your vote!" : timeAgo }} in
          {{ props.category }}
        </div>
        <div class="list-item__actions flex items-center justify-end">
          <button
            @click="toggleVote('positive')"
            :class="[
              'btn',
              'like-btn',
              { selected: selectedVote === 'positive' },
            ]"
            :aria-pressed="selectedVote === 'positive'"
            aria-label="Vote positive"
          >
            <img src="assets/img/thumbs-up.svg" alt="thumbs up icon" />
          </button>
          <button
            @click="toggleVote('negative')"
            :class="[
              'btn',
              'dislike-btn',
              { selected: selectedVote === 'negative' },
            ]"
            :aria-pressed="selectedVote === 'negative'"
            aria-label="Vote negative"
          >
            <img src="assets/img/thumbs-down.svg" alt="thumbs down icon" />
          </button>
          <button
            @click="voteSubmitted ? resetVote() : voteNow()"
            :disabled="!selectedVote"
            class="btn vote-btn"
            aria-label="Submit vote"
          >
            {{ voteSubmitted ? "Vote Again" : "Vote Now" }}
          </button>
        </div>
      </div>
    </div>
    <div class="list-item__votes">
      <div
        class="like-bar"
        :style="{ width: positivePercentage + '%' }"
        aria-label="Positive votes bar"
      >
        <img src="assets/img/thumbs-up.svg" alt="thumbs up icon" class="mr-2" />
        {{ positivePercentage }}%
      </div>
      <div
        class="dislike-bar"
        :style="{ width: negativePercentage + '%' }"
        aria-label="Negative votes bar"
      >
        <img
          src="assets/img/thumbs-down.svg"
          alt="thumbs down icon"
          class="mr-2"
        />
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
  width: 34%;
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

.btn.vote-btn {
  @apply bg-gray-800 text-white border border-white px-4 text-lg;
  height: 45px;
  transition: background-color 0.3s;
  margin-right: 0;
}

.btn.vote-btn:disabled {
  @apply bg-gray-800/50 text-white border border-white px-4 text-lg;
  cursor: not-allowed;
  transition: background-color 0.3s;
}

.vote-btn:hover {
  @apply bg-gray-600;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn.selected {
  border: 2px solid white;
}
</style>
