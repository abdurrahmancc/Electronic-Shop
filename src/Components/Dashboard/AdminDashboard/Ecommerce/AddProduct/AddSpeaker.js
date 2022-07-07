import React from "react";

const AddSpeaker = ({ register }) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">Speaker Features</h4>
          <span className="text-xs ">Fill all information below</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {/* processor */}
            <div className="form-control pb-4">
              <label htmlFor="Subwoofer" className="label">
                <span className="label-text text-xs  ">Subwoofer</span>
              </label>
              <input
                id="Subwoofer"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("subWoofer")}
              />
            </div>
            {/* MPN Model */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="signalNoiseRatio" className="label">
                  <span className="label-text text-xs ">Signal / noise ratio</span>
                </label>
                <input
                  id="signalNoiseRatio"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("signalNoiseRatio")}
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
                <label htmlFor="frequencyResponse" className="label">
                  <span className="label-text text-xs ">Frequency Response</span>
                </label>
                <input
                  id="Memory"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("frequencyResponse")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Drivers" className="label">
                  <span className="label-text text-xs ">Drivers</span>
                </label>
                <input
                  id="Drivers"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("drivers")}
                />
              </div>
            </div>
            {/* Graphics Chipset */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Dimension" className="label">
                  <span className="label-text text-xs ">Dimension</span>
                </label>
                <input
                  id="Dimension"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("dimension")}
                />
              </div>
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
          </div>
          <div>
            {/* display */}
            <div className="form-control pb-4">
              <label htmlFor="Power" className="label">
                <span className="label-text text-xs ">Power</span>
              </label>
              <input
                id="Power"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("power")}
              />
            </div>
            {/* type */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Type" className="label">
                  <span className="label-text text-xs ">Type</span>
                </label>
                <input
                  id="Type"
                  type="text"
                  placeholder=" "
                  className="input input-bordered"
                  {...register("type")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Others" className="label">
                  <span className="label-text text-xs ">Others</span>
                </label>
                <input
                  id="Others"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("others")}
                />
              </div>
            </div>
            {/* Operating System Battery */}
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
                <label htmlFor="Color" className="label">
                  <span className="label-text text-xs ">Color</span>
                </label>
                <input
                  id="Color"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("color")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSpeaker;
