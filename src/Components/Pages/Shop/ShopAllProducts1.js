import React, { useContext, useState } from "react";
import axiosPrivet from "../../Hooks/axiosPrivet";
import ScrollBtn from "../../Share/ScrollBtn/ScrollBtn";
import { useEffect } from "react";
import { shopAllProducts } from "./Shop";
import ShopAllProductsCard1 from "./ShopAllProductsCard1";
import useAddProduct from "../../Hooks/useAddProduct";

const ShopAllProducts1 = () => {
  const [pageCount, setPageCount] = useState(0);
  const [handleAddToCartProduct] = useAddProduct();
  const [products, , setReload, page, setPage, size] = useContext(shopAllProducts);

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.get("counter");
      const count = data.count;
      const pages = Math.ceil(count / size);
      setPageCount(pages);
    })();
  }, [size]);

  // console.log(products);
  return (
    <>
      {products.length ? (
        <div className="grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-8">
          {products.map((item) => (
            <ShopAllProductsCard1
              key={item?._id}
              item={item}
              handleAddToCartProduct={handleAddToCartProduct}
            />
          ))}
        </div>
      ) : (
        <div>
          <h5 className="text-center">No Data Found</h5>
        </div>
      )}

      <div className={`flex justify-center mt-10 `}>
        {[...Array(pageCount).keys()].map((number, index) => (
          <button
            key={index}
            className={`btn border rounded-none border-primary ${page === number && "bg-primary"}`}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
      <ScrollBtn />
    </>
  );
};

export default ShopAllProducts1;
