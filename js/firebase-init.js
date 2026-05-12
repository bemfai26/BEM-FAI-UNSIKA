// js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, getDocs, query, orderBy, limit, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjawHaidnv5SuDkDZTpZqtIVohltmRLzc",
  authDomain: "gen-lang-client-0046328106.firebaseapp.com",
  projectId: "gen-lang-client-0046328106",
  storageBucket: "gen-lang-client-0046328106.firebasestorage.app",
  messagingSenderId: "714430559081",
  appId: "1:714430559081:web:551c94a1a01daf152943f8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, getDocs, query, orderBy, limit, doc, getDoc };