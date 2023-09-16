import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBunXGptWfzyjRXWHRHqs45xdIgeuZNxmw",
  authDomain: "goodluck-8d0f7.firebaseapp.com",
  projectId: "goodluck-8d0f7",
  storageBucket: "goodluck-8d0f7.appspot.com",
  messagingSenderId: "245578035405",
  appId: "1:245578035405:web:526bf9bee0ee6e755df984",
  measurementId: "G-SMPCYKDDJ8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
