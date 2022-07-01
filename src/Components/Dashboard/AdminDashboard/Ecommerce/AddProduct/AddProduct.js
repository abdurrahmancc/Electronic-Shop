import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { multipleImgUpload } from "../../../../API/Api";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import Computer from "./Computer";
import axiosPrivet from "../../../../Hooks/axiosPrivet";
import ProductImage from "./ProductImage";
import BasicInformation from "./BasicInformation";
import toast from "react-hot-toast";
import ScrollBtn from "../../../../Share/ScrollBtn/ScrollBtn";

const AddProduct = () => {
  const [uploadAImage, setUploadAImage] = useState(true);
  const [imageUrl, setImageUrl] = useState(false);
  const [multipleImageUrl, setMultipleImageUrl] = useState(false);
  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/add-product", name: "add-product" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let images;
    if (uploadAImage) {
      const inputImages = data.inputImage[0];
      const formData = new FormData();
      // for (let i = 0; i < inputImages.length; i++) {
      //   formData.append("image", inputImages[i]);
      // }
      formData.append("image", inputImages);
      const image = await multipleImgUpload(formData);
      images = { ImageURL1: image.data.url };
    } else if (imageUrl) {
      images = { ImageURL1: data.anImageURL };
    } else {
      images = {
        ImageURL1: data.firstImageURL,
        ImageURL2: data.secondImageURL,
        ImageURL3: data.thirdImageURL,
        ImageURL4: data.fourthImageURL,
      };
    }
    if (images) {
    }
    const features = {
      processor: data.Processor,
      MPN: data.MPN,
      model: data.model,
      memory: data.memory,
      storage: data.storage,
      graphics: data.graphics,
      chipset: data.Chipset,
      operating: data.operating,
      color: data.color,
      display: data.display,
      adapter: data.adapter,
      audio: data.audio,
      specialFeature: data.specialFeature,
      keyboard: data.keyboard,
      webCam: data.webCam,
      cardReader: data.cardReader,
      warranty: data.warranty,
      lanWiFi: data.lanWiFi,
    };
    const metaInfo = {
      metaTitle: data.MetaTitle,
      metaKeywords: data.MetaKeywords,
      metaDescription: data.MetaDescription,
    };

    const info = {
      productName: data.productName,
      manufacturerName: data.manufacturerName,
      price: data.Price,
      productCode: data.productCode,
      quantity: data.Quantity,
      category: data.Category,
      manufacturerBrand: data.ManufacturerBrand,
      productDescription: data.ProductDescription,
      metaInfo,
      features,
      images,
    };
    console.log(info);
    const { data: result } = await axiosPrivet.post("/add-product", info);
    if (result.acknowledged) {
      toast.success("success", { id: "success-add" });
      reset();
    }

    console.log(result);
  };

  const handleUploadAImage = () => {
    setUploadAImage(true);
    setImageUrl(false);
    setMultipleImageUrl(false);
  };
  const handleImageUrl = () => {
    setUploadAImage(false);
    setImageUrl(true);
    setMultipleImageUrl(false);
  };
  const handleMultipleImage = () => {
    setUploadAImage(false);
    setImageUrl(false);
    setMultipleImageUrl(true);
  };

  const info = {
    handleUploadAImage,
    uploadAImage,
    handleImageUrl,
    imageUrl,
    handleMultipleImage,
    multipleImageUrl,
    register,
    errors,
    watch,
    reset,
  };
  return (
    <>
      <div className="p-10 w-full">
        <div className="flex justify-between pb-4">
          <h4 className="uppercase text-[1.4vw]   font-bold">add product</h4>
          <div>
            <div class="text-sm breadcrumbs">
              <Breadcrumb crumbs={crumbs} />
            </div>
          </div>
        </div>
        {/* basic information */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-base-100 p-5 rounded-md">
              <div className="pb-6">
                <h4 className="capitalize text-xl font-bold ">basic information</h4>
                <span className="text-xs ">Fill all information below</span>
              </div>
              <BasicInformation register={register} errors={errors} />
            </div>
            {/* Computer component */}
            <div className="pt-5">
              <Computer register={register} errors={errors} />
            </div>
            {/* Product Images */}
            <div className="py-5">
              <ProductImage>{info}</ProductImage>
            </div>
            {/* Meta Data */}
            <div className="bg-base-100 p-5 rounded-md">
              <div className="pb-6">
                <h4 className="capitalize text-xl font-bold">Meta Data</h4>
                <span className="text-xs ">Fill all information below</span>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                <div>
                  {/* Meta Title */}
                  <div class="form-control pb-4">
                    <label htmlFor="MetaTitle" class="label">
                      <span class="label-text text-xs">Meta Title</span>
                    </label>
                    <input
                      id="MetaTitle"
                      type="text"
                      placeholder=""
                      class="input input-bordered"
                      {...register("MetaTitle")}
                    />
                  </div>
                  {/* Meta Keywords */}
                  <div class="form-control pb-4">
                    <label htmlFor="MetaKeywords" class="label">
                      <span class="label-text text-xs">Meta Keywords</span>
                    </label>
                    <input
                      id="MetaKeywords"
                      type="text"
                      placeholder=""
                      class="input input-bordered"
                      {...register("MetaKeywords")}
                    />
                  </div>
                </div>
                <div>
                  {/* Meta Description */}
                  <div class="form-control pb-4">
                    <label htmlFor="MetaDescription" class="label">
                      <span class="label-text text-xs">Meta Description</span>
                    </label>
                    <textarea
                      id="MetaDescription"
                      class="textarea textarea-bordered h-[150px]"
                      placeholder=""
                      {...register("MetaDescription")}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Add Product */}
              <div className="flex gap-5">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
                <button className="btn btn-primary capitalize">cancel</button>
              </div>
            </div>
          </form>
        </div>
        <ScrollBtn />
      </div>
    </>
  );
};

export default AddProduct;
