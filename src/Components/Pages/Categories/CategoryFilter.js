import MultiRangeSlider from "multi-range-slider-react";
import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";

const CategoryFilter = ({ categories, minValue, set_minValue, maxValue, set_maxValue }) => {
  // console.log(categories);
  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/all-user", name: "all-user" },
  ];

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <>
      <div className="">
        <div className="bg-neutral shadow-lg border-[.2px] border-gray-200">
          <h4 className="text-xl font-bold p-5 border-b border-gray-200">Price Range</h4>
          <div className="p-5">
            <div className="flex flex-col space-y-2 ">
              <div className="pt-5">
                <MultiRangeSlider
                  // baseClassName="multi-range-slider-black border-none"
                  min={0}
                  max={900000}
                  step={5}
                  ruler={false}
                  label={true}
                  preventWheel={false}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <div className="flex justify-between pt-4">
                <div className="border border-gray-300 ">
                  <input
                    className="input border-none text-center block h-8   focus:outline-none bg-none rounded-none max-w-[8rem]  w-full text-[1vw]"
                    value={minValue}
                    onChange={(e) => set_minValue(e.target.value)}
                  />
                </div>
                <div className="border border-gray-300">
                  <input
                    className="input border-none text-center block h-8 focus:outline-none bg-none rounded-none max-w-[8rem] w-full  text-[1vw]"
                    value={maxValue}
                    onChange={(e) => set_maxValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
