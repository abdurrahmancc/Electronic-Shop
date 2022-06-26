import React from "react";
import TImer from "../../../Share/CountDown/TImer";
import Rating from "../../../Share/Rating/Rating";
import offerBadge from "../../../../assets/sale-offer.webp";
import offerItem from "../../../../assets/laptop-6.jpg";
import phoneItem from "../../../../assets/laptop-offer.jpg";

const ComputerSideSaleCard = () => {
  return (
    <div className="flex lg:flex-col md:grid md:grid-cols-3 lg:grid-cols-none sm:flex-col flex-col md:flex-row gap-x-5 gap-y-10 items-center">
      <div className="relative md:col-span-2 lg:col-span-full border-primary h-full md:max-h-80 lg:max-h-fit  border-2 md:max-w-full lg:max-w-md max-w-xs mx-auto ">
        <span className="absolute top-[-5px] left-[-5px] z-40">
          <img src={offerBadge} alt="" />
        </span>
        {/* <div class="badge  text-[#16163b] absolute  right-4 bg-red-500 py-3 px-4  md:left-24  top-4">
            <span className="text-base-100">5%</span>
          </div> */}
        <div class="badge text-[#16163b] absolute  right-4 bg-red-500 py-3 px-4 top-2">
          <span className="text-base-100">5%</span>
        </div>

        <div className="pt-5 md:grid md:grid-cols-3 w-full lg:block">
          <div className="col-span-1 flex justify-center lg: my-auto">
            <img src={offerItem} alt="" />
          </div>
          <div className="pr-2 pl-4 col-span-2 md:py-4  lg:pt-0  flex justify-start flex-col">
            <span className="text-primary  pt-6 font-bold text-center lg:text-center md:text-start block">
              Bose Noise Cancelling Wireless Bluetooth
            </span>
            <span className="pt-5 md:pt-2 lg:pt-5 lg:flex justify-center text-center  md:text-start">
              <Rating />
            </span>
            <span className=" py-5 md:py-2 lg:pt-5 text-center lg:text-center md:text-start">
              <span className="text-red-600 text-2xl pr-2">$50.00</span>
              <span className="text-gray-400 text-lg line-through">$60</span>
            </span>
            <div className="">
              <p className="text-center lg:text-center md:text-start text-secondary font-bold pb-4 text-lg md:text-sm lg:text-lg">
                Hurry Up! Offer end in:
              </p>
              <p className="max-w-xs">
                <TImer />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto md:col-span-1 lg:col-span-full">
        <img
          className="max-w-xs  w-full mx-auto h-auto md:max-h-80 lg:max-h-[23rem] image-full"
          src={phoneItem}
          alt=""
        />
      </div>
    </div>
  );
};

export default ComputerSideSaleCard;
