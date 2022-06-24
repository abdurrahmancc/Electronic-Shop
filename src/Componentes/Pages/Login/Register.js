import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaLock, FaUser } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import auth from "../../Share/Firebase/Firebase";
import toast from "react-hot-toast";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
import Loading from "../../Share/Loading/Loading";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [matchingPass, setMatchingPass] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const [checkBoxToggle, setCheckBoxToggle] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const confirmPassword = data.confirmPassword;
    const password = data.password;
    const displayName = data.name;
    if (password !== confirmPassword) {
      setMatchingPass("Password does not match");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    toast("check email and please verify");
  };
  if (updating || loading) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div class="hero min-h-screen bg-[#58448F]">
      <div class="hero-content w-full flex-col">
        <div className="absolute top-5 left-10">
          <span
            onClick={() => window.history.back()}
            className="text-white text-lg hover:cursor-pointer  flex justify-center items-center"
          >
            <IoIosArrowRoundBack className=" text-3xl" />
            <span>Back</span>
          </span>
        </div>
        <div className=" pb-12">
          <Link to={"/"} className={"flex justify-center"}>
            {" "}
            <img className="w-4/12" src={logo} alt="" />
          </Link>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
          <div class="card-body text-accent">
            <h3 className="text-center text-lg font-bold text-accent">Login to your account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control mt-2">
                <label class="label relative pb-0">
                  <span class="label-text text-accent">Full name</span>
                  <span className="absolute top-11 left-2 border-r  border-gray-400 pr-2 text-[#58448F]">
                    <FaUser />
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  class="input border-[#58448F]  bg-white input-bordered pl-10"
                  {...register("name", {
                    required: { value: true, message: "Name is require" },
                    pattern: {
                      value: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
                      message: "Provide a valid name",
                    },
                  })}
                />
                {errors.name?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.name?.message}
                  </span>
                )}
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.name?.message}
                  </span>
                )}
              </div>
              <div class="form-control mt-2">
                <label class="label relative pb-0">
                  <span class="label-text text-accent">Email</span>
                  <span className="absolute top-11 left-2 border-r  border-gray-400 pr-2 text-[#58448F]">
                    <FaUser />
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  class="input border-[#58448F]  bg-white input-bordered pl-10"
                  {...register("email", {
                    required: { value: true, message: "Email is require" },
                    pattern: {
                      value:
                        /^[\w-']+(\.[\w-']+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.email?.message}
                  </span>
                )}
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <div class="form-control mt-2">
                <label class="label relative pb-0">
                  <span class="label-text text-accent">Password</span>
                  <div>
                    <div className="absolute top-11 left-2 border-r  text-[#58448F] border-gray-400 pr-2">
                      <FaLock />
                    </div>
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="text-lg absolute right-3 top-11 text-[#58448F]"
                    >
                      <AiFillEyeInvisible className={`${showPass || "hidden"} `} />{" "}
                      <AiFillEye className={`${showPass && "hidden"} `} />
                    </div>
                  </div>
                </label>
                <input
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="password"
                  class="input bg-white border-[#58448F] pl-10 input-bordered"
                  {...register("password", {
                    required: { value: true, message: "password is require" },
                    pattern: {
                      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      message:
                        "must be one uppercase, one lowercase  letters, one special character, one digit, and a total length of 8",
                    },
                  })}
                />
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div class="form-control mt-2">
                <label class="label relative pb-0">
                  <span class="label-text text-accent">Confirm Password</span>
                  <div>
                    <div className="absolute top-11 left-2 border-r  text-[#58448F] border-gray-400 pr-2">
                      <FaLock />
                    </div>
                    <div
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      className="text-lg absolute right-3 top-11 text-[#58448F]"
                    >
                      <AiFillEyeInvisible className={`${showConfirmPass || "hidden"} `} />{" "}
                      <AiFillEye className={`${showConfirmPass && "hidden"} `} />
                    </div>
                  </div>
                </label>
                <input
                  type={`${showConfirmPass ? "text" : "password"}`}
                  placeholder="confirm password"
                  class="input bg-white border-[#58448F] pl-10 input-bordered"
                  {...register("confirmPassword", {
                    required: { value: true, message: "Confirm Password is require" },
                    pattern: {
                      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      message:
                        "must be one uppercase, one lowercase  letters, one special character, one digit, and a total length of 8",
                    },
                  })}
                />
                {errors.confirmPassword?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                )}
                {errors.confirmPassword?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-5">
                  <input
                    onClick={() => setCheckBoxToggle(!checkBoxToggle)}
                    type="checkbox"
                    checked={`${checkBoxToggle ? "checked" : ""}`}
                    class="checkbox-xs "
                  />
                  <span class="label-text">Accept Terms & Condition</span>
                </label>
              </div>
              {matchingPass && <span className="text-red-500 leb">{matchingPass}</span>}
              {error && <span className="text-red-500 leb">{error?.message}</span>}
              {updatingError && <span className="text-red-500 leb">{updatingError?.message}</span>}

              <div class="form-control mt-4 ">
                <button
                  type="submit"
                  disabled={!checkBoxToggle}
                  class="btn text-neutral  bg-gradient-to-r from-[#63467F] to-[#83508C]"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <hr className="px-0" />
          <div className="py-4">
            <p className="text-center text-lg">
              Already have an account?
              <Link to={"/login"} className="text-[#58448F] pl-2 underline cursor-pointer">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
