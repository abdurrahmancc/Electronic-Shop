import React from "react";

const WatchFeatures = ({ data }) => {
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
            model: <span className="capitalize">{data?.model}</span>
          </span>
        )}
        {data?.manufacturerBrand && (
          <span className="text-lg">
            Brand: <span className="capitalize">{data?.manufacturerBrand}</span>
          </span>
        )}
        {data?.gender && (
          <span className="text-lg">
            Gender: <span className="capitalize">{data?.gender}</span>
          </span>
        )}
        {data?.batteryTypeAndCapacity && (
          <span className="text-lg">
            Battery: <span className="capitalize">{data?.batteryTypeAndCapacity}</span>
          </span>
        )}
        {data?.displayType && (
          <span className="text-lg">
            Display Type: <span className="capitalize">{data?.displayType}</span>
          </span>
        )}
        {data?.colors && (
          <span className="text-lg">
            Color: <span className="capitalize">{data?.colors}</span>
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

export default WatchFeatures;
