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
import BestSellersSideCard from "./BestSellersSideCard";

const BestSellers = () => {
  const themes = useContext(ThemesApi);
  console.log(themes);

  return (
    <section className="container mx-auto">
      <h3 className=" pb-2 uppercase lg:block hidden font-bold text-start">Trending Products</h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
        <div className="lg:col-span-1 w-full mx-auto lg:mx-0 lg:order-1 order-2">
          <h3 className=" pb-10 text-2xl uppercase lg:hidden font-bold text-center">
            Trending Products
          </h3>
          <BestSellersSideCard />
        </div>
        <div className="lg:col-span-3 lg:order-2 order-1">
          <BestSellersBanner />
          <BestSellersTitle />
          <BestSellerItems />
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
