import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../assets/PC-banner-1.jpg";
import img2 from "../../../../assets/PC-banner-2.jpg";
import img3 from "../../../../assets/PC-banner-3.jpg";
import img4 from "../../../../assets/PC-banner-4.jpg";
import img5 from "../../../../assets/PC-banner-5.jpg";
import img6 from "../../../../assets/PC-banner-6.jpg";
import img7 from "../../../../assets/PC-banner-7.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";

const ComputerBanner = () => {
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
    </>
  );
};

export default ComputerBanner;
