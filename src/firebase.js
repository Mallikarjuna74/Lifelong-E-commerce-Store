// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYUudNsctumxJjN29_C1Cg5yevhH6Hlpo",
  authDomain: "lifelong-e-commerce.firebaseapp.com",
  projectId: "lifelong-e-commerce",
  storageBucket: "lifelong-e-commerce.firebasestorage.app",
  messagingSenderId: "783697967782",
  appId: "1:783697967782:web:be04f332378b0595db1267",
  measurementId: "G-09D8ZCRKD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);