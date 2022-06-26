import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaLock, FaUser } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import auth from "../../Share/Firebase/Firebase";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
import Loading from "../../Share/Loading/Loading";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] = useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || gUser || eUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  if (loading || eLoading || gLoading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(data);
    await signInWithEmailAndPassword(email, password);
  };

  if (token) {
    navigate(from, { replace: true });
  }

  // console.log(token)

  return (
    <div class="hero min-h-screen bg-[#58448F]">
      <div class="hero-content w-full flex-col">
        <div className="absolute top-5 lg:left-10 left-4">
          <span
            onClick={() => window.history.back()}
            className="text-white text-lg hover:cursor-pointer  flex justify-center items-center"
          >
            <IoIosArrowRoundBack className=" text-3xl" />
            <span>Back</span>
          </span>
        </div>
        <div className="lg:pb-12">
          <Link to={"/"} className={"flex justify-center"}>
            {" "}
            <img className="w-4/12" src={logo} alt="" />
          </Link>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
          <div class="card-body text-accent">
            <h3 className="text-center text-lg font-bold text-accent">Login to your account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control">
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
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover text-accent hover:text-primary">
                    Forgot password?
                  </a>
                </label>
              </div>
              {eError && <span className="text-red-500 label-text-alt">{eError?.message}</span>}
              <div class="form-control mt-4">
                <button
                  type="submit"
                  class="btn text-neutral bg-gradient-to-r from-[#63467F] to-[#83508C]"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <hr className="px-0" />
          <div className="py-4">
            <p className="text-center text-lg">
              New to aws?{" "}
              <Link to={"/register"} className="text-[#58448F] pl-2 underline cursor-pointer">
                Create an account
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-5 text-lg flex-col">
          <span
            onClick={() => signInWithGoogle()}
            className="relative bottom-0 z-50 text-neutral cursor-pointer underline"
          >
            Continue with google
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
