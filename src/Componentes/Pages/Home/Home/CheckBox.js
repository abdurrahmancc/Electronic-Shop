import React from "react";

const CheckBox = ({ children }) => {
  return (
    <>
      <div class="form-control">
        <label class="label justify-start cursor-pointer">
          <input
            type="checkbox"
            //   checked="checked"
            class="checkbox checkbox-primary  checkbox-xs text-white  rounded-sm
                "
          />
          <span class="label-text pl-2">{children}</span>
        </label>
      </div>
    </>
  );
};

export default CheckBox;
