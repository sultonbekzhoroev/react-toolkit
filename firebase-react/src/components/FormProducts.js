import { useState, useContext } from "react";
import { FirestoreContext } from "../context/GeneralFireStore";
function FormProducts() {
  const { addProduct } = useContext(FirestoreContext);
  const [newProduct, setNewProduc] = useState({
    name: "",
    price: "",
  });
  const [newImage, setNewImage] = useState("");
  return (
    <>
      <input
        onChange={(e) => setNewProduc({ ...newProduct, name: e.target.value })}
        placeholder="name"
      />
      <input
        onChange={(e) => setNewProduc({ ...newProduct, price: e.target.value })}
        placeholder="price"
      />
      <input
        type="file"
        onChange={(e) => setNewImage(e.target.files[0])}
        placeholder="image"
      />

      <button onClick={() => addProduct(newProduct, newImage)}>
        Add products
      </button>
    </>
  );
}

export default FormProducts;
