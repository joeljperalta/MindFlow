import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAEZ9BeLYTH2bV7EgEio-BJXyCUdLijehQ",
  authDomain: "mindflow-38a78.firebaseapp.com",
  projectId: "mindflow-38a78",
  storageBucket: "mindflow-38a78.firebasestorage.app",
  messagingSenderId: "509618116819",
  appId: "1:509618116819:web:21d0e16a512629a34b5c26",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
