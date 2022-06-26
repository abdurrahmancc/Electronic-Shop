import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ToggleSideBarContext } from "../../../App";
import logo from "../../../assets/logo.png";
import NavAllCategory from "./NavAllCategory";
import Themes from "./Themes";
import { HiXCircle } from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase";

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
      <NavLink to={"/home"} className=" text-lg  text-secondary">
        Home
      </NavLink>
      <NavLink to={"/shop"} className="text-lg text-secondary">
        Shop
      </NavLink>
      <NavLink to={"/mega-menu"} className="text-lg text-secondary">
        Mega menu
      </NavLink>
      <NavLink to={"/blog"} className="text-lg  text-secondary">
        Blog
      </NavLink>
      <NavLink to={"/pages"} className="text-lg text-secondary">
        Pages
      </NavLink>
      <NavLink to={"/user-dashboard"} className="text-lg text-secondary lg:hidden">
        Account
      </NavLink>
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
      <div class="navbar lg:bg-primary shadow-lg">
        <div className="container mx-auto lg:relative">
          <div class="navbar-start z-50 lg:absolute lg:max-w-[200px]">
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
                  <label class="relative block w-full">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </span>
                    <input
                      class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-0 sm:text-sm"
                      placeholder="Search for items..."
                      type="text"
                      name="search"
                    />
                  </label>
                </form>
              </div>
              <ul
                tabindex="0"
                className={`menu h-full  menu-compact dropdown-content w-screen max-w-[22rem] `}
              >
                {liItems}
              </ul>
            </div>

            <div
              onClick={() => setCategoryDown(!categoryDown)}
              className={`max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] w-screen  h-16 hidden lg:block ${
                themes == "dark" ? "bg-base-300" : "bg-[#1e73be]"
              }`}
            >
              <div className="flex items-center h-full relative z-20 gap-5 px-4 ">
                <span className=" text-xl text-neutral w-full">All categories</span>
                <span className="text-neutral">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </span>
              </div>
              <NavAllCategory categoryDown={categoryDown}></NavAllCategory>
            </div>
          </div>
          <div class="navbar-end z-0 relative top-1 right-1 ">
            <div className="flex justify-end w-full">
              <label onClick={handleSidebar} tabindex="0" class="btn btn-ghost  lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <div class="navbar-center w-full justify-center hidden z-10 lg:flex">
            <ul class="menu menu-horizontal p-0 gap-10">{liItems}</ul>
          </div>
          <div class="navbar-end absolute top-1 right-1 hidden lg:block ">
            <div className="flex justify-end w-full">fsdddddd</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
