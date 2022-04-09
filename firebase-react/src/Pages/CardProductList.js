import React from "react";
import Header from "../components/commons/Header";
import { useContext } from "react";
import { CardContext } from "../context/GeneralCards";
import * as actions from "../context/actions";

import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
function CardProductList() {
  const { allProductsInCard, dispatcher } = useContext(CardContext);
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        {allProductsInCard.map((product) => (
          <>
            <Grid item md={2}>
              {product.name}
            </Grid>
            <Grid item md={2}>
              {product.qqt}
            </Grid>
            <Grid item md={2}>
              {product.price}
            </Grid>
            <Grid item md={3}>
              <img src={product.img} width="100" />
            </Grid>
            <Grid item md={3}>
              <Button
                onClick={() =>
                  dispatcher({ type: actions.DELETEITEM, payload: product.id })
                }
              >
                X
              </Button>
            </Grid>
          </>
        ))}

        <Grid item md={2}>
          <h1>Number Of Products</h1>
        </Grid>
        <Grid item md={2}>
          <h1>--------</h1>
        </Grid>
        <Grid item md={2}>
          <h1>Total Cost</h1>
        </Grid>
        <Grid item md={3}>
          <h1>------</h1>
        </Grid>
        <Grid item md={3}>
          <Link to="/make-the-order">
            {" "}
            <Button>Make an order</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default CardProductList;
