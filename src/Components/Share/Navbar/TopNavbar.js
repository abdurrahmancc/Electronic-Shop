import React from "react";
import logo from "../../../assets/logo.png";
import Themes from "./Themes";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import hart from "../../../assets/heart.svg";
import { MdLocationOn } from "react-icons/md";
import { BiNotepad, BiHeart } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase";
import { signOut } from "firebase/auth";

const TopNavbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  console.log(user);
  return (
    <div className="hidden lg:block z-20 relative ">
      <div class="navbar  py-4">
        <div className="container mx-auto">
          <div class="navbar-start">
            <img src={logo} className="w-20" alt="" />
          </div>
          <div class="navbar-center  rounded bg-[white] w-screen max-w-[700px] hidden  lg:flex">
            <div className="w-full  border rounded border-primary">
              <form action="" className="flex justify-center w-full relative px-4 ">
                <div class="inline-block  mt-1 ml-[-10px] max-w-[190px]  relative w-full">
                  <ul class="menu menu-horizontal">
                    <li tabindex="0" className="bg-white hover:rounded-none active:bg-white">
                      <span className="bg-white text-black active:bg-white w-[250px]">
                        All Categories
                        <svg
                          class="fill-current relative left-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </span>
                      <ul className="bg-white z-10 shadow-lg w-[200px] ml-[-6px] max-h-[200px] ">
                        <li className="hover:bg-primary w-full">
                          <span className="py-1">Submenu 1</span>
                        </li>
                        <li className="hover:bg-primary w-full">
                          <span className="py-1">Submenu 1</span>
                        </li>
                        <li className="hover:bg-primary w-full">
                          <span className="py-1">Submenu 1</span>
                        </li>
                        <li className="hover:bg-primary w-full">
                          <span className="py-1">Submenu 1</span>
                        </li>
                        <li className="hover:bg-primary w-full">
                          <span className="py-1">Submenu 1</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className=" border-r  h-6 my-auto z-20 border-[#070707] "></div>
                <label class="relative block w-full">
                  <span class="sr-only">Search</span>
                  <button
                    type="submit"
                    class="absolute  inset-y-0 right-0 rounded pr-1  flex items-center pl-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-full text-gray-400"
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
                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-12   rounded-md py-2 pl-6 pr-9 shadow-sm focus:outline-none focus:border-0  focus:ring-0 sm:text-sm"
                    placeholder="Search for items..."
                    type="text"
                    name="search"
                  />
                </label>
              </form>
            </div>
          </div>
          <div class="navbar-end text-accent flex items-center xl:gap-8 lg:gap-4 justify-end">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>

            <div class="dropdown dropdown-hover dropdown-end">
              <label tabindex="0" class="btn m-1">
                <FaUserAlt className="text-2xl " />
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="hover:text-primary">
                  <Link to={"/user-dashboard/my-account"}>
                    <FaUserAlt className="text-sm " />
                    <span> My Account</span>
                  </Link>
                </li>
                <li className="hover:text-primary">
                  <a>
                    <span className="text-sm ">
                      <MdLocationOn />
                    </span>
                    <span>Order Tracking</span>
                  </a>
                </li>
                <li className="hover:text-primary">
                  <a>
                    <span className="text-sm ">
                      <BiNotepad />
                    </span>{" "}
                    <span>My Voucher</span>
                  </a>
                </li>
                <li className="hover:text-primary">
                  <a>
                    <span className="text-sm  ">
                      <BiHeart />
                    </span>{" "}
                    <span>My Wishlist</span>
                  </a>
                </li>
                <li className="hover:text-primary">
                  <a>
                    <span className="text-sm  ">
                      <AiFillSetting />
                    </span>{" "}
                    <span>Setting</span>
                  </a>
                </li>
                <li className="hover:text-primary">
                  {user ? (
                    <span onClick={() => handleSignOut()}>
                      <span className="text-sm  ">
                        <FiLogOut />
                      </span>{" "}
                      <span>Sign out</span>
                    </span>
                  ) : (
                    <NavLink to={"/login"}>
                      <span className="text-sm  ">
                        <FiLogIn />
                      </span>{" "}
                      <span>Sign In</span>
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
            <Themes></Themes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
