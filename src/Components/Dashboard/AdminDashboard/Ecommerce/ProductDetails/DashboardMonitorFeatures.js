import React from "react";

const DashboardMonitorFeatures = ({ data }) => {
  return (
    <>
      <div className="mt-5 flex flex-col gap-2">
        {data?.MPN && (
          <span className="text-lg">
            MPN: <span className="capitalize">{data?.MPN}</span>
          </span>
        )}
        {data?.model && (
          <span className="text-lg">
            Model: <span className="capitalize">{data?.model}</span>
          </span>
        )}
        {data?.manufacturerBrand && (
          <span className="text-lg">
            Brand: <span className="capitalize">{data?.manufacturerBrand}</span>
          </span>
        )}
        {data?.color && (
          <span className="text-lg">
            Color: <span className="capitalize">{data?.color}</span>
          </span>
        )}
        {data?.screenSize && (
          <span className="text-lg">
            Screen Size: <span className="capitalize">{data?.screenSize}</span>
          </span>
        )}
        {data?.resolution && (
          <span className="text-lg">
            Resolution: <span className="capitalize">{data?.resolution}</span>
          </span>
        )}
        {data?.warranty && (
          <span className="text-lg">
            Warranty: <span className="capitalize">{data?.warranty}</span>
          </span>
        )}
      </div>
    </>
  );
};

export default DashboardMonitorFeatures;
