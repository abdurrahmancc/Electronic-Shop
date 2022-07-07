import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Rating from "../../../../Share/Rating/Rating";

const PhoneSideSaleCard = ({ product }) => {
  return (
    <div className="card card-side w-full max-w-xs md:max-w-sm lg:max-w-xs shadow-xl lg:shadow  border border-gray-200  bg-base-100 ">
      <figure>
        <img className="lg:w-24 w-36 lg:pl-3  lg:p-4" src={product?.img} alt="Album" />
      </figure>
      <div className="card-body p-3">
        <h4 className="text-primary text-sm font-bold">{product?.title}</h4>
        <span>
          <Rating />
        </span>
        <div className="flex justify-between gap-4 items-center">
          <div className="flex justify-start items-center gap-1">
            <span className="text-red-500 text-lg font-bold">${product?.currentPrice}</span>
            <span className="text-gray-500 line-through text-sm">${product?.previousPrice}</span>
          </div>
          <div>
            <span className="rounded-full px-2 py-2 hover:bg-primary hover:text-neutral inline-block bg-gray-300">
              <MdAddShoppingCart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSideSaleCard;
