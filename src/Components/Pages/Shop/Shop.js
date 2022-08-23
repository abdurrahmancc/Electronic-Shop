import React, { createContext, useEffect, useState } from "react";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Navbar from "../../Share/Navbar/Navbar";
import TopNavbar from "../../Share/Navbar/TopNavbar";
import { useForm } from "react-hook-form";
import { NavLink, Outlet } from "react-router-dom";
import { MdGridView } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import DashboardFilterSidebar from "../../Dashboard/AdminDashboard/DashboardFilterSidebar/DashboardFilterSidebar";
import Breadcrumb from "../../Dashboard/Breadcrumb/Breadcrumb";

import ShopFilter from "./ShopFilter";
import Footer from "../../Share/Footer/Footer";
import Newsletters from "../Home/Home/Newsletters/Newsletters";
import FreeOnlineMoney from "../Home/Home/FreeOnlineMoney";
import Loading from "../../Share/Loading/Loading";
import ScrollBtn from "../../Share/ScrollBtn/ScrollBtn";
export const shopAllProducts = createContext("products");

const Shop = () => {
  const [hoveredCart, setHoveredCart] = useState("");
  const [showModal, setShowModal] = useState("");
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [reload, setReload] = useState(true);
  const [error, setError] = useState("");
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(90000);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  // const [inputSearch, setInputSearch] = useState("");

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
    { path: "shop", name: "shop" },
  ];

  const categoriesChecked = categories
    .filter((item) => item.checked)
    .map((item) => item.label.toLowerCase());

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivet.post(
          `/all-products/?page=${page}&size=${size}`,
          categoriesChecked
        );

        if (data) {
          setAllProducts(data);
          setProducts(data);
          setReload(true);
          console.log(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [reload, page, size, categoriesChecked.length]);

  // filter categories

  const handleChangeChecked = (id) => {
    const categoriesStateList = categories;
    const changeCheckedList = categoriesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategories(changeCheckedList);
  };

  // filter products
  const applyFilters = () => {
    let filterAllProducts = allProducts;
    let filterProducts = products;
    let priceFilter;
    let filterProduct;

    // filter categories
    const categoriesChecked = categories
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (categoriesChecked.length) {
      filterProduct = filterAllProducts.filter((item) =>
        categoriesChecked.includes(item.category.toLowerCase())
      );

      if (filterProduct.length) {
        // setProducts(filterProduct);
        filterAllProducts = filterProduct;
      }
    }

    // Search Filter
    if (inputSearch) {
      filterAllProducts = allProducts.filter(
        (item) => item?.productName.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1
      );
    }

    // filter price
    if (minPrice !== 100 || maxPrice !== 90000) {
      priceFilter = filterAllProducts.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );

      if (filterProducts.length) {
        filterAllProducts = priceFilter;
      }
    }

    setProducts(filterAllProducts);
  };

  const onSubmit = (data) => {};

  useEffect(() => {
    applyFilters();
  }, [categories, minPrice, maxPrice, inputSearch]);

  if (!products) {
    return <Loading />;
  }

  return (
    <>
      <header className="">
        <TopNavbar />
        <Navbar />
      </header>
      <main>
        <section className=" bg-slate-100 py-2 mb-6">
          <div className="container mx-auto">
            <div className="text-sm breadcrumbs">
              <Breadcrumb crumbs={crumbs} />
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <shopAllProducts.Provider value={[products, setProducts, setReload, page, setPage, size]}>
            <div className=" w-full">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3 w-full">
                  <div className="lg:sticky top-0 ">
                    <ShopFilter
                      handleChangeChecked={handleChangeChecked}
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
                      <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                          <div class="relative">
                            <input
                              placeholder="Search..."
                              type="text"
                              name="search"
                              {...register("search")}
                              class="placeholder:italic w-full placeholder:text-slate-400 bg-base-200 block py-2 pl-12  pr-9 shadow-sm focus:outline-none input h-12 rounded-full focus:ring-0 sm:text-sm"
                            />
                            <button class=" absolute left-[5px] p-[10px] rounded top-[4px]">
                              <BiSearchAlt className="text-2xl text-gray-400" />
                            </button>
                            <button
                              onClick={() => resetField("search")}
                              class={`absolute right-[5px] p-[10px] rounded top-[4px] ${
                                inputSearch ? "block" : "hidden"
                              }`}
                            >
                              <IoIosClose className="text-2xl text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </form>
                      {error && <p className="ml-4 mt-2">{error}</p>}
                    </div>
                    <div className="sm:flex justify-center items-center gap-5 hidden ">
                      <div>
                        <span>Show: </span>
                        <select
                          defaultValue={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="border-primary border py-1"
                        >
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="20">20</option>
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
          </shopAllProducts.Provider>
        </section>
        <section className="py-10 container mx-auto">
          <FreeOnlineMoney />
        </section>
      </main>
      <Newsletters />
      <ScrollBtn />
      <Footer />
    </>
  );
};

export default Shop;
