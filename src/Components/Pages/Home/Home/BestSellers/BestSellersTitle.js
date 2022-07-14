import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BestSellersTitle = ({ setCategory, category }) => {
  return (
    <div className="">
      <div className="flex justify-between border-b pt-10  border-gray-200">
        <div className="flex flex-row gap-2 ">
          <h3 className="text-[2vw] md:text-lg bg-primary py-2 text-neutral px-4 rounded-t cursor-pointer">
            Best Sellers
          </h3>
          <h3
            onClick={() => setCategory("refrigerator")}
            className="text-[2vw] md:text-lg  hover:bg-primary relative  md:top-2 py-2 md:py-1 h-9 hover:h-11 hover:top-0 hover:py-2 ease-in-out duration-300 text-gray-500 bg-gray-300 hover:text-neutral px-4 rounded-t cursor-pointer"
          >
            refrigerator
          </h3>
          <h3
            onClick={() => setCategory("AC")}
            className="md:text-lg text-[2vw]  hover:bg-primary relative md:top-2 py-2 md:py-1 h-9 hover:h-11 hover:top-0 hover:py-2 ease-in-out duration-300 text-gray-500 bg-gray-300 hover:text-neutral px-4 rounded-t cursor-pointer"
          >
            AC
          </h3>
        </div>
        <div className="relative top-4">
          <Link to={`/categories/${category}`} className="text-primary flex items-center gap-2">
            <span> view all</span>
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSellersTitle;
