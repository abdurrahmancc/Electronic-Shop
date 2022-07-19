import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Rating from "../../../../Share/Rating/Rating";
import { MdAddShoppingCart } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import HartIcon from "../../../../Share/HartIcon";
import { Link, useNavigate } from "react-router-dom";
import useAddProduct from "../../../../Hooks/useAddProduct";
import BestSellerCardBody from "./BestSellerCardBody";

const BestSellerCard = ({ products }) => {
  const [handleAddToCartProduct] = useAddProduct();

  const allItems = [
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "32",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "15",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "52",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: " ",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "5",
    },
  ];
  products.length = 8;

  return (
    <>
      <div className="my-10 mx-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-y-10 gap-8">
          {products &&
            products.map((item, index) => (
              <BestSellerCardBody
                key={index}
                item={item}
                handleAddToCartProduct={handleAddToCartProduct}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default BestSellerCard;
