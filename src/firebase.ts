// lib/firebaseClient.ts
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfka-MkuKmw9Tn6kQh2XK77G90GJErHSM",
  authDomain: "interhelp-fcda6.firebaseapp.com",
  projectId: "interhelp-fcda6",
  storageBucket: "interhelp-fcda6.appspot.com",
  messagingSenderId: "548606573584",
  appId: "1:548606573584:web:0d86ca9a36b5c343515e95",
  measurementId: "G-L52YNV58S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
