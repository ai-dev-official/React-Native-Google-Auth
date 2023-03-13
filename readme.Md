Create react native app
yarn add firebase
yarn add google-sign-in
Get the following from Firebase

import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'; // from https://firebase.google.com/docs/auth/web/google-signin#web-version-9_3




const firebaseConfig = {
  apiKey: "AIzaSyCy2Gg7xS7CBu0uwJOOpSTUiJVDnMQE45k",
  authDomain: "react-native-authapp-d6a8c.firebaseapp.com",
  projectId: "react-native-authapp-d6a8c",
  storageBucket: "react-native-authapp-d6a8c.appspot.com",
  messagingSenderId: "390548748125",
  appId: "1:390548748125:web:5d52cfc1d27f884df31ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // from link below
export const provider = new GoogleAuthProvider(app); // https://firebase.google.com/docs/auth/web/google-signin#web-version-9_3