import React from "react";

const HeadphoneFeatures = ({ data }) => {
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
        {data?.frequencyRange && (
          <span className="text-lg">
            Frequency Range: <span className="capitalize">{data?.frequencyRange}</span>
          </span>
        )}
        {data?.cable && (
          <span className="text-lg">
            Cable: <span className="capitalize">{data?.cable}</span>
          </span>
        )}
        {data?.inputJack && (
          <span className="text-lg">
            Input Jack: <span className="capitalize">{data?.inputJack}</span>
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

export default HeadphoneFeatures;
