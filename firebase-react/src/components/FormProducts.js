import React, { useState, useContext } from "react";
import { FirestoreContext } from "../context/GeneralFireStore";

function FormProducts() {
  const { addProduct } = useContext(FirestoreContext);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <div>
      <input
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        placeholder="name"
      />
      <input
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
        placeholder="price"
      />
      <input
        onChange={(e) =>
          setNewProduct({ ...newProduct, image: e.target.value })
        }
        placeholder="image"
      />
      <button onClick={() => addProduct(newProduct)}>Add Product</button>
    </div>
  );
}

export default FormProducts;
