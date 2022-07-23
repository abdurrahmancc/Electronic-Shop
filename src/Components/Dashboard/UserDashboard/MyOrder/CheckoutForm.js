import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { async } from "@firebase/util";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import { format } from "date-fns";

const CheckoutForm = ({ price, userEmail, firstName }) => {
  const [fullDate] = useState(new Date());
  const formattedDate = format(fullDate, "PP");
  const timeDate = format(fullDate, "MMMM d, yyyy h:mm aa");
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.post("create-payment-intent", { price: price });
      if (data.clientSecret) {
        setClientSecret(data?.clientSecret);
      }
    })();
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error?.message);
      console.log(error);
    } else {
      setCardError(" ");
    }
    setSuccess("");
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: userEmail,
          name: firstName,
          //   formattedDate: formattedDate,
          //   timeDate: timeDate,
        },
      },
    });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError(" ");
      setTransactionId(paymentIntent?.id);
      console.log(paymentIntent);
      setSuccess("Congrats! Your Payment is Success");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm text-neutral mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 label-text-alt"> {cardError}</p>}
      {success && <p className="text-success label-text-alt font-bold">{success}</p>}
    </>
  );
};

export default CheckoutForm;
