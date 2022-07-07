import React from "react";

const AddMonitor = ({ register }) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">Monitor Features</h4>
          <span className="text-xs ">Fill all information below</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {/* processor */}
            <div className="form-control pb-4">
              <label htmlFor="MPN" className="label">
                <span className="label-text text-xs  ">MPN</span>
              </label>
              <input
                id="MPN"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("MPN")}
              />
            </div>
            {/* MPN Model */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
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
              <div className="form-control pb-4 w-full">
                <label htmlFor="screenSize" className="label">
                  <span className="label-text text-xs ">Screen Size</span>
                </label>
                <input
                  id="screenSize"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("screenSize")}
                />
              </div>
            </div>
            {/* Memory storage */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
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
              <div className="form-control pb-4 w-full">
                <label htmlFor="Resolution" className="label">
                  <span className="label-text text-xs ">Resolution</span>
                </label>
                <input
                  id="Resolution"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("resolution")}
                />
              </div>
            </div>
          </div>
          <div>
            {/* display */}
            <div className="form-control pb-4">
              <label htmlFor="Brightness" className="label">
                <span className="label-text text-xs ">Brightness</span>
              </label>
              <input
                id="Brightness"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("brightness")}
              />
            </div>
            {/* Others  */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="HDMI" className="label">
                  <span className="label-text text-xs ">HDMI</span>
                </label>
                <input
                  id="HDMI"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("HDMI")}
                />
              </div>
              {/* Capacity */}
              <div className="form-control pb-4 w-full">
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
            {/* color  */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="color" className="label">
                  <span className="label-text text-xs ">Color</span>
                </label>
                <input
                  id="color"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("color")}
                />
              </div>
              {/* Capacity */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="warranty" className="label">
                  <span className="label-text text-xs ">Manufacturing Warranty</span>
                </label>
                <input
                  id="warranty"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("warranty")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMonitor;
