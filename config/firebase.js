// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC36oxMFOLTg3g80LNJeI18g4hkBFAIxr4",
  authDomain: "project-reactnative-49786.firebaseapp.com",
  projectId: "project-reactnative-49786",
  storageBucket: "project-reactnative-49786.appspot.com",
  messagingSenderId: "465606784730",
  appId: "1:465606784730:web:1e48d18bee97af2f17d7e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);