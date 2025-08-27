import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwYZ7VfGapcPFnlMljaS8EcTOidaEZgco",
  authDomain: "sistema-ingressos.firebaseapp.com",
  projectId: "sistema-ingressos",
  storageBucket: "sistema-ingressos.firebasestorage.app",
  messagingSenderId: "1064986140753",
  appId: "1:1064986140753:web:0a314fc1ef67faac55d870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };