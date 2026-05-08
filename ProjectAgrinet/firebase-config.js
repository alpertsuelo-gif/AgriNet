// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoCTfHXT4dgVj-u5Ybq9aYXbbM0YFPs6U",
  authDomain: "agrinet-chatsection.firebaseapp.com",
  databaseURL: "https://agrinet-chatsection-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agrinet-chatsection",
  storageBucket: "agrinet-chatsection.firebasestorage.app",
  messagingSenderId: "912693187236",
  appId: "1:912693187236:web:4a937e631c45c053d28c31",
  measurementId: "G-KGXTX7T6NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);