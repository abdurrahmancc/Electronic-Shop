import React from "react";
import Footer from "../../../Share/Footer/Footer";
import Banner from "../../../Share/Navbar/Banner";
import Navbar from "../../../Share/Navbar/Navbar";
import TopNavbar from "../../../Share/Navbar/TopNavbar";
import Computer from "../Computer/Computer";
import BestSellers from "./BestSellers/BestSellers";
import BrandLogo from "./BrandLogo/BrandLogo";
import CheckBox from "./CheckBox";
import Electronic from "./Electronic/Electronic";
import FreeOnlineMoney from "./FreeOnlineMoney";
import Newsletters from "./Newsletters/Newsletters";
import Phone from "./Phone/Phone";

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
            <div className="md:col-span-3 "></div>
            <div className="md:col-span-9">
              <Banner />
            </div>
          </div>
          <FreeOnlineMoney />
        </div>
      </header>
      <main>
        <BestSellers />
        <Electronic />
        <Computer />
        <Phone />
        <BrandLogo />
        <Newsletters />
      </main>
      <Footer />
    </>
  );
};

export default Home;
