import React from "react";

const PhoneFeatures = ({ data }) => {
  return (
    <>
      <div className="mt-5 flex flex-col gap-2">
        {data?.manufacturerBrand?.MPN && (
          <span className="text-lg">
            MPN: <span className="capitalize">{data?.manufacturerBrand?.MPN}</span>
          </span>
        )}
        {data?.manufacturerBrand && (
          <span className="text-lg">
            Brand: <span className="capitalize">{data?.manufacturerBrand}</span>
          </span>
        )}
        {data?.phoneFeatures?.processor && (
          <span className="text-lg">
            Processor: <span className="capitalize">{data?.phoneFeatures?.processor}</span>
          </span>
        )}
        {data?.phoneFeatures?.RAM && (
          <span className="text-lg">
            RAM: <span className="capitalize">{data?.phoneFeatures?.RAM}</span>
          </span>
        )}
        {data?.phoneFeatures?.ROM && (
          <span className="text-lg">
            ROM: <span className="capitalize">{data?.phoneFeatures?.ROM}</span>
          </span>
        )}
        {data?.phoneFeatures?.displayResolution && (
          <span className="text-lg">
            Display: <span className="capitalize">{data?.phoneFeatures?.displayResolution}</span>
          </span>
        )}
        {data?.phoneFeatures?.colors && (
          <span className="text-lg">
            Color: <span className="capitalize">{data?.phoneFeatures?.colors}</span>
          </span>
        )}
      </div>
    </>
  );
};

export default PhoneFeatures;
