import React from "react";
import banner1 from "../../../../../assets/banner-box.jpg";
import banner2 from "../../../../../assets/banner-2.webp";

const BestSellersBanner = () => {
  return (
    <div className="lg:max-h-[208px] ">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-10">
        <div
          style={{ backgroundImage: `url(${banner1})` }}
          className="border h-[208px]  mx-auto w-full max-w-[468px] bg-no-repeat bg-cover shadow border-gray-200"
        >
          <div className="flex flex-col  justify-center pl-8 h-full gap-2">
            <span className="text-primary uppercase text-xs">weekend discount</span>
            <h2 className="text-3xl font-bold text-accent">Home Speaker</h2>
            <span className="text-accent">Don't miss the last opportunity</span>
            <div>
              <button className="btn btn-primary  mt-4 btn-sm rounded-full px-4 text-xs text-neutral">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${banner2})` }}
          className="border h-[208px] mx-auto w-full max-w-[468px] bg-no-repeat bg-cover shadow border-gray-200"
        >
          <div className="flex flex-col justify-center pl-8 h-full gap-2">
            <span className="text-primary uppercase text-xs">weekend discount</span>
            <h2 className="text-3xl font-bold text-accent">New Smartphones</h2>
            <span className="text-accent">Don't miss the last opportunity</span>
            <div>
              <button className="btn btn-primary  mt-4 btn-sm rounded-full px-4 text-xs text-neutral">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersBanner;
