
import { initializeApp } from "firebase/app";
import {
    getFireStore,
    collection,
    onSnapshot,
    addDoc,
    deleteDoc,doc,
    query,where,
    orderBy,serverTimestamp,
    getDoc,updateDoc
} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtFHNTOQeSjfAMbpmnqijdj2NXiUsxk10",
  authDomain: "ecommerce-auth-fe079.firebaseapp.com",
  databaseURL: "https://ecommerce-auth-fe079-default-rtdb.firebaseio.com",
  projectId: "ecommerce-auth-fe079",
  storageBucket: "ecommerce-auth-fe079.appspot.com",
  messagingSenderId: "2384376911",
  appId: "1:2384376911:web:a016740a12ddce7de3e63a"
};


initializeApp(firebaseConfig);
const db = getFireStore();
const auth = getAuth(app);

export  { auth }