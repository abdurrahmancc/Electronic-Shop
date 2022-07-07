import React from "react";

const CheckBox = ({ children }) => {
  return (
    <>
      <div className="form-control">
        <label className="label justify-start cursor-pointer">
          <input
            type="checkbox"
            //   checked="checked"
            className="checkbox checkbox-primary  checkbox-xs text-white  rounded-sm
                "
          />
          <span className="label-text pl-2">{children}</span>
        </label>
      </div>
    </>
  );
};

export default CheckBox;
