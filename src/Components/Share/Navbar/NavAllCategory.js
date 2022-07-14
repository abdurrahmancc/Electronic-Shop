import React from "react";
import { FaAngleRight } from "react-icons/fa";

const NavAllCategory = ({ categoryDown }) => {
  return (
    <ul
      className={`menu bg-base-100 w-full shadow-lg border-primary relative border-[2px]  ease-in-out duration-500 border-t-0 rounded-b-xl font-bold`}
    >
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a>computer</a>
      </li>
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a>Laptop</a>
      </li>
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a>monitor</a>
      </li>
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a>Phone</a>
      </li>
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a>Headphone</a>
      </li>
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a>speaker</a>
      </li>
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a>Watch</a>
      </li>
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a>refrigerator</a>
      </li>
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a>AC</a>
      </li>
      <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
        <a className="">More Category</a>
      </li>
    </ul>
  );
};

export default NavAllCategory;
