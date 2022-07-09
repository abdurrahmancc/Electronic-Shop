import React from "react";

const DashboardLaptopFeatures = ({ data }) => {
  return (
    <>
      <div className="mt-5 flex flex-col gap-2">
        {data?.features?.MPN && (
          <span className="text-lg">
            MPN: <span className="capitalize">{data?.features?.MPN}</span>
          </span>
        )}
        {data?.features?.model && (
          <span className="text-lg">
            Model: <span className="capitalize">{data?.features?.model}</span>
          </span>
        )}
        {data?.features?.processor && (
          <span className="text-lg">
            Processor: <span className="capitalize">{data?.features?.processor}</span>
          </span>
        )}
        {data?.features?.memory && (
          <span className="text-lg">
            RAM: <span className="capitalize">{data?.features?.memory}</span>
          </span>
        )}
        {data?.features?.storage && (
          <span className="text-lg">
            Storage: <span className="capitalize">{data?.features?.storage}</span>
          </span>
        )}
        {data?.features?.display && (
          <span className="text-lg">
            Display: <span className="capitalize">{data?.features?.display}</span>
          </span>
        )}
        {data?.features?.color && (
          <span className="text-lg">
            Color: <span className="capitalize">{data?.features?.color}</span>
          </span>
        )}
      </div>
    </>
  );
};

export default DashboardLaptopFeatures;
