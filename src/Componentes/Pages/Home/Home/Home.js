import React from "react";
import Banner from "../../../Share/Navbar/Banner";
import Navbar from "../../../Share/Navbar/Navbar";
import TopNavbar from "../../../Share/Navbar/TopNavbar";
import Computer from "../Computer/Computer";
import BestSellers from "./BestSellers/BestSellers";
import CheckBox from "./CheckBox";
import Electronic from "./Electronic/Electronic";
import FreeOnlineMoney from "./FreeOnlineMoney";

const Home = () => {
  return (
    <>
      <header>
        <div className="">
          <TopNavbar />
          <Navbar />
        </div>
        <div className="container mx-auto mb-8 lg:mt-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3 "></div>
            <div className="lg:col-span-9">
              <Banner />
              <FreeOnlineMoney />
            </div>
          </div>
        </div>
      </header>
      <main>
        <BestSellers />
        <Electronic />
        <Computer />
      </main>
    </>
  );
};

export default Home;
