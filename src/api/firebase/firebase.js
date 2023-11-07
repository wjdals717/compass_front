// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbQdV5GMxjSWA3rBdOGscTXgS1GKwkMr0",
  authDomain: "compass-6bed1.firebaseapp.com",
  projectId: "compass-6bed1",
  storageBucket: "compass-6bed1.appspot.com",
  messagingSenderId: "439091396424",
  appId: "1:439091396424:web:339a20404c9407a67c3d7d",
  measurementId: "G-974QYWTG51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);             //storage 객체를 가져와 줌