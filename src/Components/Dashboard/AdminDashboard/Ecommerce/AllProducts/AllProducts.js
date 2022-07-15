import React, { useState } from "react";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import axiosPrivet from "../../../../Hooks/axiosPrivet";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import DashboardFilterSidebar from "../../DashboardFilterSidebar/DashboardFilterSidebar";
import { useForm } from "react-hook-form";
import { createContext } from "react";
import { useQuery } from "react-query";
import Loading from "../../../../Share/Loading/Loading";
export const DashboardAllProducts = createContext("AllProducts");

const AllProducts = () => {
  const [hoveredCart, setHoveredCart] = useState("");
  const [showModal, setShowModal] = useState("");
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [reload, setReload] = useState("");
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
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/all-product", name: "products" },
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
          // console.log(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [reload, page, size, categoriesChecked.length]);

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

  return (
    <>
      <DashboardAllProducts.Provider
        value={[products, setProducts, setReload, page, setPage, size]}
      >
        <div className="p-10 w-full">
          <div className="flex justify-between pb-4">
            <h4 className="uppercase text-[1.4vw]  text-neutral font-bold">all Products</h4>
            <div>
              <div className="text-sm breadcrumbs">
                <Breadcrumb crumbs={crumbs} />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3 w-full">
              <div className="lg:sticky top-0 ">
                <DashboardFilterSidebar
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
              <div className="flex sm:justify-between justify-center px-5">
                <div className="max-w-xs  w-full">
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
                        className={`absolute inset-y-0 right-2 rounded pr-1  flex items-center pl-2 ${
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
                      defaultValue={size}
                      onClick={(e) => setSize(e.target.value)}
                      className="border-primary border py-1 text-black"
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
      </DashboardAllProducts.Provider>
    </>
  );
};

export default AllProducts;
