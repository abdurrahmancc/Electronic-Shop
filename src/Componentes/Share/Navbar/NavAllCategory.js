import React from "react";
import { FaAngleRight } from "react-icons/fa";

const NavAllCategory = ({ categoryDown }) => {
  return (
    <>
      <ul
        class={`menu bg-base-100   w-full shadow-lg border-primary relative border-[2px]  ease-in-out duration-500 border-t-0  rounded-b-xl ${
          categoryDown ? "top-0" : "hidden"
        }`}
      >
        <li tabindex="0" className="">
          <div className="flex justify-between hover:bg-primary border-b hover:text-neutral border-gray-300">
            <span>Computer - Laptop</span>
            <FaAngleRight />
          </div>
          <ul class=" bg-base-100 shadow border border-gray-300 ">
            <li className="hover:bg-primary  hover:text-neutral ">
              <a>Submenu 1</a>
            </li>
            <li className="hover:bg-primary  hover:text-neutral ">
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li tabindex="0" className="">
          <div className="flex justify-between border-b hover:bg-primary  hover:text-neutral border-gray-300">
            <span>Electronic</span>
            <FaAngleRight />
          </div>
          <ul class=" bg-base-100 shadow border border-gray-300 ">
            <li className="hover:bg-primary  hover:text-neutral ">
              <a>Electronic</a>
            </li>
            <li className="hover:bg-primary  hover:text-neutral ">
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li tabindex="0" className="">
          <div className="flex justify-between border-b   hover:bg-primary  hover:text-neutral border-gray-300">
            <span>Toys & Hobbies</span>
            <FaAngleRight />
          </div>
          <ul class=" bg-base-100 shadow border border-gray-300 ">
            <li className="hover:bg-primary  hover:text-neutral ">
              <a>Submenu 1</a>
            </li>
            <li className="hover:bg-primary  hover:text-neutral ">
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li className=" hover:bg-primary  hover:text-neutral ">
          <a>Sports & Outdoors</a>
        </li>
        <li className=" hover:bg-primary  hover:text-neutral ">
          <a>Smarphone & Tablets</a>
        </li>
        <li className=" hover:bg-primary  hover:text-neutral ">
          <a>Health & Beauty</a>
        </li>
        <li className="hover:bg-primary  hover:text-neutral ">
          <a>Computers & Networking</a>
        </li>
        <li className="hover:bg-primary  hover:text-neutral ">
          <a>Accessories</a>
        </li>
        <li className="hover:bg-primary  hover:text-neutral ">
          <a>Jewelry & Watches</a>
        </li>
        <li className="hover:bg-primary  hover:text-neutral ">
          <a>Flashlights & Lamps</a>
        </li>
        <li className="hover:bg-primary  hover:text-neutral ">
          <a>More Category</a>
        </li>
      </ul>
    </>
  );
};

export default NavAllCategory;
