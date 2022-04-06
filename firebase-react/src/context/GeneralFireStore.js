import { createContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import * as firebaseApp from "../firebase/ConfigFirebase";
import { async } from "@firebase/util";
export const FirestoreContext = createContext();
const refCollection = collection(firebaseApp.firestore, "product");
const FirestoreProvider = ({ children }) => {
  const addProduct = async (newProduct) => {
    try {
      await addDoc(refCollection, newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const data = {
    addProduct: addProduct,
  };
  return (
    <FirestoreContext.Provider value={data}>
      {children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreProvider;
