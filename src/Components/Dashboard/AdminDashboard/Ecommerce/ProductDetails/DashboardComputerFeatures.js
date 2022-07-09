import React from "react";

const DashboardComputerFeatures = ({ data }) => {
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
        {data?.memory && (
          <span className="text-lg">
            Ram: <span className="capitalize">{data?.memory}</span>
          </span>
        )}
        {data?.storage && (
          <span className="text-lg">
            Storage: <span className="capitalize">{data?.storage}</span>
          </span>
        )}
        {data?.graphics && (
          <span className="text-lg">
            Graphics: <span className="capitalize">{data?.graphics}</span>
          </span>
        )}
        {data?.motherboard && (
          <span className="text-lg">
            Motherboard: <span className="capitalize">{data?.motherboard}</span>
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

export default DashboardComputerFeatures;
