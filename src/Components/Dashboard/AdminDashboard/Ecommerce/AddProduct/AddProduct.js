import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { multipleImgUpload } from "../../../../API/Api";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import axiosPrivet from "../../../../Hooks/axiosPrivet";
import ProductImage from "./ProductImage";
import BasicInformation from "./BasicInformation";
import toast from "react-hot-toast";
import ScrollBtn from "../../../../Share/ScrollBtn/ScrollBtn";
import AddPhone from "./AddPhone";
import AddLaptop from "./AddLaptop";
import AddComputer from "./AddComputer";
import AddWatch from "./AddWatch";
import AddSpeaker from "./AddSpeaker";
import AddAC from "./AddAC";
import AddHeadPhone from "./AddHeadPhone";
import AddRefrigerator from "./AddRefrigerator";
import AddMonitor from "./AddMonitor";

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

  const selectCategory = watch("category");
  console.log(selectCategory);

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

    const laptopFeatures = {
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

    const laptopInfo = {
      productName: data.productName,
      manufacturerName: data.manufacturerName,
      price: data.Price,
      productCode: data.productCode,
      quantity: data.Quantity,
      category: data.Category,
      manufacturerBrand: data.ManufacturerBrand,
      productDescription: data.ProductDescription,
      metaInfo,
      laptopFeatures,
      images,
    };

    const phoneFeatures = {
      phoneName: data.phoneName,
      releaseDate: data.releaseDate,
      colors: data.colors,
      Network: data.Network,
      SIM: data.SIM,
      WLAN: data.WLAN,
      bluetooth: data.bluetooth,
      GPS: data.GPS,
      radio: data.radio,
      USB: data.USB,
      madeIn: data.madeIn,
      weight: data.weight,
      displaySize: data.displaySize,
      displayResolution: data.displayResolution,
      displayTechnology: data.displayTechnology,
      displayProtection: data.displayProtection,
      displayFeatures: data.displayFeatures,
      backCameraResolution: data.backCameraResolution,
      backCameraFeatures: data.backCameraFeatures,
      backCameraVideoRecording: data.backCameraVideoRecording,
      frontCameraResolution: data.frontCameraResolution,
      frontCameraFeatures: data.frontCameraFeatures,
      frontCameraVideoRecording: data.frontCameraVideoRecording,
      BatteryTypeAndCapacity: data.BatteryTypeAndCapacity,
      operatingSystem: data.operatingSystem,
      chipset: data.chipset,
      RAM: data.RAM,
      processor: data.processor,
      GPU: data.GPU,
      ROM: data.ROM,
      sensors: data.sensors,
    };

    const phoneInfo = {
      productName: data.productName,
      manufacturerName: data.manufacturerName,
      price: data.Price,
      productCode: data.productCode,
      quantity: data.Quantity,
      category: data.Category,
      manufacturerBrand: data.ManufacturerBrand,
      productDescription: data.ProductDescription,
      metaInfo,
      phoneFeatures,
      images,
    };

    // laptop
    if (selectCategory == "laptop") {
      const { data: result } = await axiosPrivet.post("/add-product", laptopInfo);
      if (result.acknowledged) {
        toast.success("success", { id: "success-add" });
        reset();
      }
      console.log(result);
      console.log(laptopInfo);
    }

    // phone
    if (selectCategory == "phone") {
      try {
        const { data: result } = await axiosPrivet.post("/add-product", phoneInfo);
        console.log(result);
        if (result.acknowledged) {
          toast.success("success", { id: "success-add" });
          reset();
        }
      } catch (error) {
        toast.error(error.message);
      }
    }

    const info = { ...data, images };
    console.log(data);
    // without phone and laptop
    if (selectCategory !== "phone" && selectCategory !== "laptop") {
      try {
        const { data: result } = await axiosPrivet.post("/add-product", info);
        console.log(result);
        if (result.acknowledged) {
          toast.success("success", { id: "success-add" });
          reset();
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
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
  console.log(selectCategory);

  return (
    <>
      <div className="p-10 w-full">
        <div className="flex justify-between pb-4">
          <h4 className="uppercase text-[1.4vw]   font-bold">add product</h4>
          <div>
            <div className="text-sm breadcrumbs">
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
              {selectCategory === "computer" && <AddComputer register={register} errors={errors} />}
              {selectCategory === "laptop" && <AddLaptop register={register} errors={errors} />}
              {selectCategory === "phone" && <AddPhone register={register} errors={errors} />}
              {selectCategory === "watch" && <AddWatch register={register} errors={errors} />}
              {selectCategory === "speaker" && <AddSpeaker register={register} errors={errors} />}
              {selectCategory === "headphone" && <AddHeadPhone register={register} />}
              {selectCategory === "AC" && <AddAC register={register} errors={errors} />}
              {selectCategory === "refrigerator" && <AddRefrigerator register={register} />}
              {selectCategory === "monitor" && <AddMonitor register={register} />}
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
                  <div className="form-control pb-4">
                    <label htmlFor="MetaTitle" className="label">
                      <span className="label-text text-xs">Meta Title</span>
                    </label>
                    <input
                      id="MetaTitle"
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      {...register("MetaTitle")}
                    />
                  </div>
                  {/* Meta Keywords */}
                  <div className="form-control pb-4">
                    <label htmlFor="MetaKeywords" className="label">
                      <span className="label-text text-xs">Meta Keywords</span>
                    </label>
                    <input
                      id="MetaKeywords"
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      {...register("MetaKeywords")}
                    />
                  </div>
                </div>
                <div>
                  {/* Meta Description */}
                  <div className="form-control pb-4">
                    <label htmlFor="MetaDescription" className="label">
                      <span className="label-text text-xs">Meta Description</span>
                    </label>
                    <textarea
                      id="MetaDescription"
                      className="textarea textarea-bordered h-[150px]"
                      placeholder=""
                      {...register("MetaDescription")}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Add Product */}
              <div className="flex gap-5 justify-end">
                <button className="btn btn-primary capitalize">cancel</button>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
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
