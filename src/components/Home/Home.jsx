import React from "react";
import { useEffect } from "react";

import { fetchProducts } from "../../redux/slices/ProductSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Product from "../Product/Product";

import "./Home.scss";

const Home = () => {
  const items = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (items.length === 0) dispatch(fetchProducts());
  }, []);
  return (
    <div className="homeContainer">
      {items.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Home;
