import React from "react";
import { useSelector } from "react-redux";
import Poster from "../Poster/Poster";
import Categories from "../Categories/Categories";

import Products from "../Products/Products";

const Home = () => {
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Products products={filtered} amount={5} title="Less than 100$" />
    </>
  );
};

export default Home;