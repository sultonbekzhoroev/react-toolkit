import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as firebaseApp from "../firebase/ConfigFirebase";
import { async } from "@firebase/util";

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

  const loginWithWmail = async (email, password) => {
    try {
      const nerUset = await signInWithEmailAndPassword(
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
    loginWithWmail: loginWithWmail,
  };

  console.log(user);
  return (
    <GeneralAuthContext.Provider value={data}>
      {children}
    </GeneralAuthContext.Provider>
  );
};

export default AuthProvider;
