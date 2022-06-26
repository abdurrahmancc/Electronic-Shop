import React from "react";
import { useQuery } from "react-query";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Loading from "../../Share/Loading/Loading";

const Shop = () => {
  const { data, isLoading, error } = useQuery("get-user", () => axiosPrivet.get("/user"));
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }

  return (
    <div>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
      <h2>shop</h2>
    </div>
  );
};

export default Shop;
