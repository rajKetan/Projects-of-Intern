import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf-H6iPw09tedpFMX9qPCAAKDN12T440o",
  authDomain: "expensetracker-65cbf.firebaseapp.com",
  projectId: "expensetracker-65cbf",
  storageBucket: "expensetracker-65cbf.appspot.com",
  messagingSenderId: "817491460414",
  appId: "1:817491460414:web:2ef2d0fa4058e1a8c22c6f"
};
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db =getFirestore(app)