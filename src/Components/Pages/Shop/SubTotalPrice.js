import React from "react";
import { useNavigate } from "react-router-dom";

const SubTotalPrice = ({ totalPrice, cartProducts }) => {
  const navigate = useNavigate();
  let Shipping = 15;
  Shipping = cartProducts.length * Shipping;
  const tax = totalPrice * 0.05;
  let total = totalPrice + Shipping + tax;
  return (
    <div className="lg:mt-48 mt-10 w-full">
      <div className="w-full bg-base-200 px-5 py-10">
        <table className=" w-full">
          <thead>
            <tr>
              <th className="text-2xl text-start pb-5">Cart totals</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-slate-300">
              <td className="pl-5 py-2 text-lg font-bold">Subtotal</td>
              <td className="pr-5 text-lg">$ {totalPrice}</td>
            </tr>
            <tr className="border border-slate-300 ">
              <td className="pl-5 py-2 text-lg font-bold">Shipping</td>
              <td className="pr-5 text-lg">$ {Shipping}</td>
            </tr>
            <tr className="border border-slate-300 ">
              <td className="pl-5 py-2 text-lg font-bold">VAT 5%</td>
              <td className="pr-5 text-lg">$ {tax.toFixed(2)}</td>
            </tr>
            <tr className="border border-slate-300 ">
              <td className="pl-5 py-2 text-2xl font-bold">Total</td>
              <td className="pr-5 text-lg font-bold">$ {total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-5">
          <button
            onClick={() => navigate(`/checkout`)}
            className="btn btn-primary w-full text-neutral"
          >
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubTotalPrice;
