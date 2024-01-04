// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-esstate.firebaseapp.com",
  projectId: "mern-esstate",
  storageBucket: "mern-esstate.appspot.com",
  messagingSenderId: "528759647759",
  appId: "1:528759647759:web:536f03739c56279d293d7a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);