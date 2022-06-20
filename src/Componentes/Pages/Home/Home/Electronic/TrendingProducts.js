import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../../assets/el-banner-1.jpg";
import img2 from "../../../../../assets/el-banner-2.jpg";
import img3 from "../../../../../assets/el-banner-3.jpg";
import img4 from "../../../../../assets/el-banner-4.jpg";
import img5 from "../../../../../assets/el-banner-4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";

const TrendingProducts = () => {
  const bgItems = [img1, img2, img3, img4, img5];
  return (
    <>
      <Swiper
        slidesPerView={1}
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="grid grid-rows-4 gap-y-5">
          {bgItems.map((bgItem) => (
            <SwiperSlide>
              {/* <img src={bgItem} alt="" /> */}
              hello hi by ny
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default TrendingProducts;
