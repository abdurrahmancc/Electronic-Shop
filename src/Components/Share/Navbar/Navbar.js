import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ToggleSideBarContext } from "../../../App";
import logo from "../../../assets/logo.png";
import NavAllCategory from "./NavAllCategory";
import Themes from "./Themes";
import { HiXCircle } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase";
import ShopCategories from "./ShopCategories";

const Navbar = () => {
  const getToggleSiteBar = useContext(ToggleSideBarContext);
  const [themes, setThemes] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const { pathname } = useLocation();

  let categories;

  if (pathname.includes("dashboard")) {
    categories = false;
  } else if (!pathname.includes("dashboard")) {
    categories = true;
  }

  const [categoryDown, setCategoryDown] = useState(categories);

  const getThemes = localStorage.getItem("themes");
  useEffect(() => {
    setThemes(getThemes);
  }, [getThemes]);

  const handleSidebar = () => {
    getToggleSiteBar[1](!getToggleSiteBar[0]);
  };

  const liItems = (
    <>
      <li>
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive ? "text-lg text-neutral bg-sky-700 " : "text-lg text-neutral"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive ? "text-lg text-neutral bg-sky-700 " : "text-lg text-neutral"
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            isActive ? "text-lg text-neutral bg-sky-700 " : "text-lg text-neutral"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-lg text-neutral bg-sky-700 " : "text-lg text-neutral"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-lg text-neutral bg-sky-700 " : "text-lg text-neutral"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="lg:hidden">
        <NavLink
          to={"/user-dashboard"}
          className={({ isActive }) =>
            isActive ? "text-lg text-neutral  bg-sky-700 " : "text-lg text-neutral"
          }
        >
          Account
        </NavLink>
      </li>
      <li className="text-lg lg:hidden text-secondary flex flex-row justify-start">
        <span className="pl-0 text-lg "> Darkmode</span>
        <span>
          <Themes></Themes>
        </span>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar lg:bg-primary shadow-lg">
        <div className="container mx-auto lg:relative">
          <div className="navbar-start z-50 lg:absolute lg:max-w-[200px]">
            <div
              className={`fixed top-0 z-50  drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] px-2 bg-base-100  h-[100vh] ${
                getToggleSiteBar[0]
                  ? "left-[0rem] ease-in-out  duration-500"
                  : "left-[-23rem] ease-in-out  duration-500"
              }`}
            >
              <div className=" mb-8">
                <div className="flex justify-between px-4 mt-4 mb-16">
                  <img onClick={handleSidebar} src={logo} className="w-20" alt="" />
                  <div onClick={() => getToggleSiteBar[4]()} className="text-3xl">
                    <HiXCircle />
                  </div>
                </div>
                <form action="" className="flex justify-center relative px-4">
                  <label className="relative block w-full">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </span>
                    <input
                      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-0 sm:text-sm"
                      placeholder="Search for items..."
                      type="text"
                      name="search"
                    />
                  </label>
                </form>
              </div>
              <ul
                tabIndex="0"
                className={`menu h-full menu-compact dropdown-content w-screen max-w-[22rem] `}
              >
                {liItems}
              </ul>
            </div>
            <div
              className={`max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] w-screen   h-[68px] hidden lg:block ${
                themes == "dark" ? "bg-base-300" : "bg-[#1e73be]"
              }`}
            >
              <ShopCategories categoryDown={categoryDown}></ShopCategories>
            </div>
          </div>
          <div className="navbar-end z-0 relative top-1 right-1 ">
            <div className="flex justify-end w-full">
              <label onClick={handleSidebar} tabIndex="0" className="btn btn-ghost  lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <div className="navbar-center w-full justify-center hidden z-10 lg:flex">
            <ul className="menu menu-horizontal p-0 gap-2 ">{liItems}</ul>
          </div>
          <div className="navbar-end absolute top-1 right-1 hidden lg:block ">
            <div className="flex justify-end w-full">
              <div className="flex flex-col justify-center text-neutral">
                <span className="text-[10px] block mx-auto">Only this weekend</span>
                <span>Super Discount</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
