import React from "react";
import DashboardImagesModal from "./DashboardImagesModal";
import ReactDOM from "react-dom";
import ReactImageZoom from "react-image-zoom";

const ProductDetailsImages = ({ data }) => {
  return (
    <>
      <div className="flex justify-center">
        {data?.images?.ImageURL1 && (
          <figure className="">
            <img width="540px" className=" h-auto" src={data?.images?.ImageURL1} alt="" />
          </figure>
        )}
      </div>
      <div className="mt-10 flex justify-center max-w-[540px] mx-auto gap-x-4">
        {data?.images?.ImageURL1 && (
          <div>
            <figure className="border-2 border-gray-500">
              <label for="dashboardImageURL1" className="">
                <img width="127px" className=" h-auto" src={data?.images?.ImageURL1} alt="" />
              </label>
            </figure>
            <DashboardImagesModal modal={"dashboardImageURL1"} img={data?.images?.ImageURL1} />
          </div>
        )}
        {data?.images?.ImageURL2 && (
          <div>
            <figure className="border-2 border-gray-500">
              <label for="dashboardImageURL2" className="">
                <img width="127px" className=" h-auto" src={data?.images?.ImageURL2} alt="" />
              </label>
            </figure>
            <DashboardImagesModal modal={"dashboardImageURL2"} img={data?.images?.ImageURL2} />
          </div>
        )}
        {data?.images?.ImageURL3 && (
          <div>
            <figure className="border-2 border-gray-500">
              <label for="dashboardImageURL3" className="">
                <img width="127px" className=" h-auto" src={data?.images?.ImageURL3} alt="" />
              </label>
            </figure>
            <DashboardImagesModal modal={"dashboardImageURL3"} img={data?.images?.ImageURL3} />
          </div>
        )}
        {data?.images?.ImageURL4 && (
          <div>
            <figure className="border-2 border-gray-500">
              <label for="dashboardImageURL4" className="">
                <img width="127px" className=" h-auto" src={data?.images?.ImageURL4} alt="" />
              </label>
            </figure>
            <DashboardImagesModal modal={"dashboardImageURL4"} img={data?.images?.ImageURL4} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailsImages;
