import React, { useEffect, useState } from "react";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { CgLogOff } from "react-icons/cg";
import DashboardThemes from "../../../Share/Navbar/DashboardThemes";

const AdminDashboardNavbar = ({
  toggleSideBar,
  setToggleSideBar,
  hiddenDrawer,
  setHiddenDrawer,
}) => {
  return (
    <div class="navbar bg-base-200">
      <div class="navbar-start">
        <label for="hidden-drawer" class={`drawer-button ${hiddenDrawer || "hidden"}`}>
          <svg
            onClick={() => setHiddenDrawer(!hiddenDrawer)}
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
        <label for="my-drawer-2" class=" drawer-button lg:hidden">
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
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <label class="relative block max-w-xs">
          <span class="sr-only">Search</span>
          <button
            type="submit"
            class="absolute  inset-y-0 right-2 rounded pr-1  flex items-center pl-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-full text-gray-400"
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
          </button>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-base-100 w-full  py-2 pl-6 pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full  focus:ring-0 sm:text-sm"
            placeholder="Search..."
            type="text"
            name="search"
          />
        </label>
      </div>

      <div class="navbar-end">
        <ul class="menu menu-horizontal p-0">
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

export default AdminDashboardNavbar;
