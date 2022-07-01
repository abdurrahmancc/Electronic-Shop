import React from "react";

const Computer = ({ register, errors }) => {
  return (
    <>
      <div className="bg-base-100 p-5 rounded-md">
        <div className="pb-6">
          <h4 className="capitalize text-xl font-bold ">Features</h4>
          <span className="text-xs ">Fill all information below</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {/* processor */}
            <div class="form-control pb-4">
              <label htmlFor="Processor" class="label">
                <span class="label-text text-xs  ">Processor</span>
              </label>
              <input
                id="Processor"
                type="text"
                placeholder=""
                class="input input-bordered"
                {...register("Processor")}
              />
            </div>
            {/* MPN Model */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div class="form-control pb-4 w-full">
                <label htmlFor="MPN" class="label">
                  <span class="label-text text-xs ">MPN</span>
                </label>
                <input
                  id="MPN"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("MPN")}
                />
              </div>
              <div class="form-control pb-4 w-full">
                <label htmlFor="Model" class="label">
                  <span class="label-text text-xs ">Model</span>
                </label>
                <input
                  id="Model"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("model")}
                />
              </div>
            </div>
            {/* Memory storage */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div class="form-control pb-4 w-full">
                <label htmlFor="Memory" class="label">
                  <span class="label-text text-xs ">Memory</span>
                </label>
                <input
                  id="Memory"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("memory")}
                />
              </div>
              <div class="form-control pb-4 w-full">
                <label htmlFor="Storage" class="label">
                  <span class="label-text text-xs ">Storage</span>
                </label>
                <input
                  id="Storage"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("storage")}
                />
              </div>
            </div>
            {/* Graphics Chipset */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div class="form-control pb-4 w-full">
                <label htmlFor="Graphics" class="label">
                  <span class="label-text text-xs ">Graphics</span>
                </label>
                <input
                  id="Graphics"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("graphics")}
                />
              </div>
              <div class="form-control pb-4 w-full">
                <label htmlFor="Chipset" class="label">
                  <span class="label-text text-xs ">Chipset</span>
                </label>
                <input
                  id="Chipset"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("Chipset")}
                />
              </div>
            </div>
            {/* Operating System Battery */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div class="form-control pb-4 w-full">
                <label htmlFor="Operating" class="label">
                  <span class="label-text text-xs ">Operating System</span>
                </label>
                <input
                  id="Operating"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("operating")}
                />
              </div>
              <div class="form-control pb-4 w-full">
                <label htmlFor="Colors" class="label">
                  <span class="label-text text-xs ">Colors</span>
                </label>
                <input
                  id="Colors"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("color")}
                />
              </div>
            </div>
          </div>
          <div>
            {/* display */}
            <div class="form-control pb-4">
              <label htmlFor="Display" class="label">
                <span class="label-text text-xs ">Display</span>
              </label>
              <input
                id="Display"
                type="text"
                placeholder=""
                class="input input-bordered"
                {...register("display")}
              />
            </div>
            {/* Adapter  Audio */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div class="form-control pb-4 w-full">
                <label htmlFor="Adapter" class="label">
                  <span class="label-text text-xs ">Adapter</span>
                </label>
                <input
                  id="Adapter"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("adapter")}
                />
              </div>
              <div class="form-control pb-4 w-full">
                <label htmlFor="Audio" class="label">
                  <span class="label-text text-xs ">Audio</span>
                </label>
                <input
                  id="Audio"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("audio")}
                />
              </div>
            </div>
            {/* Special Feature Keyboard */}
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div class="form-control pb-4 w-full">
                <label htmlFor="SpecialFeature" class="label">
                  <span class="label-text text-xs ">Special Feature</span>
                </label>
                <input
                  id="SpecialFeature"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("specialFeature")}
                />
              </div>
              <div class="form-control pb-4 w-full">
                <label htmlFor="Keyboard" class="label">
                  <span class="label-text text-xs ">Keyboard</span>
                </label>
                <input
                  id="Keyboard"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("keyboard")}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div class="form-control pb-4 w-full">
                <label htmlFor="WebCam" class="label">
                  <span class="label-text text-xs ">WebCam</span>
                </label>
                <input
                  id="WebCam"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
                  {...register("webCam")}
                />
              </div>
              <div class="form-control pb-4 w-full">
                <label htmlFor="CardReader" class="label">
                  <span class="label-text text-xs ">Card Reader</span>
                </label>
                <input
                  id="CardReader"
                  type="text"
                  placeholder=" "
                  class="input input-bordered"
                  {...register("cardReader")}
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-2">
              <div class="form-control pb-4 w-full">
                <label htmlFor="Warranty" class="label">
                  <span class="label-text text-xs ">Manufacturing Warranty</span>
                </label>
                <input
                  id="Warranty"
                  type="text"
                  placeholder=" "
                  class="input input-bordered"
                  {...register("warranty")}
                />
              </div>
              <div class="form-control pb-4 w-full">
                <label htmlFor="LAN_Wi_Fi" class="label">
                  <span class="label-text text-xs ">LAN / Wi-Fi</span>
                </label>
                <input
                  id="LAN_Wi_Fi"
                  type="text"
                  placeholder=""
                  class="input input-bordered"
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

export default Computer;
