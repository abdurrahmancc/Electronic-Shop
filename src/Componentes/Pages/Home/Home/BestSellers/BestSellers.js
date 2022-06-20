import React, { useContext } from "react";
import BestSellersBanner from "./BestSellersBanner";
import offerItem from "../../../../../assets/noise3.webp";
import offerBadge from "../../../../../assets/sale-offer.webp";
import Rating from "../../../../Share/Rating/Rating";
import TImer from "../../../../Share/CountDown/TImer";
import { ThemesApi } from "../../../../../App";
import BestSellersTitle from "./BestSellersTitle";
import BestSellerItems from "./BestSellerItems";
import phoneItem from "../../../../../assets/banner-1.webp";

const BestSellers = () => {
  const themes = useContext(ThemesApi);
  console.log(themes);

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-12 grid-cols-1  gap-10">
        <div className="lg:col-span-3 lg:max-w-lg w-full mx-auto lg:order-1 order-2">
          <div className="flex lg:flex-col sm:flex-col flex-col md:flex-row gap-x-5 gap-y-10 items-center">
            <div className="relative md:col-span-2 border-primary  border-2 md:max-w-md max-w-xs mx-auto ">
              <span className="absolute   top-[-5px] left-[-5px] z-40">
                <img src={offerBadge} alt="" />
              </span>
              <div class="badge lg:hidden text-[#16163b] absolute lg:right-4 right-4 bg-red-500 py-3 px-4  md:left-24  top-4">
                <span className="text-base-100">5%</span>
              </div>
              <div class="badge text-[#16163b] absolute lg:right-4 bg-red-500 py-3 px-4 top-4">
                <span className="text-base-100">5%</span>
              </div>

              <div className="pb-6 md:grid md:grid-cols-3 w-full lg:block">
                <div className="col-span-1 my-auto">
                  <img src={offerItem} alt="" />
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
              <img className="max-w-xs  w-full mx-auto md:max-h-[310px]" src={phoneItem} alt="" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-9 order-1 lg:order-2">
          <BestSellersBanner />
          <BestSellersTitle />
          <BestSellerItems />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
