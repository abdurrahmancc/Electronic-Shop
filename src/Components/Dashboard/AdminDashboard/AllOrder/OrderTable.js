import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDetails } from "react-icons/md";
import "./OrderTable.css";

const OrderTable = () => {
  return (
    <div className="pt-6">
      <div className="overflow-x-auto w-full pb-[6.5rem]">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox rounded-none checkbox-xs" />
                </label>
              </th>
              <th>Order ID</th>
              <th>Billing Details</th>
              <th>Date</th>
              <th>Total</th>
              <th>Payment Status</th>
              <th>Payment Method</th>
              <th>View Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="order_Table_Row" className="cursor-pointer">
            {/* <!-- row 1 --> */}
            <tr className="hover">
              <th>
                <label>
                  <input type="checkbox" className="checkbox rounded-none checkbox-xs" />
                </label>
              </th>
              <td>
                <span>#abc1234</span>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar online">
                    <div className="rounded-full w-8 h-8">
                      <img
                        src="https://i.ibb.co/WkrJssw/download-6.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-normal">Hart Hagerty</div>
                    <div className="text-xs opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>03 jun 2022</td>
              <td>$400</td>
              <td className=" ">
                <span className=" btn btn-ghost text-success px-3 font-normal bg-[#2B4A50] rounded-full btn-xs capitalize">
                  Paid{" "}
                </span>
              </td>
              <td>
                <span className="font-normal capitalize"> Visa</span>
              </td>
              <td>
                <button className="btn btn-xs capitalize text-neutral btn-primary rounded-full font-normal ">
                  view details
                </button>
              </td>
              <td>
                <div className="dropdown dropdown-end">
                  <label tabIndex="0" className=" m-1">
                    <span>
                      <BsThreeDots className="text-lg" />
                    </span>
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu border top-10 border-gray-700 rounded-sm shadow bg-base-100  w-40"
                  >
                    <li>
                      <div className="">
                        <span>
                          <FiEdit className="text-success" />
                        </span>
                        <span>Edit</span>
                      </div>
                    </li>
                    <li>
                      <div className=" ">
                        <span>
                          <MdDelete className="text-error text-lg" />
                        </span>
                        <span>Delete</span>
                      </div>
                    </li>
                    <li>
                      <div className=" ">
                        <span>
                          <MdDetails className=" text-white text-lg" />
                        </span>
                        <span>Details</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
