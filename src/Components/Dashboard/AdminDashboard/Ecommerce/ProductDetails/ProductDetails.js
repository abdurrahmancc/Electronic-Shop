import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import axiosPrivet from "../../../../Hooks/axiosPrivet";
import DashboardACFeatures from "./DashboardACFeatures";
import DashboardComputerFeatures from "./DashboardComputerFeatures";
import DashboardHeadphoneFeatures from "./DashboardHeadphoneFeatures";
import DashboardLaptopFeatures from "./DashboardLaptopFeatures";
import DashboardMonitorFeatures from "./DashboardMonitorFeatures";
import DashboardPhoneFeatures from "./DashboardPhoneFeatures";
import DashboardRefrigeratorFeatures from "./DashboardRefrigeratorFeatures";
import DashboardSpeakerFeatures from "./DashboardSpeakerFeatures";
import DashboardWatchFeatures from "./DashboardWatchFeatures";
import ProductDetailsImages from "./ProductDetailsImages";
import ProductsDetailsTitle from "./ProductsDetailsTitle";

const ProductDetails = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showReviews, setShowReviews] = useState(false);

  const [value, setValue] = useState(1);
  const { id } = useParams();

  const { data } = useQuery("productDetails", () => axiosPrivet.get(`product-details/${id}`));
  console.log(data);

  const handleOnChange = (data) => {
    const inputValue = data;
    setValue(inputValue);
  };

  const handleDecrease = () => {
    if (value <= 1) {
      return;
    }
    const decreaseValue = value - 1;
    setValue(decreaseValue);
  };

  const handleIncrease = () => {
    const increaseValue = parseInt(value) + 1;
    setValue(increaseValue);
  };

  // handle Description
  const handleDescription = () => {
    setShowDescription(true);
    setShowReviews(false);
  };
  const handleReviews = () => {
    setShowDescription(false);
    setShowReviews(true);
  };

  return (
    <div className="mt-10 mx-10">
      <div className="grid lg:grid-cols-5  gap-10">
        <div className="lg:col-span-2 mt-10">
          <ProductDetailsImages data={data?.data} />
        </div>
        <div className="lg:col-span-3">
          <div>
            <ProductsDetailsTitle data={data} />
            <div>
              <h4 className="text-xl mt-10">Key Features</h4>
              <div>
                {data?.data?.category.toLowerCase() === "laptop" && (
                  <DashboardLaptopFeatures data={data?.data} />
                )}
                {data?.data?.category.toLowerCase() === "phone" && (
                  <DashboardPhoneFeatures data={data?.data} />
                )}
                {data?.data?.category.toLowerCase() === "watch" && (
                  <DashboardWatchFeatures data={data?.data} />
                )}
                {data?.data?.category.toLowerCase() === "computer" && (
                  <DashboardComputerFeatures data={data?.data} />
                )}
                {data?.data?.category.toLowerCase() === "speaker" && (
                  <DashboardSpeakerFeatures data={data?.data} />
                )}
                {data?.data?.category.toLowerCase() === "ac" && (
                  <DashboardACFeatures data={data?.data} />
                )}
                {data?.data?.category.toLowerCase() === "headphone" && (
                  <DashboardHeadphoneFeatures data={data?.data} />
                )}
                {data?.data?.category.toLowerCase() === "refrigerator" && (
                  <DashboardRefrigeratorFeatures data={data?.data} />
                )}
                {data?.data?.category.toLowerCase() === "monitor" && (
                  <DashboardMonitorFeatures data={data?.data} />
                )}
              </div>
            </div>
            <hr className="mt-5 border-gray-700" />
            <div className="flex py-10 gap-10">
              <div className=" w-36 relative ">
                <div onClick={handleDecrease} className="absolute top-4 left-2 cursor-pointer">
                  <span>
                    <BiMinus className="text-lg" />
                  </span>
                </div>
                <div onClick={handleIncrease} className="absolute top-4 right-2 cursor-pointer">
                  <span>
                    <AiOutlinePlus className="text-lg" />
                  </span>
                </div>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleOnChange(e.target.value)}
                  className="focus:outline-none px-10 text-xl text-center h-12 rounded-sm bg-base-100 w-full"
                />
              </div>
              <div>
                <button className="btn btn-primary px-10 rounded-sm">add to cart</button>
              </div>
            </div>
            <hr className="border-gray-700" />
          </div>
        </div>
      </div>
      {/* detail  */}
      <div className="mt-20">
        <div className="flex justify-between border-b pt-10  border-gray-200">
          <div className="flex flex-row gap-2 ">
            <h4
              onClick={handleDescription}
              className="text-[2vw] cursor-pointer md:text-lg bg-primary py-2 text-neutral px-4 rounded-t"
            >
              Description
            </h4>
            <h4
              onClick={handleReviews}
              className="text-[2vw] md:text-lg cursor-pointer  hover:bg-primary relative  md:top-2 py-2 md:py-1 h-9 hover:h-11 hover:top-0 hover:py-2 ease-in-out duration-300 text-gray-500 bg-gray-300 hover:text-neutral px-4 rounded-t"
            >
              Reviews
            </h4>
          </div>
        </div>
        <div className="my-10">
          {showDescription && (
            <div>
              <h4 className="text-[1.3vw]">{data?.data?.productName}</h4>
              <p className="mt-5 text-[1vw]">{data?.data?.productDescription}</p>
            </div>
          )}
          {showReviews && <div className="text-[1.3vw]">reviews</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
