import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import Collapsible from "react-collapsible";
import MultiRangeSlider from "multi-range-slider-react";
import "./DashboardFilterSidebar.css";
import { BsChevronDown } from "react-icons/bs";

const DashboardFilterSidebar = () => {
  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/all-user", name: "all-user" },
  ];
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const [editCancel, setEditCancel] = useState(false);
  // const [value, setValue] = useState({
  //   max: maxValue,
  //   min: minValue,
  // });
  const [value, setValue] = useState(50);

  // const onClick = (e) => {
  //   // setValue(e.target.value);
  //   set_maxValue(e.target.value);
  // };

  return (
    <>
      <div className="py-5  bg-base-100 mb-2 px-5">
        <h4 className="text-2xl font-bold text-center ">Filter</h4>
      </div>
      <div className=" ">
        {/* Categories */}
        <div className="bg-base-100 mb-2 ">
          <h4 className="text-xl font-bold p-5 bg-base-100">Categories</h4>
          <div>
            {/* <Collapsible className="w-full mt-[-35px]" trigger={[`'`, <BsChevronDown />]}> */}
            <div className="p-5 border-t border-gray-700">
              {/* Apple */}
              <div class="form-control">
                <label class="label justify-start gap-2 cursor-pointer">
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                  <span class="label-text">Apple</span>
                </label>
              </div>
              {/* Camera */}
              <div class="form-control">
                <label class="label justify-start gap-2 cursor-pointer">
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                  <span class="label-text">Camera</span>
                </label>
              </div>
              {/* Computers */}
              <div class="form-control">
                <label class="label justify-start gap-2 cursor-pointer">
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                  <span class="label-text">Computers </span>
                </label>
              </div>
              {/* Laptop */}
              <div class="form-control">
                <label class="label justify-start gap-2 cursor-pointer">
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                  <span class="label-text">Laptop</span>
                </label>
              </div>
              {/* Headphones */}
              <div class="form-control">
                <label class="label justify-start gap-2 cursor-pointer">
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                  <span class="label-text">Headphones</span>
                </label>
              </div>
              {/* Smartwatches */}
              <div class="form-control">
                <label class="label justify-start gap-2 cursor-pointer">
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                  <span class="label-text">Smartwatches</span>
                </label>
              </div>
              {/* Television */}
              <div class="form-control">
                <label class="label justify-start gap-2 cursor-pointer">
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                  <span class="label-text">Television </span>
                </label>
              </div>
            </div>
            {/* </Collapsible> */}
          </div>
        </div>
        <div className="bg-base-100 ">
          <h4 className="text-xl font-bold p-5 border-b border-gray-700">Price Range</h4>
          <div className="p-5">
            <div class="flex flex-col space-y-2 ">
              <div className="pt-5">
                <MultiRangeSlider
                  // baseClassName="multi-range-slider-black border-none"
                  min={0}
                  max={100000}
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
              <div className="flex justify-between pt-2">
                <div className="border border-gray-500 ">
                  <input
                    className="input border-none text-center block h-8   focus:outline-none bg-none rounded-none w-24 "
                    value={minValue}
                    onChange={(e) => set_minValue(e.target.value)}
                  />
                </div>
                <div className="border border-gray-500">
                  <input
                    className="input border-none text-center block h-8 focus:outline-none bg-none rounded-none w-24"
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

export default DashboardFilterSidebar;
