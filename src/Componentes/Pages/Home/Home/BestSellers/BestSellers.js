import React, { useContext } from "react";
import BestSellersBanner from "./BestSellersBanner";
import offerItem from "../../../../../assets/noise3.webp";
import offerBadge from "../../../../../assets/sale-offer.webp";
import Rating from "../../../../Share/Rating/Rating";
import TImer from "../../../../Share/CountDown/TImer";
import { ThemesApi } from "../../../../../App";
import BestSellersTitle from "./BestSellersTitle";
import BestSellerItems from "./BestSellerItems";

const BestSellers = () => {
  const themes = useContext(ThemesApi);
  console.log(themes);

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-12 grid-cols-1  gap-10">
        <div className="lg:col-span-3 max-w-lg w-full mx-auto">
          <div className="relative border-primary border-2 max-w-md  mx-auto">
            <span className="absolute top-[-5px] left-[-5px] z-40">
              <img src={offerBadge} alt="" />
            </span>
            <div class="badge text-[#16163b] absolute bg-red-500 py-3 px-4 right-4 top-4">
              <span className="text-base-100">5%</span>
            </div>
            <div className="pb-6">
              <img src={offerItem} alt="" />
              <div className="px-2">
                <span className="text-primary pt-6 font-bold text-center block">
                  Bose Noise Cancelling Wireless Bluetooth
                </span>
                <span className="pt-5 flex justify-center">
                  <Rating />
                </span>
                <span className="flex justify-center py-5">
                  <span className="text-red-600 text-2xl pr-2">$50.00</span>
                  <span className="text-gray-400 text-lg line-through">$60</span>
                </span>
                <div className="">
                  <p className="text-center text-secondary font-bold pb-4 text-lg">
                    Hurry Up! Offer end in:
                  </p>
                  <TImer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-9">
          <BestSellersBanner />
          <BestSellersTitle />
          <BestSellerItems />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
