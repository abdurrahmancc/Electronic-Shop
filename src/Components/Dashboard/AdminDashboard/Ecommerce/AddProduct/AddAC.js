import React from "react";

const AddAC = ({ register }) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">AC Features</h4>
          <span className="text-xs ">Fill all information below</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {/* processor */}
            <div className="form-control pb-4">
              <label htmlFor="Processor" className="label">
                <span className="label-text text-xs  ">Power Source</span>
              </label>
              <input
                id="Processor"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("powerSource")}
              />
            </div>
            {/* MPN Model */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="MPN" className="label">
                  <span className="label-text text-xs ">Special Feature</span>
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
                <label htmlFor="ItemWeight" className="label">
                  <span className="label-text text-xs ">Item Weight</span>
                </label>
                <input
                  id="ItemWeight"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("itemWeight")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="controlMethod" className="label">
                  <span className="label-text text-xs ">Control Method</span>
                </label>
                <input
                  id="controlMethod"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("controlMethod")}
                />
              </div>
            </div>
          </div>
          <div>
            {/* display */}
            <div className="form-control pb-4">
              <label htmlFor="roomCoverage" className="label">
                <span className="label-text text-xs ">Room Coverage</span>
              </label>
              <input
                id="roomCoverage"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("roomCoverage")}
              />
            </div>
            {/* Others  */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="others" className="label">
                  <span className="label-text text-xs ">Others</span>
                </label>
                <input
                  id="others"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("others")}
                />
              </div>
              {/* Capacity */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="capacity" className="label">
                  <span className="label-text text-xs ">Capacity</span>
                </label>
                <input
                  id="capacity"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("capacity")}
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
                  <span className="label-text text-xs ">warranty</span>
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

export default AddAC;
