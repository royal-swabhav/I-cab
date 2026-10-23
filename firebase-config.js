// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    deleteDoc,
    runTransaction, 
    onSnapshot, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// I-cab Project Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyATHiGgwwSq0i-3PqcP99WInRYWXfrbcVA",
  authDomain: "i-cab-acfc5.firebaseapp.com",
  projectId: "i-cab-acfc5",
  storageBucket: "i-cab-acfc5.firebasestorage.app",
  messagingSenderId: "615482199853",
  appId: "1:615482199853:web:067a017bdc92eb765a4da4"
};

// Initialize App & Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Authorized Super Admin Email
export const ADMIN_EMAIL = "codingschool.0101@gmail.com";

export { 
    auth, 
    provider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    db, 
    collection, 
    addDoc, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    deleteDoc,
    runTransaction, 
    onSnapshot, 
    serverTimestamp 
};
