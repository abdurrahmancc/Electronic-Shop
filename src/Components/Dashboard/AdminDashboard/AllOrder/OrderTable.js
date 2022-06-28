import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDetails } from "react-icons/md";
import "./OrderTable.css";

const OrderTable = () => {
  return (
    <div className="pt-6">
      <div class="overflow-x-auto w-full pb-[6.5rem]">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
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
            <tr class="hover">
              <th>
                <label>
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                </label>
              </th>
              <td>
                <span>#abc1234</span>
              </td>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar online">
                    <div class="rounded-full w-8 h-8">
                      <img
                        src="https://i.ibb.co/WkrJssw/download-6.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-normal">Hart Hagerty</div>
                    <div class="text-xs opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>03 jun 2022</td>
              <td>$400</td>
              <td class=" ">
                <span class=" btn btn-ghost text-success px-3 font-normal bg-[#2B4A50] rounded-full btn-xs capitalize">
                  Paid{" "}
                </span>
              </td>
              <td>
                <span class="font-normal capitalize"> Visa</span>
              </td>
              <td>
                <button class="btn btn-xs capitalize text-neutral btn-primary rounded-full font-normal ">
                  view details
                </button>
              </td>
              <td>
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class=" m-1">
                    <span>
                      <BsThreeDots className="text-lg" />
                    </span>
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu border top-10 border-gray-700 rounded-sm shadow bg-base-100  w-40"
                  >
                    <li>
                      <div class="">
                        <span>
                          <FiEdit className="text-success" />
                        </span>
                        <span>Edit</span>
                      </div>
                    </li>
                    <li>
                      <div class=" ">
                        <span>
                          <MdDelete className="text-error text-lg" />
                        </span>
                        <span>Delete</span>
                      </div>
                    </li>
                    <li>
                      <div class=" ">
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
