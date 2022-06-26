import React from "react";
import blog1 from "../../../../../assets/Blog-1.jpg";
import blog2 from "../../../../../assets/Blog-2.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiRightArrowAlt } from "react-icons/bi";

const OurBlog = () => {
  const blogItems = ["jllkj", "jljlk", "jljkl", "ljljk"];
  return (
    <div className="border border-gray-200 py-6 px-4">
      <div className="pb-6 border-b border-gray-200 flex justify-between">
        <h5 className="text-lg font-bold ">From our blog</h5>
        <h5 className="text-primary flex items-center">
          <span className="inline-block">All Blog</span>{" "}
          <span className="inline-block pl-1 pt-1">
            <BiRightArrowAlt />
          </span>
        </h5>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 pt-4 gap-6">
          <div className="lg:col-span-1">
            <img className="hover:scale-110 ease-in-out duration-300" src={blog1} alt="" />
          </div>
          <div className="lg:col-span-2 ">
            <h5 className="hover:text-primary font-bold">This is second post for blog </h5>
            <span className="py-4 inline-block">01 jun 2022</span>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed vero amet quasi
              mollitia alias est,....
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 pt-4 gap-6">
          <div className="lg:col-span-1">
            <img className="hover:scale-110 ease-in-out duration-300" src={blog2} alt="" />
          </div>
          <div className="lg:col-span-2 ">
            <h5 className="hover:text-primary font-bold">This is second post for blog </h5>
            <span className="py-4 inline-block">01 jun 2022</span>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed vero amet quasi
              mollitia alias est,....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
