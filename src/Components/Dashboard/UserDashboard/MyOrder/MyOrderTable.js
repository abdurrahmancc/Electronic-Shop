import React from "react";
import { BsInfoCircleFill, BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDetails } from "react-icons/md";
import MyOrderDetailsModal from "./MyOrderDetailsModal";

const MyOrderTable = ({ order, index, setMyOrderModal }) => {
  return (
    <>
      <tr className="hover rounded-none ">
        <th>{index + 1}</th>
        <td>
          <span title={order?._id}>{order?._id.slice(0, 10)}...</span>
        </td>
        <td>{order?.timeDate}</td>
        <td>${order?.totalPrice}</td>
        <td className=" ">
          <span className=" btn   px-3 font-normal btn-primary text-neutral rounded-full btn-xs capitalize">
            Pay Now{" "}
          </span>
        </td>

        <td>
          <label for="myOrderDetails" class="cursor-pointer">
            <BsInfoCircleFill
              onClick={() => setMyOrderModal(order?.orderInfo)}
              title="Details"
              className="text-xl mx-auto"
            />
          </label>
        </td>
      </tr>
    </>
  );
};

export default MyOrderTable;
