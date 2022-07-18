import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import HartIcon from "../../../../Share/HartIcon";
import Rating from "../../../../Share/Rating/Rating";
import img1 from "../../../../../assets/phone-1.jpg";
import img2 from "../../../../../assets/phone-2.jpg";
import img3 from "../../../../../assets/phone-3.jpg";
import img4 from "../../../../../assets/phone-4.jpg";
import img5 from "../../../../../assets/phone-5.jpg";
import img6 from "../../../../../assets/phone-6.jpg";
import img7 from "../../../../../assets/phone-7.jpg";
import img8 from "../../../../../assets/phone-8.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAddProduct from "../../../../Hooks/useAddProduct";

const PhoneItemBody = ({ products }) => {
  const [hoveredCart, setHoveredCart] = useState("");
  const [showModal, setShowModal] = useState("");
  const [handleAddToCartProduct] = useAddProduct();
  const navigate = useNavigate();

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };
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

  const handleAddToCart = (item) => {
    handleAddToCartProduct(item);
    // window.location.reload();
    toast.success("Add To Cart", { id: "addToCart" });
  };

  products.length = 8;
  return (
    <div className="my-10 mx-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-0 gap-y-10 gap-8">
        {products.map((item, index) => (
          <div
            // onMouseEnter={showCartHandler}
            // onMouseLeave={hideCartHandler}
            key={index}
            className="card max-w-[260px] hover:z-10 w-full mx-auto bg-base-100 hover:shadow-xl hover:border hover:border-gray-300 scale-100 hover:scale-110 ease-in duration-200"
          >
            <figure className="relative">
              <div
                className={` badge rounded-full bg-red-500 text-neutral capitalize absolute top-3 left-3 ${
                  !item?.offer && "hidden"
                }`}
              >
                {item?.offer}%
              </div>
              <div
                className={`badge badge-outline hover:bg-primary hover:text-neutral badge-primary text-neutral capitalize absolute top-3 right-3 ${
                  !item?.badge && "hidden"
                }`}
              >
                {item?.badge}
              </div>

              <img
                onClick={() => navigate(`/item-details/${item?._id}`)}
                src={item?.images?.ImageURL1}
                alt="Shoes"
                className="cursor-pointer"
              />
            </figure>

            <div className="card-body p-4 pt-6 gap-0 relative">
              <div className={`absolute z-10 top-[-20px] right-1 w-full ${hoveredCart}`}>
                <div className="flex justify-center items-center ">
                  <span
                    //   onClick={setShowModal}
                    className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary  p-2 rounded-full"
                  >
                    <Link to={`/item-details/${item?._id}`}>
                      <AiFillEye />
                    </Link>
                  </span>
                  <span className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary p-2 rounded-full">
                    <BiRefresh />
                  </span>
                  <span className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary p-2 rounded-full">
                    <HartIcon />
                  </span>
                </div>
              </div>
              <h2
                onClick={() => navigate(`/item-details/${item?._id}`)}
                className="card-title cursor-pointer text-primary text-sm"
              >
                {item?.productName}
              </h2>
              <div className="flex items-center gap-2 justify-start">
                <Rating />
                <span>{item?.review ? item?.review : "1"}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-1">
                  <span className="text-red-500 text-lg font-bold">${item?.price}</span>
                  {item?.previousPrice && (
                    <span className="text-gray-500 line-through text-sm">
                      ${item?.previousPrice}
                    </span>
                  )}
                </div>
                <div>
                  <span
                    onClick={() => handleAddToCart(item)}
                    className="rounded-full px-2 py-2 cursor-pointer  hover:bg-primary hover:text-neutral inline-block bg-gray-300"
                  >
                    <MdAddShoppingCart />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneItemBody;
