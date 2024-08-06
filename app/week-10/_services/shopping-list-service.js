import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";

export async function getItems(userId) {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const itemsQuery = query(itemsCollectionRef);
        const querySnapshot = await getDocs(itemsQuery);
        let items = [];
        querySnapshot.forEach((doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            };
            items.push(thisItem);
        });
        return items;
    } catch (error) {
        console.error("Error fetching items: ", error);
        return [];
    }
}

export async function addItem(userId, item) {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollectionRef, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
    }
}
