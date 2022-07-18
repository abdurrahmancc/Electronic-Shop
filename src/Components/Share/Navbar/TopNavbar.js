import React from "react";
import logo from "../../../assets/logo.png";
import Themes from "./Themes";
import { FaUserAlt } from "react-icons/fa";
import { MdAddShoppingCart, MdDarkMode, MdLocationOn } from "react-icons/md";
import { BiNotepad, BiHeart } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsSuitHeart } from "react-icons/bs";
import useProducts from "../../Hooks/useProducts";
import { useState } from "react";
import { useEffect } from "react";
import { getShoppingId } from "../../LocalStorage/FakeDB";

const TopNavbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [cartProducts, setCartProducts] = useProducts();
  const [cartQuantity, setCartQuantity] = useState(0);
  const navigate = useNavigate();
  const storedCart = getShoppingId();

  useEffect(() => {
    const keys = Object.keys(storedCart);
    setCartQuantity(keys.length);
  }, [storedCart]);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  // console.log(user);
  return (
    <div className="hidden lg:block z-20 relative ">
      <div className="navbar  py-4">
        <div className="container mx-auto">
          <div className="navbar-start">
            <img src={logo} className="w-20" alt="" />
          </div>
          <div className="navbar-center  rounded bg-[white] w-screen max-w-[700px] hidden lg:flex">
            <div className="w-full  border rounded border-primary">
              <form action="" className="flex justify-center w-full relative px-4 ">
                <div className="inline-block  mt-1 ml-[-10px] max-w-[190px]  relative w-full">
                  <ul className="menu menu-horizontal">
                    <li tabIndex="0" className="bg-white hover:rounded-none active:bg-white">
                      <span className="bg-white text-black active:bg-white w-[250px]">
                        All Categories
                        <svg
                          className="fill-current relative left-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </span>
                      <ul className="bg-white z-10 shadow-lg w-[200px] ml-[-6px]  ">
                        <li className="hover:bg-primary w-full hover:text-neutral">
                          <span className="py-1">computer</span>
                        </li>
                        <li className="hover:bg-primary w-full hover:text-neutral">
                          <span className="py-1">Laptop</span>
                        </li>
                        <li className="hover:bg-primary w-full hover:text-neutral">
                          <span className="py-1">monitor</span>
                        </li>
                        <li className="hover:bg-primary w-full hover:text-neutral">
                          <span className="py-1">Phone</span>
                        </li>
                        <li className="hover:bg-primary w-full hover:text-neutral">
                          <span className="py-1">Headphone</span>
                        </li>
                        <li className="hover:bg-primary w-full hover:text-neutral">
                          <span className="py-1">speaker</span>
                        </li>
                        <li className="hover:bg-primary w-full hover:text-neutral">
                          <span className="py-1">Watch</span>
                        </li>
                        <li className="hover:bg-primary w-full hover:text-neutral">
                          <span className="py-1">refrigerator</span>
                        </li>
                        <li className="hover:bg-primary w-full hover:text-neutral">
                          <span className="py-1">AC</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className=" border-r  h-6 my-auto z-20 border-[#070707] "></div>
                <label className="relative block w-full">
                  <span className="sr-only">Search</span>
                  <button
                    type="submit"
                    className="absolute  inset-y-0 right-0 rounded pr-1  flex items-center pl-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-full text-gray-400"
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
                  </button>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-12   rounded-md py-2 pl-6 pr-9 shadow-sm focus:outline-none focus:border-0  focus:ring-0 sm:text-sm"
                    placeholder="Search for items..."
                    type="text"
                    name="search"
                  />
                </label>
              </form>
            </div>
          </div>
          <div className="navbar-end text-accent flex items-center xl:gap-8 lg:gap-4 justify-end">
            <div className="indicator">
              <p className="indicator-item badge badge-primary text-white  w-4 h-5">1</p>
              <span>
                <BsSuitHeart className="text-2xl" />
              </span>
            </div>

            <div onClick={() => navigate("/view-cart")} className="indicator cursor-pointer">
              <p className="indicator-item badge badge-primary text-white  w-4 h-5">
                {cartQuantity}
              </p>
              <span>
                <HiOutlineShoppingCart className="text-2xl " />
              </span>
            </div>

            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex="0" className="btn m-1">
                <FaUserAlt className="text-2xl " />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
                  <NavLink to={"/admin-dashboard"}>
                    <span className="text-sm  ">
                      <AiFillSetting />
                    </span>{" "}
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className="hover:text-primary ">
                  <div className="flex justify-items-center">
                    <span className="text-sm  ">
                      <MdDarkMode />
                    </span>
                    <span>DarkMode</span>
                    <Themes></Themes>
                  </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
