import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import HartIcon from "../../../../Share/HartIcon";
import Rating from "../../../../Share/Rating/Rating";
import img1 from "../../../../../assets/watch-1.jpg";
import img2 from "../../../../../assets/watch-2.jpg";
import img3 from "../../../../../assets/watch-3.jpg";
import img4 from "../../../../../assets/watch-4.jpg";
import img5 from "../../../../../assets/watch-5.jpg";
import img6 from "../../../../../assets/watch-6.jpg";
import img7 from "../../../../../assets/watch-7.jpg";
import img8 from "../../../../../assets/watch-8.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAddProduct from "../../../../Hooks/useAddProduct";
import ElectronicItem from "./ElectronicItem";

const ElectronicItemBody = ({ products }) => {
  const [hoveredCart, setHoveredCart] = useState("");
  const [showModal, setShowModal] = useState("");
  const navigate = useNavigate();
  const [handleAddToCartProduct] = useAddProduct();

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };
  const watchItems = [
    {
      img: img1,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "",
    },
    {
      img: img2,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "21",
    },
    {
      img: img3,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "",
    },
    {
      img: img4,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "32",
    },
    {
      img: img5,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "32",
    },
    {
      img: img6,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "23",
    },
    {
      img: img7,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "",
      offer: "",
    },
    {
      img: img8,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "5",
    },
  ];

  const handleAddToCart = (item) => {
    handleAddToCartProduct(item);
    // window.location.reload();
    toast.success("Add To Cart", { id: "addToCart" });
  };

  products.length = 8;
  return (
    <div className="my-10 mx-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-0 gap-y-10 gap-8">
        {products &&
          products.map((item, index) => (
            <ElectronicItem
              key={index}
              item={item}
              handleAddToCartProduct={handleAddToCartProduct}
            />
          ))}
      </div>
    </div>
  );
};

export default ElectronicItemBody;
