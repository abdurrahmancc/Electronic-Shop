import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import Loading from "../../../Share/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0Wy7JukytloPq3tBQgU5bh3thMtApZQDehJIejKVo60xbaIx5iwp9a1KLgG7JvuBDOLFin37UH3AdZlN4PTGx200T0fwpVJV"
);

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["orderInfo", id], () => axiosPrivet.get(`order/${id}`));

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="hero min-h-[70vh]">
        <div class="hero-content flex-col">
          <div class="card w-96 bg-base-100 paymentCard">
            <div class="card-body">
              <h2 class="card-title text-success ">
                Hello, {data?.data?.firstName} {data?.data?.lastName}
              </h2>
              <p className="text-lg font-bold">please pay: ${data?.data?.totalPrice}</p>
            </div>
          </div>
          <div class="card w-96 bg-base-100 paymentCard">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  price={data?.data?.totalPrice}
                  userEmail={data?.data?.userEmail}
                  firstName={data?.data?.firstName}
                  id={data?.data?._id}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
