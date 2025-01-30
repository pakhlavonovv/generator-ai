import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOr3ozLQtBL4zCXpQXhJ5qZaRmQ4Na9Qg",
  authDomain: "floxsy-admin.firebaseapp.com",
  projectId: "floxsy-admin",
  storageBucket: "floxsy-admin.firebasestorage.app",
  messagingSenderId: "1059034434082",
  appId: "1:1059034434082:web:315db3a7ca97dbc07d987b",
  measurementId: "G-FNMV6JXTF3"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
const analytics = getAnalytics(app);