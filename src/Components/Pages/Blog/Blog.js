import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Dashboard/Breadcrumb/Breadcrumb";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Footer from "../../Share/Footer/Footer";
import Loading from "../../Share/Loading/Loading";
import Navbar from "../../Share/Navbar/Navbar";
import TopNavbar from "../../Share/Navbar/TopNavbar";
import Newsletters from "../Home/Home/Newsletters/Newsletters";

const Blog = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [error, setError] = useState("");

  const crumbs = [
    { path: "home", name: "Home" },
    { path: "blog", name: "Blog" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const inputSearch = watch("search");

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivet.get("blog-counter");
      const count = data.count;
      const pages = Math.ceil(count / size);
      setPageCount(pages);
    })();
  }, [size, page]);

  const { data, isLoading } = useQuery(
    ["aws-blogs", page],
    async () => await axiosPrivet.get(`/blogs/?page=${page}&size=${size}`)
  );

  const onSubmit = (data) => {};

  if (isLoading) {
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
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10">
            <div className="col-span-2">
              <div className="py-14 mx-auto">
                <h4 className="uppercase text-2xl font-bold text-center pb-2">ALL LATEST BLOGS</h4>
                <progress className="progress w-60 bg-orange-500 h-[2px] mx-auto block"></progress>
              </div>
              <div className="grid md:grid-cols-2 gap-10 lg:max-w-[808px] max-w-[848px] mx-auto">
                {data?.data.length &&
                  data.data.map((item) => (
                    <div
                      key={item?._id}
                      className="card  rounded-none card-compact lg:max-w-sm max-w-md mx-auto  bg-base-100 shadow-xl"
                    >
                      <figure>
                        <img
                          height={256}
                          width={384}
                          className={"h-[256px] w-full"}
                          src={item?.images?.ImageURL1}
                          alt="blog"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title text-2xl leading-10">{item?.data?.title}</h2>
                        <p className="text-sm pt-2">{item?.data?.description1.slice(0, 184)}...</p>
                        <div className="card-actions justify-start pt-4">
                          <Link
                            to={`/blog-details/${item?._id}`}
                            href=""
                            className="capitalize font-bold text-primary"
                          >
                            read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-center mt-20 mb-10 btn-group">
                {[...Array(pageCount).keys()].map((number, index) => (
                  <button
                    key={index}
                    className={`btn border border-primary ${
                      page === number && "bg-primary text-white"
                    }`}
                    onClick={() => setPage(number)}
                  >
                    {number + 1}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-span-1 px-10 lg:px-0">
              <div className="flex flex-col gap-y-14 justify-center">
                <div className=" w-full">
                  <h4 className="text-lg pb-3 border-b border-gray-200 lg:mt-36">Search</h4>
                  <form className="pt-8" onSubmit={handleSubmit(onSubmit)}>
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
                        className="placeholder:italic w-full placeholder:text-slate-400 block    py-2 pl-12  pr-9 shadow-sm focus:outline-none  rounded-sm border border-gray-300 h-10 focus:ring-0 sm:text-sm"
                        placeholder="Search..."
                        type="text"
                        name="search"
                        {...register("search")}
                      />
                    </label>
                  </form>
                  {error && <p className="ml-4 mt-2">{error}</p>}
                </div>
                <div>
                  <h4 className="text-lg pb-3 border-b border-gray-200">Categories</h4>
                  <ul className="leading-8 pt-4 ">
                    <li className="flex items-center gap-4">
                      <VscTriangleRight /> Laptop
                    </li>
                    <li className="flex items-center gap-4">
                      <VscTriangleRight /> Watch
                    </li>
                    <li className="flex items-center gap-4">
                      <VscTriangleRight /> Phone
                    </li>
                    <li className="flex items-center gap-4">
                      <VscTriangleRight /> Tablet
                    </li>
                    <li className="flex items-center gap-4">
                      <VscTriangleRight /> Headphone
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg pb-3 border-b border-gray-200">Tags</h4>
                  <div className="leading-8 pt-4 flex flex-wrap gap-1">
                    <a href="" className="px-4 border border-gray-200">
                      iPad
                    </a>
                    <a href="" className="px-5 border border-gray-200">
                      Smartphone
                    </a>
                    <a href="" className="px-5 border border-gray-200">
                      Watch
                    </a>
                    <a href="" className="px-5 border border-gray-200">
                      Laptop
                    </a>
                    <a href="" className="px-5 border border-gray-200">
                      Headphone
                    </a>
                    <a href="" className="px-5 border border-gray-200">
                      Monitor
                    </a>
                    <a href="" className="px-5 border border-gray-200">
                      Computer
                    </a>
                    <a href="" className="px-5 border border-gray-200">
                      AC
                    </a>
                    <a href="" className="px-5 border border-gray-200">
                      Speaker
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    src={"https://i.ibb.co/0M8HbGZ/bannerfs.jpg"}
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Newsletters />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
