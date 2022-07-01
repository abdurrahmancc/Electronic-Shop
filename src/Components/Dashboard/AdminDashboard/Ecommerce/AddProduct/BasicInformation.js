import React from "react";

const BasicInformation = ({ register, errors }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        <div>
          {/* Product Name */}
          <div class="form-control pb-4">
            <label htmlFor="productName" class="label">
              <span class="label-text text-xs">Product Name</span>
            </label>
            <input
              id="productName"
              type="text"
              placeholder=""
              class="input input-bordered"
              {...register("productName", {
                required: { value: true, message: "product Name is require" },
              })}
            />
            {errors.productName?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.productName?.message}
              </span>
            )}
          </div>
          {/* Manufacturer Name */}
          <div class="form-control pb-4">
            <label htmlFor="ManufacturerName" class="label">
              <span class="label-text text-xs">Manufacturer Name</span>
            </label>
            <input
              id="ManufacturerName"
              type="text"
              placeholder=""
              class="input input-bordered"
              {...register("manufacturerName", {
                required: { value: true, message: "Manufacturer Name is require" },
              })}
            />
            {errors.manufacturerName?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.manufacturerName?.message}
              </span>
            )}
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-2">
            {/* Price */}
            <div class="form-control pb-4 w-full">
              <label htmlFor="Price" class="label">
                <span class="label-text text-xs">Price</span>
              </label>
              <input
                id="Price"
                type="text"
                placeholder=""
                class="input input-bordered"
                {...register("Price", {
                  required: { value: true, message: "Price is require" },
                })}
              />
              {errors.Price?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.Price?.message}</span>
              )}
            </div>
            <div class="form-control pb-4 w-full">
              <label htmlFor="regularPrice" class="label">
                <span class="label-text text-xs">Regular Price </span>
              </label>
              <input
                id="regularPrice"
                type="text"
                placeholder=""
                class="input input-bordered"
                {...register("regularPrice", {
                  required: { value: true, message: "Regular Price	 is require" },
                })}
              />
              {errors.regularPrice?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.regularPrice?.message}
                </span>
              )}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-2">
            {/* Quantity */}
            <div class="form-control pb-4 w-full">
              <label htmlFor="Quantity" class="label">
                <span class="label-text text-xs">Quantity</span>
              </label>
              <input
                id="Quantity"
                type="text"
                placeholder=""
                class="input input-bordered"
                {...register("Quantity", {
                  required: { value: true, message: "Quantity is require" },
                })}
              />
              {errors.Quantity?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.Quantity?.message}
                </span>
              )}
            </div>
            {/* Product Code */}
            <div class="form-control pb-4 w-full">
              <label htmlFor="productCode" class="label">
                <span class="label-text text-xs">Product Code </span>
              </label>
              <input
                id="productCode "
                type="text"
                placeholder=""
                class="input input-bordered"
                {...register("productCode", {
                  required: { value: true, message: "Product Code is require" },
                })}
              />
              {errors.productCode?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.productCode?.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div>
          {/* Category */}
          <div class="form-control pb-4 ">
            <label htmlFor="Category" class="label">
              <span class="label-text text-xs">Category</span>
            </label>
            <select
              id="Category"
              class="select select-bordered w-full"
              {...register("Category", {
                required: { value: true, message: "Category is require" },
              })}
            >
              <option disabled selected hidden value="">
                --Select--
              </option>
              <option value={"Laptop"}>Laptop</option>
              <option value={"Computer"}>Computer</option>
            </select>
            {errors?.Category && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.Category?.message}
              </span>
            )}
          </div>
          {/* Manufacturer Brand */}
          <div class="form-control pb-4">
            <label htmlFor="ManufacturerBrand" class="label">
              <span class="label-text text-xs">Manufacturer Brand</span>
            </label>
            <input
              id="ManufacturerBrand"
              type="text"
              placeholder=""
              class="input input-bordered"
              {...register("ManufacturerBrand", {
                required: { value: true, message: "Manufacturer Brand is require" },
              })}
            />
            {errors.ManufacturerBrand?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.ManufacturerBrand?.message}
              </span>
            )}
          </div>
          {/* Product Description */}
          <div class="form-control pb-4">
            <label htmlFor="ProductDescription" class="label">
              <span class="label-text text-xs">Product Description</span>
            </label>
            <textarea
              id="ProductDescription"
              class="textarea textarea-bordered h-[150px]"
              placeholder=""
              {...register("ProductDescription", {
                required: { value: true, message: "Product Description is require" },
              })}
            ></textarea>
            {errors.ProductDescription?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xs">
                {errors.ProductDescription?.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
