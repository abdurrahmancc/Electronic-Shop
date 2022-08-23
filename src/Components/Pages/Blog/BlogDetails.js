import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import axiosPrivet from "../../Hooks/axiosPrivet";
import Loading from "../../Share/Loading/Loading";
import TopNavbar from "../../Share/Navbar/TopNavbar";
import Navbar from "../../Share/Navbar/Navbar";
import Breadcrumb from "../../Dashboard/Breadcrumb/Breadcrumb";
import Newsletters from "../Home/Home/Newsletters/Newsletters";
import Footer from "../../Share/Footer/Footer";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import { FaCalendarAlt, FaThLarge, FaUserAlt } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
import adminLogo from "../../../assets/admin.jpg";
import BlogComment from "./BlogComment ";

const BlogDetails = () => {
  const { id } = useParams();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const inputSearch = watch("search");
  const crumbs = [
    { path: "home", name: "Home" },
    { path: "blog", name: "Blog" },
    { path: `blog-details/${id}`, name: "Blog Details" },
  ];
  const { data, isLoading } = useQuery(
    ["blogDetails", id],
    async () => await axiosPrivet.get(`/blog-details/${id}`)
  );

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {};
  console.log(data);
  const tags = data?.data?.data?.metaKeywords.split(", ");
  console.log(tags);
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
        <section className="container mx-auto mt-20">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10">
            <div className="col-span-2">
              <div className="border-b border-dashed border-gray-300">
                <figure>
                  <img className="w-full h-auto" src={data?.data?.images?.ImageURL1} alt="" />
                </figure>
                <div>
                  <h4 className="text-2xl mt-8 font-bold">Blog Image Post</h4>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 mt-4">
                      <FaCalendarAlt className="text-gray-400" />
                      <span>{data?.data?.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <FaUserAlt className="text-gray-400" />
                      <span className="capitalize">Posts by: {data?.data?.data?.role}</span>
                    </div>
                  </div>
                  <div className="mt-10">
                    <p className="leading-6">{data?.data?.data?.description1}</p>
                    <blockquote className="ml-20 py-10 ">
                      <p className="p-4 border-l-4 bg-base-200 border-primary">
                        <em> {data?.data?.data?.blockquote}</em>
                      </p>
                    </blockquote>
                    <p className="leading-6">{data?.data?.data?.description2}</p>
                    <div className="flex gap-1 py-10">
                      {tags &&
                        tags.map((tag, index) => (
                          <button className=" bg-[#FF6000] text-neutral py-2 px-4 rounded ">
                            {tag}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div>
                  <ul>
                    <li className=" flex items-center">
                      <BsFillTagFill Fill className="text-[#FF6000] text-lg" />
                      <Link className="pl-2" to={"blog"}>
                        Branding
                      </Link>
                      ,
                      <Link className="pl-1" to={"blog"}>
                        Electronic
                      </Link>
                      ,
                      <Link className="pl-1" to={"blog"}>
                        Watch
                      </Link>
                      ,
                      <Link className="pl-1" to={"blog"}>
                        Laptop
                      </Link>
                      ,
                      <Link className="pl-1" to={"blog"}>
                        IPad
                      </Link>
                      ,
                    </li>
                  </ul>
                </div>
                <div className="flex justify-around items-center py-10 my-10 bg-base-200">
                  <a href="" className="text-lg font-bold">
                    PREVIOUS POST
                  </a>
                  <FaThLarge className="text-lg " />
                  <a href="" className="text-lg font-bold">
                    NEXT POST
                  </a>
                </div>
                <div className="grid grid-cols-12 bg-base-200 py-10">
                  <div className="col-span-2">
                    <div className="avatar w-full justify-center pt-12">
                      <div className="w-20 rounded">
                        <img src={adminLogo} alt="" className="w-[70px] h-auto" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-10 ">
                    <h4 className="text-xl font-bold">Admin</h4>
                    <p className="leading-7 pt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum
                      quaerat, aspernatur facilis totam nemo saepe quasi veniam. Autem voluptatum
                      saepe, itaque animi praesentium neque ut corrupti amet sit cumque
                      necessitatibus natus enim hic esse iste, dolorum laborum! Quaerat, omnis.
                      saepe, itaque animi praesentium neque ut corrupti amet sit cumque
                      necessitatibus natus enim hic esse iste, dolorum laborum! Quaerat, omnis.
                    </p>
                  </div>
                </div>
                {/* command  */}
                <div className="my-20">
                  <div className="">
                    <h4 className="text-2xl font-bold">Leave a Reply</h4>
                    <span className="text-gray-500">
                      <i> Your email address will not be published. Required fields are marked </i>
                      <span className="text-red-500 text-lg">*</span>
                    </span>
                    <BlogComment />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 px-10 lg:px-0">
              <div className="flex flex-col gap-y-14 justify-center">
                <div className=" w-full">
                  <h4 className="text-lg pb-3 border-b border-gray-200 ">Search</h4>
                  <form className="pt-8" onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control">
                      <div class="relative">
                        <input
                          placeholder="Search..."
                          type="text"
                          name="search"
                          {...register("search")}
                          class="placeholder:italic w-full placeholder:text-slate-400 block py-2 pl-12  pr-9 shadow-sm focus:outline-none input rounded-sm border border-gray-300 focus:ring-0 sm:text-sm"
                        />
                        <button class=" absolute left-[5px] p-[10px] rounded top-[4px] bg-primary">
                          <BiSearchAlt className="text-xl bg-primary text-white" />
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

export default BlogDetails;
