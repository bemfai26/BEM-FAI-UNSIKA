import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, getDoc, getDocs, query, orderBy, limit, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAz6l2XhAucqfgsLI8f1RgYnjpz63MFdTo",
  authDomain: "bem-fai-unsika.firebaseapp.com",
  projectId: "bem-fai-unsika",
  storageBucket: "bem-fai-unsika.firebasestorage.app",
  messagingSenderId: "218857328321",
  appId: "1:218857328321:web:40f5a943367d3fd8080e40",
  measurementId: "G-VTC20PTM5V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, addDoc, updateDoc, deleteDoc, doc, getDoc, getDocs, query, orderBy, limit, where, serverTimestamp, onAuthStateChanged, signInWithEmailAndPassword, signOut };
