// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJjHX9TF1a6tF3MJNAr9MOwc5K3-BDlU4",
  authDomain: "the-it-store.firebaseapp.com",
  projectId: "the-it-store",
  storageBucket: "the-it-store.firebasestorage.app",
  messagingSenderId: "450585046748",
  appId: "1:450585046748:web:473925eb9853ff55bbce19",
  measurementId: "G-GS6L8PNY2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const functions = getFunctions(app);

export { functions };