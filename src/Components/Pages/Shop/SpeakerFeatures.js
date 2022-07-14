import React from "react";

const SpeakerFeatures = ({ data }) => {
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
        {data?.power && (
          <span className="text-lg">
            Power: <span className="capitalize">{data?.power}</span>
          </span>
        )}
        {data?.weight && (
          <span className="text-lg">
            Weight: <span className="capitalize">{data?.weight}</span>
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

export default SpeakerFeatures;
