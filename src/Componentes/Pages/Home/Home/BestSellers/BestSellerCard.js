import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BestSellerCard = () => {
  const allItems = [
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
    },
    {
      img: "https://htmldemo.net/circleshop/circleshop/assets/images/product/product-2.jpg",
      title: "Headphone",
      currentPrice: "30",
      previousPrice: "340",
      review: "4",
      badge: "new",
    },
  ];
  return (
    <div className="">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {allItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="hover:shadow">
              <img src={item.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSellerCard;
