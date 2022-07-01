import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiRefresh, BiSearchAlt } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import { MdAddShoppingCart, MdGridView } from "react-icons/md";
import { useQuery } from "react-query";
import axiosPrivet from "../../../../Hooks/axiosPrivet";
import HartIcon from "../../../../Share/HartIcon";
import Loading from "../../../../Share/Loading/Loading";
import Rating from "../../../../Share/Rating/Rating";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import Pagination from "../../../Pagination/Pagination";
import DashboardFilterSidebar from "../../DashboardFilterSidebar/DashboardFilterSidebar";

const AllProducts = () => {
  const [hoveredCart, setHoveredCart] = useState("");
  const [showModal, setShowModal] = useState("");

  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/all-user", name: "all-user" },
  ];

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("dashboardProducts", () => axiosPrivet.get("/all-products"));

  if (isLoading) {
    return <Loading />;
  }

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };

  console.log(products);

  return (
    <div className="p-10 w-full">
      <div className="flex justify-between pb-4">
        <h4 className="uppercase text-[1.4vw]   text-neutral font-bold">all Products</h4>
        <div>
          <div class="text-sm breadcrumbs">
            <Breadcrumb crumbs={crumbs} />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3 w-full">
          <div className="lg:sticky top-0 ">
            <DashboardFilterSidebar />
          </div>
        </div>
        <div className=" lg:col-span-9">
          <div className="flex justify-between px-5">
            <div>
              <form action="">
                <label class={`relative w-[384px]  md:block max-w-sm hidden `}>
                  <button
                    type="submit"
                    class="absolute inset-y-0 right-2 rounded pr-1  flex items-center pl-2"
                  >
                    <BiSearchAlt className="text-2xl text-gray-400" />
                  </button>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-base-200 w-full  py-2 pl-6  pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full h-12 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="text"
                    name="search"
                  />
                </label>
              </form>
            </div>
            <div className="flex justify-center items-center gap-5">
              <MdGridView className="cursor-pointer" />
              <FaList className="cursor-pointer" />
            </div>
          </div>

          <div className="my-10 ">
            <div className="grid lg:grid-cols-3 xl:grid-cols-4  sm:grid-cols-2 grid-cols-1  gap-8">
              {products.data.map((item) => (
                <div
                  onMouseEnter={showCartHandler}
                  onMouseLeave={hideCartHandler}
                  key={item?._id}
                  class="card bg-neutral lg:max-w-[260px] xl:max-w-sm hover:z-10 w-full mx-auto  hover:shadow-xl hover:border hover:border-gray-300 scale-100 hover:scale-110 ease-in duration-200 "
                >
                  <figure className="relative ">
                    <div
                      class={` badge rounded-full bg-red-500 text-neutral capitalize absolute top-3 left-3 ${
                        !item?.offer && "hidden"
                      }`}
                    >
                      {item?.offer}%
                    </div>

                    <div
                      class={`badge badge-outline hover:bg-primary hover:text-neutral badge-primary  capitalize absolute top-3 right-3 ${
                        !item?.badge && "hidden"
                      }`}
                    >
                      {item?.badge}
                    </div>
                    <img className="w-full h-auto" src={item?.images?.ImageURL1} alt="Shoes" />
                  </figure>

                  <div class="card-body p-4 pt-6 gap-1 relative">
                    <div className={`absolute z-10 top-[-20px] right-1 w-full ${hoveredCart}`}>
                      <div className="flex justify-center items-center ">
                        <span
                          onClick={setShowModal}
                          className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary  p-2 rounded-full"
                        >
                          <AiFillEye />
                        </span>
                        <span className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary p-2 rounded-full">
                          <BiRefresh />
                        </span>
                        <span className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary p-2 rounded-full">
                          <HartIcon />
                        </span>
                      </div>
                    </div>
                    <h2 class="card-title text-primary text-sm">{item?.productName}</h2>
                    <div className="flex items-center gap-2 justify-start">
                      <Rating />
                      <span>{item?.review}</span>
                    </div>
                    <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
                      <li>{item?.features?.processor}</li>
                      <li>{item?.features?.memory}</li>
                      <li>{item?.features?.storage}</li>
                    </div>
                    <div className=" relative">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <span className="text-red-500 text-lg font-bold">${item?.price}</span>
                          <span className="text-gray-500 line-through text-sm">
                            ${item?.previousPrice}
                          </span>
                        </div>
                        <div>
                          <span className="rounded-full px-2 py-2 text-primary  hover:bg-primary hover:text-neutral inline-block bg-gray-300">
                            <MdAddShoppingCart />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
