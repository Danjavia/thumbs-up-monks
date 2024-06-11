// store/items.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { useNuxtApp } from "#app";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import defaultData from "~/assets/data";
// import { db } from "~/firebase";

export const useItemStore = defineStore("itemStore", () => {
  const { $db } = useNuxtApp();
  const items = ref([]);

  const loadItems = async () => {
    const querySnapshot = await getDocs(collection($db, "items"));
    items.value = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  };

  const voteItem = async (name, type) => {
    const item = items.value.find((item) => item.name === name);
    if (item) {
      item.votes[type]++;
      const itemRef = doc($db, "items", item.id);
      await updateDoc(itemRef, {
        votes: item.votes,
      });
    }
  };

  return { items, voteItem, loadItems };
});
