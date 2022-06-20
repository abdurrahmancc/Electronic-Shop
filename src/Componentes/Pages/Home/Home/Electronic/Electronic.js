import React from "react";
import ElectronicBanner from "./ElectronicBanner";
import ElectronicItemBody from "./ElectronicItemBody";

import ElectronicTitle from "./ElectronicTitle";
import TrendingProducts from "./TrendingProducts";
import img1 from "../../../../../assets/watch-1.jpg";
import img2 from "../../../../../assets/watch-2.jpg";
import img3 from "../../../../../assets/watch-3.jpg";
import img4 from "../../../../../assets/watch-4.jpg";
import img5 from "../../../../../assets/watch-5.jpg";
import img6 from "../../../../../assets/watch-6.jpg";
import img7 from "../../../../../assets/watch-7.jpg";
import img8 from "../../../../../assets/watch-8.jpg";
import TrendingProductsCard from "./TrendingProductsCard";

const Electronic = () => {
  const trendingProducts = [
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

  trendingProducts.length = 7;

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-10">
        <div className="lg:col-span-1 w-full mx-auto lg:mx-0 lg:order-1 order-2">
          <h3 className="text-lg pb-2 font-bold text-center lg:text-start">Trending Products</h3>
          <div className="grid lg:grid-rows-4 md:grid-cols-2 lg:grid-cols-none justify-items-center gap-5">
            {trendingProducts.map((product) => (
              <TrendingProductsCard key={product?.id} product={product}></TrendingProductsCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 lg:order-2 order-1">
          <ElectronicBanner />
          <ElectronicTitle />
          <ElectronicItemBody />
        </div>
      </div>
    </div>
  );
};

export default Electronic;
