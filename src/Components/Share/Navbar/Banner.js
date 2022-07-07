import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/bg5.jpg";
import img2 from "../../../assets/bg1.jpg";
import img3 from "../../../assets/bg2.jpg";
import img4 from "../../../assets/bg3.jpg";
import img5 from "../../../assets/bg4.jpg";
import img6 from "../../../assets/bg6.jpg";
import img7 from "../../../assets/bg7.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import "./Banner.css";

const Banner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const bgItems = [img1, img2, img3, img4, img5, img6, img7];
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
        navigation={true}
        // pagination={pagination}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bgItems.map((bgItem, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <img className="w-full h-auto" src={bgItem} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
