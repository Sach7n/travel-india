// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {serverTimestamp,query, getFirestore,getDocs, setDoc, doc, collection,orderBy  } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMPbfOBo1gUL7eVok6R2xBgekuqREJtUA",
  authDomain: "travelindia-1d2a5.firebaseapp.com",
  projectId: "travelindia-1d2a5",
  storageBucket: "travelindia-1d2a5.appspot.com",
  messagingSenderId: "615545588694",
  appId: "1:615545588694:web:f7361b7e1ea2af002bf277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export  { getStorage,orderBy,serverTimestamp, ref, query,uploadBytesResumable, getDownloadURL ,getFirestore,getDocs, setDoc, doc, collection}