import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "../../../../Share/Rating/Rating";

const HappyClients = () => {
  const brandLogoItems = [
    "brandLogo1",
    "brandLogo2",
    "brandLogo3",
    "brandLogo4",
    "brandLogo5",
    "brandLogo6",
    "brandLogo7",
    "brandLogo8",
  ];
  return (
    <>
      <div className="border border-gray-200 py-6 px-4">
        <h5 className="text-lg font-bold pb-6 border-b border-gray-200">From our blog</h5>
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
          //   pagination={{
          //     dynamicBullets: true,
          //   }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {brandLogoItems.map((bgItem) => (
            <SwiperSlide>
              <div className="w-full flex flex-col gap-1 justify-center items-center">
                <p className="text-center text-sm pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum adipisci unde
                  reiciendis dignissimos nostrum beatae nesciunt consectetur natus eaque dolorem,
                  incidunt laboriosam, sunt nemo, totam quidem vero consequuntur mollitia!
                  Laudantium.
                </p>
                <div className="avatar pt-4">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                  </div>
                </div>
                <span className="font-bold text-primary">alex</span>
                <span>Art Director</span>
                <Rating />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HappyClients;
