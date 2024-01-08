import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAL47u92PJA7ew3LjXkoAcj7JGmIgirPZ0",
  authDomain: "mibiblioteca2-223d2.firebaseapp.com",
  projectId: "mibiblioteca2-223d2",
  storageBucket: "mibiblioteca2-223d2.appspot.com",
  messagingSenderId: "775994176853",
  appId: "1:775994176853:web:cc61cda84c5f50c75f2bdc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
