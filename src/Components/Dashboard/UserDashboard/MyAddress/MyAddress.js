import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "react-query";
import axiosPrivet from "../../../Hooks/axiosPrivet";
import auth from "../../../Share/Firebase/Firebase";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../Share/Loading/Loading";

const MyAddress = () => {
  const [user, loading] = useAuthState(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  const { data, isLoading, refetch } = useQuery(["profileDetails", user], () =>
    axiosPrivet.get(`profileDetails/${user?.email}`)
  );

  if (loading || isLoading || updating) {
    return <Loading />;
  }
  return (
    <div className=" w-full">
      <div className="mx-10 myProfile mt-3 rounded">
        <div className="flex justify-between items-center w-full px-10 py-5 border-b">
          <h4 className="text-2xl font-bold">My Profile</h4>
          <h4 className="flex justify-between items-center gap-2 cursor-pointer">
            <span> Edit</span>
            <span>
              <FaEdit />
            </span>
          </h4>
        </div>
        <div className="p-10">
          <div>
            <h4 className="text-xl font-bold mb-3 text-primary">Present Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
              <div className="flex flex-col leading-7">
                <label htmlFor="country">Your Country</label>
                <span className="text-lg">Bangladesh</span>
              </div>
              <div className="flex flex-col leading-7">
                <label htmlFor="country">District</label>
                <span className="text-lg">Nawabganj</span>
              </div>
              <div className="flex flex-col leading-7">
                <label htmlFor="country">Street Address</label>
                <span className="text-lg">Baliadanga Bazar, Chapai Nawabganj, Rajshahi</span>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-xl font-bold mb-3 text-primary">Present Address</h4>
              <div className="grid grid-cols-2 gap-y-10">
                <div className="flex flex-col leading-7">
                  <label htmlFor="country">Your Country</label>
                  <span className="text-lg">Bangladesh</span>
                </div>
                <div className="flex flex-col leading-7">
                  <label htmlFor="country">District</label>
                  <span className="text-lg">Nawabganj</span>
                </div>
                <div className="flex flex-col leading-7">
                  <label htmlFor="country">Street Address</label>
                  <span className="text-lg">Baliadanga Bazar, Chapai Nawabganj, Rajshahi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
