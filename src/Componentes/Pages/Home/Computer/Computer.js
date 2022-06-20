import React from "react";
import ComputerBanner from "./ComputerBanner";
import ComputerItemBody from "./ComputerItemBody";
import ComputerTitle from "./ComputerTitle";

const Computer = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-10">
          <div className="lg:col-span-1 w-full mx-auto lg:mx-0 lg:order-1 order-2">
            <h3 className="text-lg pb-2 font-bold text-center lg:text-start">Trending Products</h3>
            <div className="grid lg:grid-rows-4 md:grid-cols-2 lg:grid-cols-none justify-items-center gap-5">
              <h1>gelo</h1>
              <h1>gelo</h1>
              <h1>gelo</h1>
              <h1>gelo</h1>
            </div>
          </div>
          <div className="lg:col-span-3 lg:order-2 order-1">
            <ComputerBanner />
            <ComputerTitle />
            <ComputerItemBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Computer;
