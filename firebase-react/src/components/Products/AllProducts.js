import { Grid } from "@mui/material";
import { useContext } from "react";
import { FirestoreContext } from "../../context/GeneralFireStore";

import Product from "./Product";
function AllProducts() {
  const { allProducts } = useContext(FirestoreContext);
  return (
    <>
      <h1>this are my products</h1>
      <Grid container spacing={2}>
        {allProducts.map((product) => (
          <Grid item sx={6} md={4} key={product.id}>
            <Product id={product.id} data={product.data} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AllProducts;
