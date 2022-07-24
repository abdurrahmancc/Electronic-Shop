import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";
import { MdDetails } from "react-icons/md";
import { useQuery } from "react-query";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import auth from "../../../Share/Firebase/Firebase";
import Loading from "../../../Share/Loading/Loading";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import Pagination from "../../Pagination/Pagination";
import MyOrderDetailsModal from "./MyOrderDetailsModal";
import MyOrderTable from "./MyOrderTable";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const [myOrderModal, setMyOrderModal] = useState(null);

  const { data, isLoading } = useQuery("userOrders", () =>
    axiosPrivet.get(`userOrder/${user?.email}`)
  );

  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data?.data.length >= 1 ? (
        <div className="mt-3 m-5  orderTable">
          <div className="flex justify-between border-b px-10 py-5">
            <h4 className="uppercase text-[1vw]  font-bold">My Orders</h4>
          </div>
          <div className="bg-base-100 p-10">
            <div className="overflow-x-auto border w-full">
              <table className="table w-full">
                {/* <!-- head --> */}
                <thead className="bg-gray-300">
                  <tr className="">
                    <th>#</th>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Payment </th>
                    <th>Status</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody id="order_Table_Row" className="cursor-pointer rounded-none">
                  {data?.data.map((order, index) => (
                    <MyOrderTable
                      key={order?._id}
                      order={order}
                      index={index}
                      setMyOrderModal={setMyOrderModal}
                    />
                  ))}
                </tbody>
                {/* <!-- foot --> */}
              </table>
              {myOrderModal && <MyOrderDetailsModal myOrderModal={myOrderModal} />}
            </div>

            {/* <div className="flex justify-center w-full relative top-[-40px]">
          <Pagination />
        </div> */}
          </div>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-820px)] h-[60vh] flex flex-col justify-center gap-y-10 items-center">
          <h4 className="text-4xl font-bold">There are no order</h4>
          <h4>
            <button onClick={() => window.history.back()} className="btn btn-primary text-neutral">
              Return to Back Page
            </button>
          </h4>
        </div>
      )}
    </>
  );
};

export default MyOrder;
