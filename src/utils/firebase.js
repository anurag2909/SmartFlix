// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBglA2ZbnAnqzunckAunsX3qNTuXunH4gY",
  authDomain: "smartflix-6478c.firebaseapp.com",
  projectId: "smartflix-6478c",
  storageBucket: "smartflix-6478c.appspot.com",
  messagingSenderId: "43328619170",
  appId: "1:43328619170:web:b5459ed0bd5f84c8ac0dfb",
  measurementId: "G-VDX27T12W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();