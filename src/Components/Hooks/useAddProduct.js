import React, { useState } from "react";
import { addToDb } from "../LocalStorage/FakeDB";
import useProducts from "./useProducts";

const useAddProduct = () => {
  const [cartProducts, setCartProducts] = useProducts([]);
  const handleAddToCartProduct = (selectProduct) => {
    let newCart = [];
    const exists = cartProducts.find((product) => product._id === selectProduct._id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cartProducts, selectProduct];
    } else {
      const rest = cartProducts.filter((product) => product._id !== exists);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCartProducts(newCart);
    addToDb(selectProduct._id);
  };
  return [handleAddToCartProduct];
};

export default useAddProduct;
