import React from "react";
import TImer from "../../../../Share/CountDown/TImer";
import Rating from "../../../../Share/Rating/Rating";

const ElectronicLeftSite = () => {
  return (
    <div>
      <div className="flex lg:flex-col sm:flex-col flex-col md:flex-row gap-x-5 gap-y-10 items-center">
        <div className="relative md:col-span-2 border-primary  border-2 md:max-w-md max-w-xs mx-auto ">
          <span className="absolute   top-[-5px] left-[-5px] z-40">
            <img src={""} alt="" />
          </span>
          <div className="badge lg:hidden text-[#16163b] absolute lg:right-4 right-4 bg-red-500 py-3 px-4  md:left-24  top-4">
            <span className="text-base-100">5%</span>
          </div>
          <div className="badge text-[#16163b] absolute lg:right-4 bg-red-500 py-3 px-4 top-4">
            <span className="text-base-100">5%</span>
          </div>

          <div className="pb-6 md:grid md:grid-cols-3 w-full lg:block">
            <div className="col-span-1 my-auto">
              <img src={"offerItem"} alt="" />
            </div>
            <div className="px-2 col-span-2 flex justify-start flex-col">
              <span className="text-primary  pt-6 font-bold lg:text-center block">
                Bose Noise Cancelling Wireless Bluetooth
              </span>
              <span className="pt-5 lg:flex justify-center">
                <Rating />
              </span>
              <span className=" py-5 lg:text-center">
                <span className="text-red-600 text-2xl pr-2">$50.00</span>
                <span className="text-gray-400 text-lg line-through">$60</span>
              </span>
              <div className="">
                <p className="lg:text-center text-secondary font-bold pb-4 text-lg">
                  Hurry Up! Offer end in:
                </p>
                <p className="max-w-xs">
                  <TImer />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto md:max-h-[310px]">
          <img className="max-w-xs  w-full mx-auto md:max-h-[310px]" src={""} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ElectronicLeftSite;
