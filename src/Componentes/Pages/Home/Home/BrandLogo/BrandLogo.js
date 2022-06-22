import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import brandLogo1 from "../../../../../assets/brandLogo-1.jpg";
import brandLogo2 from "../../../../../assets/brandLogo-2.jpg";
import brandLogo3 from "../../../../../assets/brandLogo-3.jpg";
import brandLogo4 from "../../../../../assets/brandLogo-4.jpg";
import brandLogo5 from "../../../../../assets/brandLogo-5.jpg";
import brandLogo6 from "../../../../../assets/brandLogo-6.jpg";
import brandLogo7 from "../../../../../assets/brandLogo-7.jpg";
import brandLogo8 from "../../../../../assets/brandLogo-8.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const BrandLogo = () => {
  const brandLogoItems = [
    brandLogo1,
    brandLogo2,
    brandLogo3,
    brandLogo4,
    brandLogo5,
    brandLogo6,
    brandLogo7,
    brandLogo8,
  ];

  return (
    <section className="container mx-auto">
      <Swiper
        slidesPerView={7}
        // spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {brandLogoItems.map((logo, index) => (
          <SwiperSlide key={index}>
            <img className="hover:scale-125 scale-105 ease-in-out duration-300" src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandLogo;
