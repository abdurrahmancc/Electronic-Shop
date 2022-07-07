import React from "react";

const AddRefrigerator = ({ register }) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">Refrigerator Features</h4>
          <span className="text-xs ">Fill all information below</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {/* processor */}
            <div className="form-control pb-4">
              <label htmlFor="Height" className="label">
                <span className="label-text text-xs  ">Height</span>
              </label>
              <input
                id="Height"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("height")}
              />
            </div>
            {/* MPN Model */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="Depth" className="label">
                  <span className="label-text text-xs ">Depth </span>
                </label>
                <input
                  id="Depth"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("depth")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="netWeight" className="label">
                  <span className="label-text text-xs ">Net Weight</span>
                </label>
                <input
                  id="netWeight"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("netWeight")}
                />
              </div>
            </div>
            {/* Total  Capacity */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="totalCapacity" className="label">
                  <span className="label-text text-xs ">Total Capacity</span>
                </label>
                <input
                  id="totalCapacity"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("totalCapacity")}
                />
              </div>
              <div className="form-control pb-4 w-full">
                <label htmlFor="CapacityOfFreezer" className="label">
                  <span className="label-text text-xs ">Capacity of Freezer </span>
                </label>
                <input
                  id="CapacityOfFreezer"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("capacityOfFreezer")}
                />
              </div>
            </div>
            {/* color*/}
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
              {/* Working Voltage */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="warranty" className="label">
                  <span className="label-text text-xs ">Warranty</span>
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
          <div>
            {/* display */}
            <div className="form-control pb-4">
              <label htmlFor="CapacityOfRefrigerator" className="label">
                <span className="label-text text-xs ">Capacity of Refrigerator</span>
              </label>
              <input
                id="CapacityOfRefrigerator"
                type="text"
                placeholder=""
                className="input input-bordered"
                {...register("capacityOfRefrigerator")}
              />
            </div>
            {/* Others  */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="TotalDoorPocket" className="label">
                  <span className="label-text text-xs ">Total door pocket</span>
                </label>
                <input
                  id="TotalDoorPocket"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("totalDoorPocket")}
                />
              </div>
              {/* Capacity */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="eggTrayQty" className="label">
                  <span className="label-text text-xs ">Egg Tray Qty</span>
                </label>
                <input
                  id="eggTrayQty"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("eggTrayQty")}
                />
              </div>
            </div>
            {/* Running Current  */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div className="form-control pb-4 w-full">
                <label htmlFor="runningCurrent" className="label">
                  <span className="label-text text-xs ">Running Current</span>
                </label>
                <input
                  id="runningCurrent"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("runningCurrent")}
                />
              </div>
              {/* Working Voltage */}
              <div className="form-control pb-4 w-full">
                <label htmlFor="workingVoltage" className="label">
                  <span className="label-text text-xs ">Working Voltage</span>
                </label>
                <input
                  id="workingVoltage"
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  {...register("workingVoltage")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRefrigerator;
