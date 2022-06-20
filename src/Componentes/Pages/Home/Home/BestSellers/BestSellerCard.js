import React, { useState } from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rating from "../../../../Share/Rating/Rating";
import { MdAddShoppingCart } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import HartIcon from "../../../../Share/HartIcon";
import CardDetailsModal from "../../../../Share/CardDetailsModal/CardDetailsModal";

const BestSellerCard = () => {
  const [hoveredCart, setHoveredCart] = useState("");
  const [showModal, setShowModal] = useState("");

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };

  console.log(hoveredCart);
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

  allItems.length = 8;
  return (
    <>
      <div className="my-10 mx-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-8">
          {allItems.map((item, index) => (
            <div
              onMouseEnter={showCartHandler}
              onMouseLeave={hideCartHandler}
              key={index}
              class="card max-w-[260px] hover:z-10 w-full mx-auto bg-base-100 hover:shadow-xl hover:border hover:border-gray-300 scale-100 hover:scale-110 ease-in duration-200"
            >
              <figure className="relative">
                <div
                  class={` badge rounded-full bg-red-500 text-neutral capitalize absolute top-3 left-3 ${
                    !item?.offer && "hidden"
                  }`}
                >
                  {item?.offer}%
                </div>

                <div
                  class={`badge badge-outline hover:bg-primary hover:text-neutral badge-primary  capitalize absolute top-3 right-3 ${
                    !item?.badge && "hidden"
                  }`}
                >
                  {item?.badge}
                </div>
                <img src={item?.img} alt="Shoes" />
              </figure>

              <div class="card-body p-4 pt-6 gap-1 relative">
                <div className={`absolute z-10 top-[-20px] left-16 ${hoveredCart}`}>
                  <div className="flex justify-center items-center ">
                    <span
                      onClick={setShowModal}
                      className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary  p-2 rounded-full"
                    >
                      <AiFillEye />
                    </span>
                    <span className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary p-2 rounded-full">
                      <BiRefresh />
                    </span>
                    <span className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary p-2 rounded-full">
                      <HartIcon />
                    </span>
                  </div>
                </div>
                <h2 class="card-title text-primary text-lg">{item.title}</h2>
                <div className="flex items-center gap-2 justify-start">
                  <Rating />
                  <span>{item?.review}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-1">
                    <span className="text-red-500 text-lg font-bold">${item?.currentPrice}</span>
                    <span className="text-gray-500 line-through text-sm">
                      ${item?.previousPrice}
                    </span>
                  </div>
                  <div>
                    <span className="rounded-full px-2 py-2  hover:bg-primary hover:text-neutral inline-block bg-gray-300">
                      <MdAddShoppingCart />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSellerCard;
