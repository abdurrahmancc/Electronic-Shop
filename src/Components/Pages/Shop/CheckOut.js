import React from "react";
import Breadcrumb from "../../Dashboard/Breadcrumb/Breadcrumb";
import useProducts from "../../Hooks/useProducts";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
import TopNavbar from "../../Share/Navbar/TopNavbar";
import Newsletters from "../Home/Home/Newsletters/Newsletters";
import { useForm } from "react-hook-form";
import BillingDetailsForm from "./BillingDetailsForm";
import axiosPrivet from "../../Hooks/axiosPrivet";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import CheckoutTable from "./CheckoutTable";
import { useEffect } from "react";
import { useState } from "react";

const CheckOut = () => {
  const [cartProducts, setCartProducts] = useProducts();
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const crumbs = [
    { path: "home", name: "Home" },
    { path: "checkout", name: "Checkout" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  // const { data, isLoading } = useQuery("cartProduct", () =>
  //   axiosPrivet.get(`product-details/${id}`)
  // );

  useEffect(() => {
    (async () => {
      if (id) {
        const { data } = await axiosPrivet.get(`product-details/${id}`);
        setProduct([data]);
      }
    })();
  }, [id]);
  console.log(product);
  const onSubmit = async (data) => {};
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 grid-cols-1  gap-5">
              <div>
                <h5 className="bg-gray-700 text-lg font-bold pl-5 py-2 text-neutral">
                  BILLING DETAILS
                </h5>
                <div className="mt-10">
                  <BillingDetailsForm register={register} errors={errors} />
                </div>
              </div>
              <div>
                <h5 className="bg-gray-700  text-lg font-bold pl-5 py-2 text-neutral">
                  YOUR ORDER
                </h5>
                <div className="mt-10">
                  {id ? (
                    <CheckoutTable cartProducts={product} />
                  ) : (
                    <CheckoutTable cartProducts={cartProducts} />
                  )}
                </div>
              </div>
            </div>
          </form>
        </section>
        <Newsletters />
      </main>
      <Footer />
    </>
  );
};

export default CheckOut;
