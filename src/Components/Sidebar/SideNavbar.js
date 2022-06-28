import React, { useEffect, useState } from "react";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { CgLogOff } from "react-icons/cg";
import DashboardThemes from "../Share/Navbar/DashboardThemes";
import { FaBars } from "react-icons/fa";
import { BiSearch, BiSearchAlt } from "react-icons/bi";

const SideNavbar = ({ toggle, toggleSideBar, setToggleSideBar, setIsOpen, isOpen }) => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div class="navbar bg-base-200 px-10">
      <div class="navbar-start">
        <div
          onClick={() => setIsOpen(true)}
          class={`drawer-button lg:hidden ${isOpen && "hidden"}`}
        >
          <FaBars onClick={toggle} className="text-xl" />
        </div>
        <label class={`relative w-[250px]  md:block max-w-xs hidden `}>
          <form action="">
            <button
              type="submit"
              class="absolute inset-y-0 right-2 rounded pr-1  flex items-center pl-2"
            >
              <BiSearchAlt className="text-2xl text-gray-400" />
            </button>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-base-100 w-full  py-2 pl-6  pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full  focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="text"
              name="search"
            />
          </form>
        </label>
      </div>

      <div class="navbar-end">
        <ul class="menu menu-horizontal p-0 ">
          <li className="md:hidden">
            <div class="bg-inherit">
              <BiSearch onClick={() => setOpenSearch(!openSearch)} className="text-xl" />
              <label
                class={`absolute  w-[250px]  block max-w-xs ${
                  openSearch
                    ? "sm:right-4 sm:top-16 top-16 right-[-100px] ease-in-out duration-500"
                    : "top-[-100px] sm:right-4 right-[-100px]  ease-in-out duration-500"
                }`}
              >
                <form action="">
                  <button
                    type="submit"
                    class="absolute inset-y-0 right-2 rounded pr-1  flex items-center pl-2"
                  >
                    <BiSearch className="text-2xl text-gray-400" />
                  </button>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-neutral w-full  py-2 pl-6 h-10 pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full  focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="text"
                    name="search"
                  />
                </form>
              </label>
            </div>
          </li>
          <li className="">
            <div class="bg-inherit">
              <div class="indicator  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </div>
          </li>

          <li tabindex="0" className="">
            <div className="bg-inherit">
              <div class="avatar ">
                <div class="w-8 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-1">
                  <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
              </div>
              <div className="flex items-center">
                <span>Role</span>
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </div>
            </div>

            <ul class=" mt-2 menu bg-base-200 w-40 rounded-box">
              <li className=" ">
                <a className=" px-8">
                  <AiOutlineUser className="text-lg" />
                  profile
                </a>
              </li>
              <li className=" ">
                <a className="px-8">
                  <MdOutlineMessage className="text-lg" />
                  Message
                </a>
              </li>
              <li className="  border-t border-gray-500 ">
                <a className="px-8 ">
                  <CgLogOff className="text-lg" />
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li tabindex="0" className="">
            <div className="bg-inherit">
              <AiOutlineSetting className="text-lg animate-spin	"></AiOutlineSetting>
            </div>
            <ul class=" mt-2 menu bg-base-200 right-2 w-40 rounded-box">
              <li className="">
                <span className="px-8">
                  Themes
                  <DashboardThemes
                    toggleSideBar={toggleSideBar}
                    setToggleSideBar={setToggleSideBar}
                  />
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
