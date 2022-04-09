import { createContext, useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import * as firebaseApp from "../firebase/ConfigFirebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const FirestoreContext = createContext();

const refCollection = collection(firebaseApp.firestore, "products");
const FirestoreProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  // this function create my product
  const addProduct = async (newProduct, image) => {
    try {
      const refHosting = ref(firebaseApp.storage, `image/${image.name}`);
      const uploadImage = uploadBytesResumable(refHosting, image);
      uploadImage.on(
        "state_change",
        (snapshot) => {
          const proggress = snapshot.bytesTransferred;
          console.log(proggress);
        },
        (err) => {
          console.log(err.message);
        },
        () =>
          getDownloadURL(uploadImage.snapshot.ref).then((url) =>
            addDoc(refCollection, { ...newProduct, img: url })
          )
      );
      await addDoc(refCollection, newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  // this function get the data from firebase and save it in my state
  const getAllProducts = async () => {
    const productsFromFirestore = await getDocs(refCollection);
    console.log(productsFromFirestore);
    setAllProducts(
      productsFromFirestore.docs.map((product) => ({
        data: product.data(),
        id: product.id,
      }))
    );
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  //TODOS modify Products
  //DELETE products
  const data = {
    allProducts: allProducts,
    addProduct: addProduct,
  };
  return (
    <FirestoreContext.Provider value={data}>
      {children}
    </FirestoreContext.Provider>
  );
};
export default FirestoreProvider;
