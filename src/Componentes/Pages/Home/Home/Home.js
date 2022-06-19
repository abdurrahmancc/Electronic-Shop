import React from "react";
import Banner from "../../../Share/Navbar/Banner";
import Navbar from "../../../Share/Navbar/Navbar";
import TopNavbar from "../../../Share/Navbar/TopNavbar";
import BestSellers from "./BestSellers/BestSellers";
import CheckBox from "./CheckBox";
import FreeOnlineMoney from "./FreeOnlineMoney";

const Home = () => {
  return (
    <>
      <header>
        <div className="">
          <TopNavbar />
          <Navbar />
        </div>
        <div className="container mx-auto my-8">
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
      </main>
    </>
  );
};

export default Home;
