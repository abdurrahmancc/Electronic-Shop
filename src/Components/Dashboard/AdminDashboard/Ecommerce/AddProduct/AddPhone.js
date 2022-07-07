import React from "react";

const AddPhone = ({ register, errors }) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">Phone Features</h4>
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
              {/* release Date */}
              <div className="form-control pb-4">
                <label htmlFor="releaseDate" className="label">
                  <span className="label-text text-xs  ">Release Date</span>
                </label>
                <input
                  id="releaseDate"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("releaseDate")}
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
              {/* Network */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="Network" className="label">
                  <span className="label-text text-xs ">Network</span>
                </label>
                <input
                  id="Network"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("network")}
                />
              </div>
            </div>
            {/* SIM */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="SIM" className="label">
                  <span className="label-text text-xs ">SIM</span>
                </label>
                <input
                  id="SIM"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("SIM")}
                />
              </div>
              {/* WLAN */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="WLAN" className="label">
                  <span className="label-text text-xs ">WLAN</span>
                </label>
                <input
                  id="WLAN"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("WLAN")}
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
            {/* Radio */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Radio" className="label">
                  <span className="label-text text-xs ">Radio</span>
                </label>
                <input
                  id="Radio"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("radio")}
                />
              </div>
              {/* USB */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="USB" className="label">
                  <span className="label-text text-xs ">USB</span>
                </label>
                <input
                  id="USB"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("USB")}
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
                <label htmlFor="displayResolution" className="label">
                  <span className="label-text text-xs ">Display Resolution</span>
                </label>
                <input
                  id="displayResolution"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("displayResolution")}
                />
              </div>
            </div>
            {/* displayTechnology */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="displayTechnology" className="label">
                  <span className="label-text text-xs ">Display Technology</span>
                </label>
                <input
                  id="displayTechnology"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("displayTechnology")}
                />
              </div>
              {/* displayProtection */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="displayProtection" className="label">
                  <span className="label-text text-xs ">Display Protection</span>
                </label>
                <input
                  id="displayProtection"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("displayProtection")}
                />
              </div>
            </div>
          </div>
          {/* display Features */}
          <div>
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="displayFeatures" className="label">
                  <span className="label-text text-xs ">Display Features</span>
                </label>
                <input
                  id="displayFeatures"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("displayFeatures")}
                />
              </div>
              {/* back Camera Resolution */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="backCameraResolution" className="label">
                  <span className="label-text text-xs "> Back Camera Resolution</span>
                </label>
                <input
                  id="backCameraResolution"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("backCameraResolution")}
                />
              </div>
            </div>
            {/* back Camera Features */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="backCameraFeatures" className="label">
                  <span className="label-text text-xs ">Back Camera Features</span>
                </label>
                <input
                  id="backCameraFeatures"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("backCameraFeatures")}
                />
              </div>
              {/* back Camera Video Recording */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="backCameraVideoRecording" className="label">
                  <span className="label-text text-xs ">Back Camera Video Recording</span>
                </label>
                <input
                  id="backCameraVideoRecording"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("backCameraVideoRecording")}
                />
              </div>
            </div>
            {/* front Camera Resolution */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="frontCameraResolution" className="label">
                  <span className="label-text text-xs ">Front Camera Resolution</span>
                </label>
                <input
                  id="frontCameraResolution"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("frontCameraResolution")}
                />
              </div>
              {/* front Camera Features */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="frontCameraFeatures" className="label">
                  <span className="label-text text-xs ">Front Camera Features</span>
                </label>
                <input
                  id="frontCameraFeatures"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("frontCameraFeatures")}
                />
              </div>
            </div>
            {/* front Camera Video Recording */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="frontCameraVideoRecording" className="label">
                  <span className="label-text text-xs ">Front Camera Video Recording</span>
                </label>
                <input
                  id="frontCameraVideoRecording"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("frontCameraVideoRecording")}
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
                  {...register("BatteryTypeAndCapacity")}
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

export default AddPhone;
