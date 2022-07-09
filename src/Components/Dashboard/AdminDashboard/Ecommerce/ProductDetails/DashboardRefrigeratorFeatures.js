import React from "react";

const DashboardRefrigeratorFeatures = ({ data }) => {
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

        {data?.totalCapacity && (
          <span className="text-lg">
            Total Capacity: <span className="capitalize">{data?.totalCapacity}</span>
          </span>
        )}
        {data?.height && (
          <span className="text-lg">
            Height: <span className="capitalize">{data?.height}</span>
          </span>
        )}
        {data?.depth && (
          <span className="text-lg">
            Depth: <span className="capitalize">{data?.depth}</span>
          </span>
        )}
        {data?.color && (
          <span className="text-lg">
            Color: <span className="capitalize">{data?.color}</span>
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

export default DashboardRefrigeratorFeatures;
