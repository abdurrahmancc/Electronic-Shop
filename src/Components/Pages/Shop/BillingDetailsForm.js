import React from "react";

const BillingDetailsForm = ({ register, errors }) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* First Name  */}
        <div className="form-control pb-4 w-full">
          <label htmlFor="firstName " className="label">
            <span className="label-text text-xs">First Name</span>
          </label>
          <input
            id="firstName"
            type="text"
            placeholder=""
            className="input rounded-none  input-bordered"
            {...register("firstName", {
              required: { value: true, message: "First Name is require" },
            })}
          />
          {errors.firstName?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.firstName?.message}</span>
          )}
        </div>
        {/* last Name */}
        <div className="form-control pb-4 w-full">
          <label htmlFor="lastName " className="label">
            <span className="label-text text-xs">Last Name</span>
          </label>
          <input
            id="lastName"
            type="text"
            placeholder=""
            className="input rounded-none  input-bordered"
            {...register("lastName", {
              required: { value: true, message: "Last Name Name is require" },
            })}
          />
          {errors.lastName?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.lastName?.message}</span>
          )}
        </div>
      </div>
      {/* company Name */}
      <div className="form-control pb-4">
        <label htmlFor="companyName" className="label">
          <span className="label-text text-xs">Company Name</span>
        </label>
        <input
          id="companyName"
          type="text"
          placeholder=""
          className="input rounded-none input-bordered"
          {...register("companyName", {
            required: { value: true, message: "Company Name is require" },
          })}
        />
        {errors.companyName?.type === "required" && (
          <span className="label-text-alt text-red-500 text-xs">{errors.companyName?.message}</span>
        )}
      </div>
      {/* Country */}
      <div className="form-control pb-4">
        <label htmlFor="country" className="label">
          <span className="label-text text-xs">Country</span>
        </label>
        <input
          id="country"
          type="text"
          placeholder=""
          className="input rounded-none input-bordered"
          {...register("country", {
            required: { value: true, message: "country is require" },
          })}
        />
        {errors.country?.type === "required" && (
          <span className="label-text-alt text-red-500 text-xs">{errors.country?.message}</span>
        )}
      </div>
      {/* Street Address */}
      <div className="form-control pb-4">
        <label htmlFor="streetAddress" className="label">
          <span className="label-text text-xs">Street Address</span>
        </label>
        <input
          id="streetAddress"
          type="text"
          placeholder="Home Number And Street Address"
          className="input rounded-none input-bordered"
          {...register("streetAddress", {
            required: { value: true, message: "Street Address is require" },
          })}
        />
        {errors.streetAddress?.type === "required" && (
          <span className="label-text-alt text-red-500 text-xs">
            {errors.streetAddress?.message}
          </span>
        )}
      </div>
      <div className="form-control pb-4">
        <input
          id="streetAddress2"
          type="text"
          placeholder="Address (Optional)"
          className="input rounded-none input-bordered"
          {...register("streetAddress2")}
        />
      </div>
      {/* Town / City */}
      <div className="form-control pb-4">
        <label htmlFor="townCity" className="label">
          <span className="label-text text-xs">Town / City</span>
        </label>
        <input
          id="townCity"
          type="text"
          placeholder=""
          className="input rounded-none input-bordered"
          {...register("townCity", {
            required: { value: true, message: "Town / City Address is require" },
          })}
        />
        {errors?.townCity?.type === "required" && (
          <span className="label-text-alt text-red-500 text-xs">{errors.townCity?.message}</span>
        )}
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* State */}
        <div className="form-control pb-4">
          <label htmlFor="state" className="label">
            <span className="label-text text-xs">State</span>
          </label>
          <input
            id="state"
            type="text"
            placeholder=""
            className="input rounded-none input-bordered"
            {...register("state", {
              required: { value: true, message: "State Address is require" },
            })}
          />
          {errors?.state?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors?.state?.message}</span>
          )}
        </div>
        {/* Postcode / Zip */}
        <div className="form-control pb-4 w-full">
          <label htmlFor="postcode" className="label">
            <span className="label-text text-xs">Postcode / Zip</span>
          </label>
          <input
            id="postcode"
            type="text"
            placeholder=""
            className="input rounded-none input-bordered"
            {...register("postcode", {
              required: { value: true, message: "Postcode is require" },
            })}
          />
          {errors.postcode?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.postcode?.message}</span>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* Phone */}
        <div className="form-control pb-4 w-full">
          <label htmlFor="phone" className="label">
            <span className="label-text text-xs">Phone</span>
          </label>
          <input
            id="phone"
            type="text"
            placeholder=""
            className="input rounded-none input-bordered"
            {...register("phone", {
              required: { value: true, message: "phone is require" },
            })}
          />
          {errors?.phone?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">{errors.phone?.message}</span>
          )}
        </div>
        {/* Email Address */}
        <div className="form-control pb-4 w-full">
          <label htmlFor="emailAddress" className="label">
            <span className="label-text text-xs">Email Address</span>
          </label>
          <input
            id="emailAddress"
            type="text"
            placeholder=""
            className="input rounded-none input-bordered"
            {...register("emailAddress", {
              required: { value: true, message: "Email Address is require" },
            })}
          />
          {errors?.emailAddress?.type === "required" && (
            <span className="label-text-alt text-red-500 text-xs">
              {errors?.emailAddress?.message}
            </span>
          )}
        </div>
      </div>
      {/* Order Notes */}
      <div className="form-control pb-4">
        <label htmlFor="orderNotes" className="label">
          <span className="label-text text-xs">Order Notes (Optional)</span>
        </label>
        <textarea
          id="orderNotes"
          className="textarea textarea-bordered  w-full"
          placeholder=""
          {...register("orderNotes")}
        ></textarea>
      </div>
    </>
  );
};

export default BillingDetailsForm;
