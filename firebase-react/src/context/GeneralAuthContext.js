import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as firebaseApp from "../firebase/ConfigFirebase";

export const GeneralAuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(firebaseApp.auth, (createdUser) => {
    setUser(createdUser);
  });
  const signUpwithEmailAndPassword = async (email, password) => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        firebaseApp.auth,
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(firebaseApp.auth);
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithEmail = async (email, password) => {
    try {
      const newUserLogin = await signInWithEmailAndPassword(
        firebaseApp.auth,
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    signUpwithEmailAndPassword: signUpwithEmailAndPassword,
    user: user,
    logOut: logOut,
    loginWithEmail: loginWithEmail,
  };

  return (
    <GeneralAuthContext.Provider value={data}>
      {children}
    </GeneralAuthContext.Provider>
  );
};

export default AuthProvider;
