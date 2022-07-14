import React, { createContext, useEffect, useState } from "react";
import Breadcrumb from "../../Dashboard/Breadcrumb/Breadcrumb";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
import { useForm } from "react-hook-form";
import TopNavbar from "../../Share/Navbar/TopNavbar";
import FreeOnlineMoney from "../Home/Home/FreeOnlineMoney";
import Newsletters from "../Home/Home/Newsletters/Newsletters";
import Loading from "../../Share/Loading/Loading";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { MdGridView } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import CategoryFilter from "./CategoryFilter";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { async } from "@firebase/util";
export const CategoriesProducts = createContext("categories");

const Categories = () => {
  const [hoveredCart, setHoveredCart] = useState("");
  const [showModal, setShowModal] = useState("");
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState("");
  const [error, setError] = useState("");
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(90000);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const { category } = useParams();

  const [categories, setCategories] = useState([
    { id: 1, checked: false, label: "phone" },
    { id: 4, checked: false, label: "laptop" },
    { id: 2, checked: false, label: "computer" },
    { id: 3, checked: false, label: "watch" },
    { id: 6, checked: false, label: "speaker" },
    { id: 7, checked: false, label: "headphone" },
    { id: 8, checked: false, label: "AC" },
    { id: 9, checked: false, label: "refrigerator" },
    { id: 10, checked: false, label: "monitor" },
  ]);
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const inputSearch = watch("search");

  const crumbs = [
    { path: "home", name: "home" },
    { path: `categories/${category}`, name: category, disabled: "disabled" },
  ];

  const { data, isLoading, isError } = useQuery(
    ["filterCategory", reload, page, size, category],
    async () => await axiosPrivet.get(`/categories/${category}/?page=${page}&size=${size}`)
  );

  // filter products
  const applyFilters = () => {
    if (isLoading) {
      return <Loading />;
    }
    let filterAllProducts = data?.data;
    let priceFilter;

    // Search Filter
    if (inputSearch) {
      filterAllProducts = data?.data.filter(
        (item) => item?.productName.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1
      );
    }

    // filter price
    if (minPrice !== 100 || maxPrice !== 90000) {
      priceFilter = filterAllProducts.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );

      if (priceFilter.length) {
        filterAllProducts = priceFilter;
      }
    }
    setProducts(filterAllProducts);
  };

  const onSubmit = (data) => {};

  useEffect(() => {
    applyFilters();
  }, [minPrice, maxPrice, inputSearch, data?.data]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    toast.error(isError?.message);
  }
  // console.log(data);
  // console.log("fsdf", products);
  return (
    <>
      <div className="">
        <TopNavbar />
        <Navbar />
      </div>
      <section className=" bg-slate-100 py-2 mb-6">
        <div className="container mx-auto">
          <div className="text-sm breadcrumbs">
            <Breadcrumb crumbs={crumbs} />
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <CategoriesProducts.Provider value={[products, setProducts, setReload, page, setPage]}>
          <div className=" w-full">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3 w-full">
                <div className="lg:sticky top-0 ">
                  <CategoryFilter
                    categories={categories}
                    set_minValue={setMinPrice}
                    minValue={minPrice}
                    set_maxValue={setMaxPrice}
                    maxValue={maxPrice}
                  />
                </div>
              </div>
              <div className=" lg:col-span-9">
                <div className="flex sm:justify-between justify-center px-5 bg-base-200">
                  <div className="max-w-xs w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <label className={`relative   `}>
                        <button
                          type="submit"
                          className="absolute inset-y-0 left-2 rounded pr-1  flex items-center pl-2"
                        >
                          <BiSearchAlt className="text-2xl text-gray-400" />
                        </button>
                        <button
                          onClick={() => resetField("search")}
                          className={`absolute  inset-y-0 right-2 rounded pr-1  flex items-center pl-2 ${
                            inputSearch ? "block" : "hidden"
                          }`}
                        >
                          <IoIosClose className="text-2xl text-gray-400" />
                        </button>
                        <input
                          value={inputSearch}
                          // onChange={(e) => setInputSearch(e.target.value)}
                          className="placeholder:italic w-full placeholder:text-slate-400 block bg-base-200   py-2 pl-12  pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full h-12 focus:ring-0 sm:text-sm"
                          placeholder="Search..."
                          type="text"
                          name="search"
                          {...register("search")}
                        />
                      </label>
                    </form>
                    {error && <p className="ml-4 mt-2">{error}</p>}
                  </div>
                  <div className="sm:flex justify-center items-center gap-5 hidden ">
                    <div>
                      <span>Show: </span>
                      <select
                        onClick={(e) => setSize(e.target.value)}
                        className="border-primary border py-1"
                      >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20" selected>
                          20
                        </option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                      </select>
                    </div>
                    <NavLink to="1">
                      <MdGridView className="cursor-pointer text-lg" />
                    </NavLink>
                    <NavLink to="2">
                      <FaList className="cursor-pointer text-lg" />
                    </NavLink>
                  </div>
                </div>
                <div className="my-10 ">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </CategoriesProducts.Provider>
      </div>
      <section className="pt-5 container mx-auto">
        <FreeOnlineMoney />
      </section>
      <Newsletters />
      <Footer />
    </>
  );
};

export default Categories;
