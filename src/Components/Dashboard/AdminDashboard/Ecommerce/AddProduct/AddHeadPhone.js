import React from "react";

const AddHeadPhone = ({ register }) => {
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
                <label htmlFor="frequencyRange" className="label">
                  <span className="label-text text-xs ">Frequency Range</span>
                </label>
                <input
                  id="frequencyRange"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("frequencyRange")}
                />
              </div>
            </div>
            {/* Memory storage */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Impedance" className="label">
                  <span className="label-text text-xs ">Impedance</span>
                </label>
                <input
                  id="Impedance"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("impedance")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="sensitivity" className="label">
                  <span className="label-text text-xs ">Sensitivity</span>
                </label>
                <input
                  id="sensitivity"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("sensitivity")}
                />
              </div>
            </div>
          </div>
          <div>
            {/* Others */}
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
              <div className="form-control pb-4 w-full">
                <label htmlFor="cable" className="label">
                  <span className="label-text text-xs ">Cable</span>
                </label>
                <input
                  id="cable"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("cable")}
                />
              </div>
            </div>

            {/* Input Jack */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="inputJack" className="label">
                  <span className="label-text text-xs ">Input Jack</span>
                </label>
                <input
                  id="inputJack"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("inputJack")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="Connectivity" className="label">
                  <span className="label-text text-xs ">Connectivity</span>
                </label>
                <input
                  id="Connectivity"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("connectivity")}
                />
              </div>
            </div>
            {/* Manufacturing Warranty */}
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

export default AddHeadPhone;
