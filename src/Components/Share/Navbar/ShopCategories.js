import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavAllCategory from "./NavAllCategory";
import "./ShopCategories.css";

const ShopCategories = ({ categoryDown }) => {
  const route = ["kjl", "kjlklk", "jljl"];
  const [hoveredCart, setHoveredCart] = useState("");
  const { pathname } = useLocation();
  console.log(pathname);

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };
  return (
    <div id="shopCategories">
      <Collapsible
        className="w-full "
        open={pathname.includes("home") || (pathname === "/" && true)}
        trigger={["All categories", <BsChevronDown />]}
      >
        <ul
          className={`menu bg-base-100 w-full shadow-lg border-primary mb-1 relative border-[2px] top-1  ease-in-out duration-500 border-t-0 rounded-b-xl font-bold`}
        >
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/computer"}>Computer</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/laptop"}>Laptop</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/monitor"}>monitor</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/phone"}>Phone</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/headphone"}>Headphone</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/speaker"}>speaker</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/watch"}>Watch</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/refrigerator"}>refrigerator</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <Link to={"/categories/AC"}>AC</Link>
          </li>
          <li className="hover:bg-primary border-b border-gray-200 hover:text-neutral capitalize">
            <a className="">More Category</a>
          </li>
        </ul>
      </Collapsible>
    </div>
  );
};

export default ShopCategories;
