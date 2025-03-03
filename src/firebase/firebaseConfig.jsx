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
  apiKey: "AIzaSyAIiMcGBvRi6YBCCLa3O0TOaCrNm1To_uY",
  authDomain: "psyred-project.firebaseapp.com",
  projectId: "psyred-project",
  storageBucket: "psyred-project.firebasestorage.app",
  messagingSenderId: "362266748990",
  appId: "1:362266748990:web:a1212526b42171c501496f",
  measurementId: "G-XGPCR7ZSPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup, signOut, signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged };
