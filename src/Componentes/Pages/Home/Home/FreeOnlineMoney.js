import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import delivery from "../../../../assets/icon1.webp";
import support from "../../../../assets/icon2.webp";
import returns from "../../../../assets/icon3.webp";

const FreeOnlineMoney = () => {
  return (
    <div className="my-8  py-10 border bg-base-200 border-gray-200 mx-10 md:mx-0">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 lg:gap-0">
        <div className="flex justify-center w-full lg:border-r-[0.5px] border-gray-400">
          <div className="flex justify-around  max-w-[210px]">
            <div className=" px-3">
              <img src={delivery} alt="" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[16px]">Free Delivery</p>
              <span className="text-xs">Free shipping on all order</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full lg:border-r-[0.5px] border-gray-400">
          <div className="flex justify-around  max-w-[210px]">
            <div className=" px-3">
              <img src={support} alt="" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[16px] ">Online Support 24/7</p>
              <span className="text-xs">Free shipping on all order</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full lg:border-r-[0.5px] border-gray-400">
          <div className="flex justify-around  max-w-[210px]">
            <div className="px-3 pr-5">
              <img src={returns} alt="" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[16px]">Money Return</p>
              <span className="text-xs">Free shipping on all order</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex justify-around  max-w-[210px]">
            <div className="px-3 pr-5 text-primary">
              <FaPhoneSquareAlt className="text-4xl" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[16px]">Money Return</p>
              <span className="text-xs">Free shipping on all order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeOnlineMoney;
