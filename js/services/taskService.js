import { db } from "../config/firebase.js";
import {
  collection,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

export async function addTaskToFirestore(task) {
  await addDoc(collection(db, "tasks"), task);
}

export function listenTasksRealtime(callback) {
  const q = collection(db, "tasks");

  onSnapshot(q, (snapshot) => {
    const tasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(tasks);
  });
}
