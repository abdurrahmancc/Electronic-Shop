import React, { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import DashboardFooter from "../../../DashboardFooter/DashboardFooter";

const AddProduct = () => {
  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/add-product", name: "add-product" },
  ];

  return (
    <>
      <div className="p-10 w-full">
        <div className="flex justify-between pb-4">
          <h4 className="uppercase text-[1.4vw]  text-neutral font-bold">add product</h4>
          <div>
            <div class="text-sm breadcrumbs">
              <Breadcrumb crumbs={crumbs} />
            </div>
          </div>
        </div>
        <div>
          <form action="">
            <div className="bg-base-100 p-5 rounded-md">
              <div className="pb-6">
                <h4 className="capitalize text-lg text-neutral">basic information</h4>
                <span className="text-xs ">Fill all information below</span>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                <div>
                  <div class="form-control pb-4">
                    <label htmlFor="productName" class="label">
                      <span class="label-text">Product Name</span>
                    </label>
                    <input
                      id="productName"
                      type="text"
                      placeholder="Product Name"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control pb-4">
                    <label htmlFor="ManufacturerName" class="label">
                      <span class="label-text">Manufacturer Name</span>
                    </label>
                    <input
                      id="ManufacturerName"
                      type="text"
                      placeholder="Manufacturer Name"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control pb-4">
                    <label htmlFor="ManufacturerBrand" class="label">
                      <span class="label-text">Manufacturer Brand</span>
                    </label>
                    <input
                      id="ManufacturerBrand"
                      type="text"
                      placeholder="ManufacturerBrand"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control pb-4">
                    <label htmlFor="Price" class="label">
                      <span class="label-text">Price</span>
                    </label>
                    <input
                      id="productName"
                      type="text"
                      placeholder="Price"
                      class="input input-bordered"
                    />
                  </div>
                </div>
                <div>
                  <div class="form-control pb-4 ">
                    <label htmlFor="Category" class="label">
                      <span class="label-text">Category</span>
                    </label>
                    <select id="Category" class="select select-bordered w-full ">
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </div>
                  <div class="form-control pb-4 ">
                    <label htmlFor="Features" class="label">
                      <span class="label-text">Features</span>
                    </label>
                    <select id="Features" class="select select-bordered w-full ">
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </div>

                  <div class="form-control pb-4">
                    <label htmlFor="Category" class="label">
                      <span class="label-text">Category</span>
                    </label>
                    <textarea
                      id="productName"
                      class="textarea textarea-bordered h-[150px]"
                      placeholder="Bio"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="bg-base-100 p-5 rounded-md">
                <h4 className="text-neutral text-lg capitalize pb-4">Product Images</h4>
                <div className="w-full h-60 flex justify-center  items-center  border-white border-dashed border-2 rounded-md">
                  <div className="text-5xl text-center">
                    <p>
                      <IoMdCloudUpload className="relative left-8" />
                    </p>
                    <p className="text-lg">upload photo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-base-100 p-5 rounded-md">
              <div className="pb-6">
                <h4 className="capitalize text-lg text-neutral">Meta Data</h4>
                <span className="text-xs ">Fill all information below</span>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                <div>
                  <div class="form-control pb-4">
                    <label htmlFor="MetaTitle" class="label">
                      <span class="label-text">Meta Title</span>
                    </label>
                    <input
                      id="MetaTitle"
                      type="text"
                      placeholder="Meta title"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control pb-4">
                    <label htmlFor="MetaKeywords" class="label">
                      <span class="label-text">Meta Keywords</span>
                    </label>
                    <input
                      id="MetaKeywords"
                      type="text"
                      placeholder="Meta Keywords"
                      class="input input-bordered"
                    />
                  </div>
                </div>
                <div>
                  <div class="form-control pb-4">
                    <label htmlFor="MetaDescription" class="label">
                      <span class="label-text">Meta Description</span>
                    </label>
                    <textarea
                      id="MetaDescription"
                      class="textarea textarea-bordered h-[150px]"
                      placeholder="Bio"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
                <button className="btn btn-primary capitalize">cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
