import { collection, addDoc, getDocs } from "firebase/firestore";
import defaultData from "assets/data";

const data = defaultData;

export const checkAndCreateCollection = async () => {
  const { $db } = useNuxtApp();
  const itemsRef = collection($db, "items");

  // Check if the collection exists by trying to get documents from it
  const querySnapshot = await getDocs(itemsRef);

  // If collection is empty, populate with seed data
  if (querySnapshot.empty) {
    try {
      for (const item of data) {
        console.log("Item to aggregate ==>", item);
        try {
          // await itemsCollection;
          await addDoc(itemsRef, item);
          console.log(`Item ${item.name} added successfully`);
        } catch (e) {
          console.error(`Error adding item ${item.name}: `, e);
        }
      }
    } catch (error) {
      console.error(`Error adding collection: ${error}`);
    }
  } else {
    console.log("Database has been filled!");
  }
};
