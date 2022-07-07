import React from "react";

const AddLaptop = ({ register, errors }) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">Laptop Features</h4>
          <span className="text-xs ">Fill all information below</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {/* processor */}
            <div className="form-control pb-4">
              <label htmlFor="Processor" className="label">
                <span className="label-text text-xs  ">Processor</span>
              </label>
              <input
                id="Processor"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("processor")}
              />
            </div>
            {/* MPN Model */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="MPN" className="label">
                  <span className="label-text text-xs ">MPN</span>
                </label>
                <input
                  id="MPN"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("MPN")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Model" className="label">
                  <span className="label-text text-xs ">Model</span>
                </label>
                <input
                  id="Model"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("model")}
                />
              </div>
            </div>
            {/* Memory storage */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Memory" className="label">
                  <span className="label-text text-xs ">Memory</span>
                </label>
                <input
                  id="Memory"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("memory")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Storage" className="label">
                  <span className="label-text text-xs ">Storage</span>
                </label>
                <input
                  id="Storage"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("storage")}
                />
              </div>
            </div>
            {/* Graphics Chipset */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Graphics" className="label">
                  <span className="label-text text-xs ">Graphics</span>
                </label>
                <input
                  id="Graphics"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("graphics")}
                />
              </div>
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
            {/* Operating System Battery */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Operating" className="label">
                  <span className="label-text text-xs ">Operating System</span>
                </label>
                <input
                  id="Operating"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("operating")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Colors" className="label">
                  <span className="label-text text-xs ">Colors</span>
                </label>
                <input
                  id="Colors"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("color")}
                />
              </div>
            </div>
          </div>
          <div>
            {/* display */}
            <div className="form-control pb-4">
              <label htmlFor="Display" className="label">
                <span className="label-text text-xs ">Display</span>
              </label>
              <input
                id="Display"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("display")}
              />
            </div>
            {/* Adapter  Audio */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Adapter" className="label">
                  <span className="label-text text-xs ">Adapter</span>
                </label>
                <input
                  id="Adapter"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("adapter")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Audio" className="label">
                  <span className="label-text text-xs ">Audio</span>
                </label>
                <input
                  id="Audio"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("audio")}
                />
              </div>
            </div>
            {/* Special Feature Keyboard */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
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
              <div className="form-control pb-4 w-full">
                <label htmlFor="Keyboard" className="label">
                  <span className="label-text text-xs ">Keyboard</span>
                </label>
                <input
                  id="Keyboard"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("keyboard")}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="WebCam" className="label">
                  <span className="label-text text-xs ">WebCam</span>
                </label>
                <input
                  id="WebCam"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("webCam")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="CardReader" className="label">
                  <span className="label-text text-xs ">Card Reader</span>
                </label>
                <input
                  id="CardReader"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("cardReader")}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-2">
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
              <div className="form-control pb-4 w-full">
                <label htmlFor="LAN_Wi_Fi" className="label">
                  <span className="label-text text-xs ">LAN / Wi-Fi</span>
                </label>
                <input
                  id="LAN_Wi_Fi"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("lanWiFi")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLaptop;
