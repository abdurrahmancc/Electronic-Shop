import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import Collapsible from "react-collapsible";
import MultiRangeSlider from "multi-range-slider-react";
import "./DashboardFilterSidebar.css";
import { BsChevronDown } from "react-icons/bs";

const DashboardFilterSidebar = ({
  handleChangeChecked,
  categories,
  minValue,
  set_minValue,
  maxValue,
  set_maxValue,
}) => {
  // console.log(categories);
  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/all-user", name: "all-user" },
  ];

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
      <div className="py-5  bg-base-100 px-5">
        <h4 className="text-2xl font-bold text-center">Filter</h4>
      </div>
      <div className="">
        {/* Categories */}
        <div className="bg-base-100 mb-2 ">
          {/* <h4 className="text-xl font-bold p-5 bg-base-100">Categories</h4> */}
          <div id="dashboardFilter" className="mt-2">
            <Collapsible className="w-full" open={true} trigger={[`Categories`, <BsChevronDown />]}>
              <div className="p-5 border-t border-gray-700">
                {/* Apple */}
                {categories.map((category) => (
                  <div className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={"phone"}
                        onChange={() => handleChangeChecked(category?.id)}
                        className="checkbox rounded-none checkbox-xs"
                      />
                      <span className="label-text capitalize">{category?.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </Collapsible>
          </div>
        </div>
        <div className="bg-base-100 ">
          <h4 className="text-xl font-bold p-5 border-b border-gray-700">Price Range</h4>
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
              <div className="flex justify-between pt-2">
                <div className="border border-gray-500 ">
                  <input
                    className="input border-none text-center block h-8   focus:outline-none bg-none rounded-none max-w-[8rem]  w-full text-[1vw]"
                    value={minValue}
                    onChange={(e) => set_minValue(e.target.value)}
                  />
                </div>
                <div className="border border-gray-500">
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

export default DashboardFilterSidebar;
