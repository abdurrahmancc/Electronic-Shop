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
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import CheckoutTable from "./CheckoutTable";
import { useEffect } from "react";
import { useState } from "react";
import { format } from "date-fns";
import auth from "../../Share/Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Share/Loading/Loading";
import { toast } from "react-hot-toast";

const CheckOut = () => {
  const [cartProducts, setCartProducts] = useProducts();
  const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const [fullDate] = useState(new Date());
  const [iError, setIError] = useState("");
  const timeDate = format(fullDate, "MMMM d, yyyy h:mm aa");
  const date = format(fullDate, "MMMM d, yyyy");
  const formattedDate = format(fullDate, "PP");
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    (async () => {
      if (id) {
        const { data } = await axiosPrivet.get(`product-details/${id}`);
        if (id) {
          const search = window.location.search;
          const params = new URLSearchParams(search);
          const info = params.get("info");
          data.quantity = info;
        }
        setProduct([data]);
      }
    })();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  let totalPrice;
  let Shipping = 15;
  if (!id) {
    const price = cartProducts.map((product) => product.price * product.quantity);
    const initialValue = 0;
    if (price?.length >= 1) {
      const sumReduce = price.reduce((previous, current) => previous + current, initialValue);
      totalPrice = sumReduce;
      Shipping = cartProducts.length * Shipping;
    }
  } else {
    totalPrice = product[0]?.price;
    Shipping = product.length * Shipping;
  }

  const tax = totalPrice * 0.05;
  let total = parseFloat(totalPrice) + Shipping + tax;

  const onSubmit = async (data) => {
    let itemInfo;
    if (id) {
      itemInfo = product;
    } else {
      itemInfo = cartProducts;
    }

    data.date = date;
    data.timeDate = timeDate;
    data.userEmail = user?.email;
    data.photoURL = user?.photoURL;
    data.dateAndCountry = fullDate;
    data.formattedDate = formattedDate;
    data.orderInfo = itemInfo;
    data.totalPrice = total;

    if (itemInfo) {
      try {
        const { data: result } = await axiosPrivet.post("order", data);
        if (result?.acknowledged) {
          toast.success("success", { id: "successOrder" });
          navigate("/user-dashboard/my-order");
          reset();
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

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
                    <CheckoutTable cartProducts={product} onSubmit={onSubmit} />
                  ) : (
                    <CheckoutTable cartProducts={cartProducts} onSubmit={onSubmit} />
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
