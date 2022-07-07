import React from "react";

const AddWatch = ({ register }) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">Watch Features</h4>
          <span className="text-xs ">Fill all information below</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {/* phone Name */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              {/* Sensors */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="sensors" className="label">
                  <span className="label-text text-xs ">Sensors</span>
                </label>
                <input
                  id="sensors"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("sensors")}
                />
              </div>
              {/* Special Feature */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="SpecialFeature" className="label">
                  <span className="label-text text-xs ">Special Feature</span>
                </label>
                <input
                  id="SpecialFeature"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("specialFeature")}
                />
              </div>
            </div>
            {/* Colors */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Colors" className="label">
                  <span className="label-text text-xs ">Colors</span>
                </label>
                <input
                  id="Colors"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("colors")}
                />
              </div>
              {/* warranty */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="Warranty" className="label">
                  <span className="label-text text-xs ">Manufacturing Warranty</span>
                </label>
                <input
                  id="Warranty"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("warranty")}
                />
              </div>
            </div>
            {/* Water-resistance */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="waterResistance" className="label">
                  <span className="label-text text-xs ">Water-resistance</span>
                </label>
                <input
                  id="waterResistance"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("waterResistance")}
                />
              </div>
              {/* WLAN */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="gender" className="label">
                  <span className="label-text text-xs ">Gender</span>
                </label>
                <input
                  id="gender"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("gender")}
                />
              </div>
            </div>
            {/*Bluetooth*/}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Bluetooth" className="label">
                  <span className="label-text text-xs ">Bluetooth</span>
                </label>
                <input
                  id="Bluetooth"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("bluetooth")}
                />
              </div>
              {/* GPS */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="GPS" className="label">
                  <span className="label-text text-xs ">GPS</span>
                </label>
                <input
                  id="GPS"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("GPS")}
                />
              </div>
            </div>

            {/* madeIn */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4">
                <label htmlFor="madeIn" className="label">
                  <span className="label-text text-xs ">Made In</span>
                </label>
                <input
                  id="madeIn"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("madeIn")}
                />
              </div>
              {/* weight */}
              <div className="form-control pb-4">
                <label htmlFor="Weight" className="label">
                  <span className="label-text text-xs ">Weight</span>
                </label>
                <input
                  id="Weight"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("weight")}
                />
              </div>
            </div>
          </div>

          <div>
            {/* DisplaySize*/}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="displaySize" className="label">
                  <span className="label-text text-xs ">Display Size</span>
                </label>
                <input
                  id="displaySize"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("displaySize")}
                />
              </div>
              {/* displayResolution */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="displayType" className="label">
                  <span className="label-text text-xs ">Display Type</span>
                </label>
                <input
                  id="displayType"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("displayType")}
                />
              </div>
            </div>
            {/* display Features */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="supportedApplication" className="label">
                  <span className="label-text text-xs ">Supported Application</span>
                </label>
                <input
                  id="supportedApplication"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("supportedApplication")}
                />
              </div>
              {/* Battery Type And Capacity */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="BatteryTypeAndCapacity" className="label">
                  <span className="label-text text-xs ">Battery Type and Capacity</span>
                </label>
                <input
                  id="BatteryTypeAndCapacity"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("batteryTypeAndCapacity")}
                />
              </div>
            </div>

            {/* Operating System */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="operatingSystem	" className="label">
                  <span className="label-text text-xs ">Operating System</span>
                </label>
                <input
                  id="operatingSystem"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("operatingSystem")}
                />
              </div>
              {/* Chipset */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="Chipset" className="label">
                  <span className="label-text text-xs ">Chipset</span>
                </label>
                <input
                  id="Chipset"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("chipset")}
                />
              </div>
            </div>
            {/* RAM */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="RAM" className="label">
                  <span className="label-text text-xs ">RAM</span>
                </label>
                <input
                  id="RAM"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("RAM")}
                />
              </div>
              {/* Processor */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="processor" className="label">
                  <span className="label-text text-xs ">Processor</span>
                </label>
                <input
                  id="processor"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("processor")}
                />
              </div>
            </div>
            {/* GPU */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="GPU" className="label">
                  <span className="label-text text-xs ">GPU</span>
                </label>
                <input
                  id="GPU"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("GPU")}
                />
              </div>
              {/* ROM */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="ROM" className="label">
                  <span className="label-text text-xs ">ROM</span>
                </label>
                <input
                  id="ROM"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("ROM")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWatch;
