import { defineStore } from "pinia";
import { collection, updateDoc, doc, onSnapshot } from "firebase/firestore";
import type { IVote, IItem } from "~/types/vote";

export const useItemStore = defineStore("item", {
  state: () => ({
    items: [] as IItem[],
    unsubscribe: null as (() => void) | null,
  }),
  actions: {
    async loadItems() {
      const { $db } = useNuxtApp();

      const itemsCollection = collection($db, "items");
      this.unsubscribe = onSnapshot(itemsCollection, (snapshot) => {
        this.items = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .reverse() as IItem[];
      });
    },
    async voteItem({ id, type }: IVote) {
      const { $db } = useNuxtApp();
      const itemRef = doc($db, "items", id);
      const item = this.items.find((item) => item.id === id);
      if (item) {
        if (type === "positive") {
          item.votes.positive += 1;
        } else {
          item.votes.negative += 1;
        }
        await updateDoc(itemRef, {
          votes: item.votes,
          lastUpdated: new Date().toISOString(),
        });
      }
    },
    unsubscribeItems() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    },
  },
});
