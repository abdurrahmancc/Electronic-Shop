import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Rating from "../../../../Share/Rating/Rating";

const TrendingProductsCard = ({ trendProducts }) => {
  let products = trendProducts;
  products.length = 6;
  return (
    <>
      <div className="grid lg:grid-rows-4 md:grid-cols-2 lg:grid-cols-none justify-items-center gap-5">
        {products &&
          products.map((product) => (
            <div
              key={product?._id}
              className="card card-side w-full max-w-xs md:max-w-sm lg:max-w-xs shadow-xl lg:shadow  border border-gray-200  bg-base-100 "
            >
              <figure>
                <img
                  className="lg:w-24 w-36 lg:pl-3  lg:p-4"
                  src={product?.images?.ImageURL1}
                  alt="Album"
                />
              </figure>
              <div className="card-body p-3">
                <h4 className="text-primary text-sm font-bold">{product?.productName}</h4>
                <div className="flex items-center gap-2 justify-start">
                  <Rating />
                  <span>{product?.review ? product?.review : "1"}</span>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <div className="flex justify-start items-center gap-1">
                    <span className="text-red-500 text-lg font-bold">${product?.price}</span>
                    {product?.previousPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        ${product?.previousPrice}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="rounded-full px-2 py-2 hover:bg-primary hover:text-neutral inline-block bg-gray-300">
                      <Link to={`/item-details/${product?._id}`}>
                        <MdAddShoppingCart />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TrendingProductsCard;
