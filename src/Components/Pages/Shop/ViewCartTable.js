import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { deleteShoppingCart } from "../../LocalStorage/FakeDB";
import ViewCartTableRow from "./ViewCartTableRow";

const ViewCartTable = ({ cartProducts, setCartProducts, children }) => {
  const [idQuantity, setIdQuantity] = useState(0);

  const handleRemoveAll = () => {
    deleteShoppingCart();
    setCartProducts("");
  };

  return (
    <>
      <div className="mt-20 mb-8">
        <h4 className="text-4xl font-bold pb-2">Your Cart</h4>
        <div>
          <div className="flex justify-between">
            <h4 className="text-xl">
              There are <span>{cartProducts?.length}</span> products in your cart
            </h4>
            <h4 onClick={handleRemoveAll} className="text-lg font-bold cursor-pointer">
              Remove All
            </h4>
          </div>
        </div>
      </div>
      {cartProducts?.length >= 1 && (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th className="font-bold text-sm">#</th>
                <th className="font-bold text-sm">Image</th>
                <th className="font-bold text-sm">Name</th>
                <th className="font-bold text-sm">Price</th>
                <th className="font-bold text-sm">Quantity</th>
                <th className="font-bold text-sm">Subtotal</th>
                <th className="font-bold text-sm">Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {cartProducts.map((item, index) => (
                <ViewCartTableRow
                  key={item?._id}
                  item={item}
                  setCartProducts={setCartProducts}
                  index={index}
                  children={children}
                  setIdQuantity={setIdQuantity}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ViewCartTable;
