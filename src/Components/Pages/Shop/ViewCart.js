import { current } from "daisyui/src/colors";
import React from "react";
import { useState } from "react";
import Breadcrumb from "../../Dashboard/Breadcrumb/Breadcrumb";
import useProducts from "../../Hooks/useProducts";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
import TopNavbar from "../../Share/Navbar/TopNavbar";
import Newsletters from "../Home/Home/Newsletters/Newsletters";
import SubTotalPrice from "./SubTotalPrice";
import ViewCartTable from "./ViewCartTable";

const ViewCart = () => {
  const [cartProducts, setCartProducts] = useProducts();
  const cartTableRowInfo = [cartProducts];
  const crumbs = [
    { path: "home", name: "Home" },
    { path: "view-cart", name: "Cart" },
  ];

  let totalPrice;
  const price = cartProducts.map((product) => product.price * product.quantity);
  const initialValue = 0;
  if (price?.length >= 1) {
    const sumReduce = price.reduce((previous, current) => previous + current, initialValue);
    totalPrice = sumReduce;
  }
  return (
    <>
      <header>
        <div className="">
          <TopNavbar />
          <Navbar />
        </div>
        <section className=" bg-slate-100 py-2 mb-6">
          <div className="container mx-auto">
            <div className="text-sm breadcrumbs">
              <Breadcrumb crumbs={crumbs} />
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="container mx-auto">
          {cartProducts.length >= 1 ? (
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10">
              <div className="col-span-2">
                <ViewCartTable
                  // setTotalPrice={setTotalPrice}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                >
                  {cartTableRowInfo}
                </ViewCartTable>
              </div>
              <div className="col-span-1">
                <SubTotalPrice totalPrice={totalPrice} cartProducts={price} />
              </div>
            </div>
          ) : (
            <div className="min-h-[calc(100vh-820px)] h-[60vh] flex flex-col justify-center gap-y-10 items-center">
              <h4 className="text-4xl font-bold">There are 0 products in your cart</h4>
              <h4>
                <button
                  onClick={() => window.history.back()}
                  className="btn btn-primary text-neutral"
                >
                  Return to Back Page
                </button>
              </h4>
            </div>
          )}
        </section>
        <Newsletters />
      </main>
      <Footer />
    </>
  );
};

export default ViewCart;
