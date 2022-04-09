import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDf058EQKu5wbavxUvBolETVT3tVcSzr3o",
  authDomain: "react-firepractice.firebaseapp.com",
  projectId: "react-firepractice",
  storageBucket: "react-firepractice.appspot.com",
  messagingSenderId: "1054555341008",
  appId: "1:1054555341008:web:8eb60aa4af9cb9fe1f9ed5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
