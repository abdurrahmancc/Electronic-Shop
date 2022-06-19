import React from "react";
import CheckBox from "../Home/Home/CheckBox";

const SideCategory = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-2 ">
            <div className="mt-6 mb-10 shadow border rounded-lg border-slate-200 ">
              <div className="pt-4  pb-10">
                <h2 className="font-bold text-2xl text-center pb-2">Category</h2>
              </div>
              <div className="px-4 pb-4">
                <CheckBox>{"Accessories"}</CheckBox>
                <CheckBox>{"Best Seller"}</CheckBox>
                <CheckBox>{"camera"}</CheckBox>
                <CheckBox>{"Computer"}</CheckBox>
                <CheckBox>{"Featured"}</CheckBox>
                <CheckBox>{"Gaming"}</CheckBox>
                <CheckBox>{"Head Phone"}</CheckBox>
                <CheckBox>{"Hot Sell"}</CheckBox>
                <CheckBox>{"Mobile & Tablet"}</CheckBox>
                <CheckBox>{"TV"}</CheckBox>
              </div>
            </div>
          </div>
          <div className="col-span-10">
            <h1 className="text-center">hi</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideCategory;
