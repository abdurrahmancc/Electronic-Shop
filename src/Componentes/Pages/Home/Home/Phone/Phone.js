import React from "react";
import PhoneBanner from "./PhoneBanner";
import PhoneItemBody from "./PhoneItemBody";
import PhoneSideSaleCard from "./PhoneSideSaleCard";
import PhoneTitle from "./PhoneTitle";
import img1 from "../../../../../assets/phone-1.jpg";
import img2 from "../../../../../assets/phone-2.jpg";
import img3 from "../../../../../assets/phone-3.jpg";
import img4 from "../../../../../assets/phone-4.jpg";
import img5 from "../../../../../assets/phone-5.jpg";
import img6 from "../../../../../assets/phone-6.jpg";
import img7 from "../../../../../assets/phone-7.jpg";
import img8 from "../../../../../assets/phone-8.jpg";
import PhoneSideBanner from "./PhoneSideBanner";

const Phone = () => {
  const trendingPhoneProducts = [
    {
      id: "1",
      img: img1,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "",
    },
    {
      id: "2",
      img: img2,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "21",
    },
    {
      id: "3",
      img: img3,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "",
    },
    {
      id: "4",
      img: img4,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "32",
    },
    {
      id: "5",
      img: img5,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "32",
    },
    {
      id: "6",
      img: img6,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "23",
    },
    {
      id: "7",
      img: img7,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "",
      offer: "",
    },
    {
      id: "8",
      img: img8,
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
      offer: "5",
    },
  ];

  trendingPhoneProducts.length = 4;
  return (
    <section className="container mx-auto mt-10">
      <h3 className="text-lg pb-2 uppercase lg:block hidden font-bold text-start">
        Trending Laptop
      </h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        <div className="lg:col-span-1 w-full mx-auto lg:mx-0 lg:order-1 order-2">
          <h3 className="pb-10 text-2xl uppercase lg:hidden font-bold text-center">
            Trending Laptop
          </h3>
          <div className="grid lg:grid-rows-4 md:grid-cols-2 lg:grid-cols-none justify-items-center gap-5">
            {trendingPhoneProducts.map((product) => (
              <PhoneSideSaleCard key={product?.id} product={product}></PhoneSideSaleCard>
            ))}
          </div>
          <div className="pt-10 hidden lg:block">
            <PhoneSideBanner />
          </div>
        </div>
        <div className="lg:col-span-3 lg:order-2 order-1">
          <PhoneBanner />
          <PhoneTitle />
          <PhoneItemBody />
        </div>
      </div>
    </section>
  );
};

export default Phone;
