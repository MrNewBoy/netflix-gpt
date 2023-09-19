// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc7bjpzIEsI9d1Q1YA-8W4e0iQM49T9jY",
  authDomain: "netflix-gpt-7d1d0.firebaseapp.com",
  projectId: "netflix-gpt-7d1d0",
  storageBucket: "netflix-gpt-7d1d0.appspot.com",
  messagingSenderId: "970002782697",
  appId: "1:970002782697:web:be2d43b7dbc2a768265378",
  measurementId: "G-X713RCZLE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
