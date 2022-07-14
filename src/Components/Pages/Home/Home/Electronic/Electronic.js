import React, { useState } from "react";
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
import { useQuery } from "react-query";
import axiosPrivet from "../../../../Hooks/axiosPrivet";
import Loading from "../../../../Share/Loading/Loading";

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

  const [category, setCategory] = useState("watch");

  const { data, isLoading } = useQuery(
    ["homeElectronic", category],
    async () => await axiosPrivet.get(`home-electronic/${category}`)
  );

  const { data: trendProducts, isLoading: sIsLoading } = useQuery(
    ["home-watch", category],
    async () => await axiosPrivet.get(`home-watch/watch`)
  );

  if (isLoading || sIsLoading) {
    return <Loading />;
  }

  return (
    <section className="container mx-auto mt-10">
      <h3 className=" pb-2 uppercase lg:block hidden font-bold text-start">Trending Products</h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
        <div className="lg:col-span-1 w-full mx-auto lg:mx-0 lg:order-1 order-2">
          <h3 className=" pb-10 text-2xl uppercase lg:hidden font-bold text-center">
            Trending Products
          </h3>
          <div>
            <TrendingProductsCard trendProducts={trendProducts?.data}></TrendingProductsCard>
          </div>
        </div>
        <div className="lg:col-span-3 lg:order-2 order-1">
          <ElectronicBanner />
          <ElectronicTitle setCategory={setCategory} category={category} />
          <ElectronicItemBody products={data?.data} />
        </div>
      </div>
    </section>
  );
};

export default Electronic;
