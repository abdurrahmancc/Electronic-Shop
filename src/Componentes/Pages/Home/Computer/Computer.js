import React from "react";
import ComputerBanner from "./ComputerBanner";
import ComputerItemBody from "./ComputerItemBody";
import ComputerSideSaleCard from "./ComputerSideSaleCard";
import ComputerTitle from "./ComputerTitle";

const Computer = () => {
  return (
    <section className="container mx-auto mt-10">
      <h3 className="text-lg pb-2 uppercase lg:block hidden font-bold text-start">
        Trending Laptop
      </h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        <div className="lg:col-span-1 w-full mx-auto lg:mx-0 lg:order-1 order-2">
          <h3 className="pb-10 text-2xl uppercase lg:hidden font-bold text-center">
            Trending Laptop
          </h3>
          <ComputerSideSaleCard />
        </div>
        <div className="lg:col-span-3 lg:order-2 order-1">
          <ComputerBanner />
          <ComputerTitle />
          <ComputerItemBody />
        </div>
      </div>
    </section>
  );
};

export default Computer;
