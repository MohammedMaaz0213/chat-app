// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJYidRVAmCBqHiiMGh4Wm_CzqbYKAXNmY",
  authDomain: "super-chat-app-4e9fb.firebaseapp.com",
  projectId: "super-chat-app-4e9fb",
  storageBucket: "super-chat-app-4e9fb.appspot.com",
  messagingSenderId: "305929496039",
  appId: "1:305929496039:web:c837fe93468c9f697d8942",
  measurementId: "G-RG17172H0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
