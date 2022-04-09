import React from "react";
import AllProducts from "../components/Products/AllProducts";
import Hero from "../components/commons/Hero";
import Header from "../components/commons/Header";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AllProducts />
    </>
  );
}

export default Home;
