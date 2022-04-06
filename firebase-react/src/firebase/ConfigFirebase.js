import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCAPCBawVR4gj1XUDaUG3uBBPtZTKXrkTY",
  authDomain: "reactfirebase-a1977.firebaseapp.com",
  projectId: "reactfirebase-a1977",
  storageBucket: "reactfirebase-a1977.appspot.com",
  messagingSenderId: "1097588986405",
  appId: "1:1097588986405:web:118d32f775bedcb6dda5cc",
  measurementId: "G-WPWZQ3B008",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
