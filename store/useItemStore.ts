// store/items.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { useNuxtApp } from "#app";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import defaultData from "~/assets/data";
import type { IVote } from "~/types/vote.d";

export const useItemStore = defineStore("itemStore", () => {
  const { $db } = useNuxtApp();
  const items = ref([]);

  const loadItems = async () => {
    if ($db) {
      const querySnapshot = await getDocs(collection($db, "items"));
      // const querySnapshot = await getDocs(collection($db, "items"));
      items.value = querySnapshot.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .reverse();
    }
  };

  const voteItem = async ({ id, type }: IVote) => {
    const item = items.value.find((item) => item.id === id);
    if (item) {
      item.votes[type]++;
      const itemRef = doc($db, "items", item.id);
      await updateDoc(itemRef, {
        lastUpdated: new Date().toISOString(),
        votes: item.votes,
      });
    }
  };

  return { items, voteItem, loadItems };
});
