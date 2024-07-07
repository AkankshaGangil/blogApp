// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "blog-app-889c8.firebaseapp.com",
  projectId: "blog-app-889c8",
  storageBucket: "blog-app-889c8.appspot.com",
  messagingSenderId: "647862227502",
  appId: "1:647862227502:web:47eff1fba41d9294ac45bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);