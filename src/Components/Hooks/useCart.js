import React, { useEffect, useState } from "react";
import { addToDb, getShoppingId } from "../LocalStorage/FakeDB";

const useCart = ({ products }) => {
  const [cart, setCart] = useState([]);

  const handleAddProduct = (selectProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectProduct._id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product._id !== exists);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectProduct._id);
  };

  useEffect(() => {
    const storeCart = getShoppingId();
    const saveCart = [];
    if (products) {
      for (const id in storeCart) {
        const addedProduct = products.find((product) => product._id === id);
        if (addedProduct) {
          const quantity = storeCart[id];
          addedProduct.quantity = quantity;
          saveCart.push(addedProduct);
        }
      }
    }
    setCart(saveCart);
  }, [products]);
  return [handleAddProduct];
};

export default useCart;
