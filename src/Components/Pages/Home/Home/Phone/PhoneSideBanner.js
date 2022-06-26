import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import banner1 from "../../../../../assets/phoneSiteBanner-1.jpg";
import banner2 from "../../../../../assets/phoneSiteBanner-2.jpg";
import banner3 from "../../../../../assets/phoneSiteBanner-3.jpg";
import banner4 from "../../../../../assets/phoneSiteBanner-4.jpg";

const PhoneSideBanner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        //   navigation={true}
        // pagination={pagination}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PhoneSideBanner;
