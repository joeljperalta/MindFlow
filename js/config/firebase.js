// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAEZ9BeLYTH2bV7EgEio-BJXyCUdLijehQ",
  authDomain: "mindflow-38a78.firebaseapp.com",
  projectId: "mindflow-38a78",
  storageBucket: "mindflow-38a78.firebasestorage.app",
  messagingSenderId: "509618116819",
  appId: "1:509618116819:web:21d0e16a512629a34b5c26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
