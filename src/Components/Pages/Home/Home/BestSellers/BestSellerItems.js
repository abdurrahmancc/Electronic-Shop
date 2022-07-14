import React from "react";
import BestSellerCard from "./BestSellerCard";

const BestSellerItems = ({ products }) => {
  return (
    <div className="">
      <BestSellerCard products={products} />
    </div>
  );
};

export default BestSellerItems;
