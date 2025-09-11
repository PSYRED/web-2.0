import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendSignInLinkToEmail
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2Ys8B_if7YyCQjhywlGHbaf2mIWmJ2ig",
  authDomain: "test-server-psyred.firebaseapp.com",
  projectId: "test-server-psyred",
  storageBucket: "test-server-psyred.firebasestorage.app",
  messagingSenderId: "999336913147",
  appId: "1:999336913147:web:c6e957e372c48328dc685e",
  measurementId: "G-NWG1XG4QG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup, signOut, signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged };
