<script setup lang="ts">
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  options: string[];
  defaultOption: string;
}>();

const emit = defineEmits<{
  (e: "onSelected", value: string): void;
}>();

const { options, defaultOption } = props;

const isOpen = ref(false);
const selectedOption = ref(options[0]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: string) => {
  selectedOption.value = option;
  isOpen.value = false;
  emit("onSelected", option);
};
</script>

<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdown-button">
      {{ selectedOption ?? defaultOption }}
      <span class="arrow">&#9662;</span>
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        class="dropdown-item"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-menu {
  display: block;
  position: absolute;
  background-color: white;
  border: 1px solid black;
  width: 100%;
  z-index: 1;
  margin-top: 5px;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  border-top: 1px solid black;
  color: black;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

.arrow {
  margin-left: 10px;
}

@media all and (min-width: 768px) {
  .dropdown {
    width: 131px;
  }
}

@media all and (min-width: 768px) {
  .dropdown {
    width: 173px;
  }
}
</style>
