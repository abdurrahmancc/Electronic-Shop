import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import toast from "react-hot-toast";
import { MdAddShoppingCart } from "react-icons/md";
import HartIcon from "../../../Share/HartIcon";
import Rating from "../../../Share/Rating/Rating";
import img1 from "../../../../assets/laptop-1.jpg";
import img2 from "../../../../assets/laptop-2.jpg";
import img3 from "../../../../assets/laptop-3.jpg";
import img4 from "../../../../assets/laptop-4.jpg";
import img5 from "../../../../assets/laptop-5.jpg";
import img6 from "../../../../assets/laptop-6.jpg";
import img7 from "../../../../assets/laptop-7.jpg";
import img8 from "../../../../assets/laptop-8.jpg";
import { Link, useNavigate } from "react-router-dom";
import useAddProduct from "../../../Hooks/useAddProduct";
import ComputerItem from "./ComputerItem";

const ComputerItemBody = ({ products }) => {
  const [handleAddToCartProduct] = useAddProduct();

  const computerItems = [
    {
      id: "1",
      img: img1,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "",
    },
    {
      id: "2",
      img: img2,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "21",
    },
    {
      id: "3",
      img: img3,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "",
    },
    {
      id: "4",
      img: img4,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "32",
    },
    {
      id: "5",
      img: img5,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "32",
    },
    {
      id: "6",
      img: img6,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "23",
    },
    {
      id: "7",
      img: img7,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "",
      offer: "",
    },
    {
      id: "8",
      img: img8,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "",
      offer: "",
    },
  ];

  products.length = 8;

  return (
    <div className="my-10 mx-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-0 gap-y-10 gap-8">
        {products &&
          products.map((item, index) => (
            <ComputerItem key={index} item={item} handleAddToCartProduct={handleAddToCartProduct} />
          ))}
      </div>
    </div>
  );
};

export default ComputerItemBody;
