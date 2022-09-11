// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjYGlW0YoTOHNZywls8Lq7op2PHZwNdrE",
  authDomain: "todo-app-d0087.firebaseapp.com",
  projectId: "todo-app-d0087",
  storageBucket: "todo-app-d0087.appspot.com",
  messagingSenderId: "613239307141",
  appId: "1:613239307141:web:8f4962ef6d1a2f125c62ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
