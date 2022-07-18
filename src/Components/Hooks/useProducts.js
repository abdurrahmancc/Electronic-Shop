import { memo, useEffect, useState } from "react";
import axiosPrivet from "./axiosPrivet";
import { useQuery } from "react-query";
import Loading from "../Share/Loading/Loading";
import { getShoppingId } from "../LocalStorage/FakeDB";

const useProducts = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [load, setLoad] = useState(false);
  // const { data, isLoading, refetch } = useQuery(["cartProducts", keys, load], () =>
  //   axiosPrivet.post("/cart-products", keys)
  // );

  if (load) {
    // window.location.reload();
  }

  useEffect(() => {
    (async () => {
      const storedCart = getShoppingId();
      const savedCart = [];
      const keys = Object.keys(storedCart);
      const { data } = await axiosPrivet.post("/cart-products", keys);
      if (data) {
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCartProducts(savedCart);
      }
    })();
  }, []);

  return [cartProducts, setCartProducts, setLoad];
};
export default useProducts;
