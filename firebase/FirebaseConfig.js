// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgbr0y57aLJBTleyUB1WldSuZrJKK64_8",
  authDomain: "auth-6b621.firebaseapp.com",
  projectId: "auth-6b621",
  storageBucket: "auth-6b621.appspot.com",
  messagingSenderId: "821039784902",
  appId: "1:821039784902:web:950c40467687f61c1188c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
