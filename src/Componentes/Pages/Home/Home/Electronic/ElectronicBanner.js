import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../../assets/el-banner-1.jpg";
import img2 from "../../../../../assets/el-banner-2.jpg";
import img3 from "../../../../../assets/el-banner-3.jpg";
import img4 from "../../../../../assets/el-banner-4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
// import "./Banner.css";

const ElectronicBanner = () => {
  const bgItems = [img1, img2, img3, img4];
  return (
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
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {bgItems.map((bgItem) => (
        <SwiperSlide>
          <div className="w-full">
            <img className="w-full h-auto" src={bgItem} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ElectronicBanner;
