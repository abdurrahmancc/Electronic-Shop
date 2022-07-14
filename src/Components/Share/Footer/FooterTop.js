import React from "react";
import logo from "../../../assets/logo.png";
import { VscLocation } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import instagram from "../../../assets/instagram.webp";
import "./footerAnimation.css";
import paypalLogo from "../../../assets/paypal-logo.png";
import apply from "../../../assets/apple1.png";
import google from "../../../assets/googlePlay1.png";

const FooterTop = () => {
  return (
    <div className="lg:container mx-auto px-10 lg:px-0">
      <div className="footer grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-10 text-base-content">
        <div>
          <img className="w-4/12" src={logo} alt="" />
          <p>Awesome AWS website template</p>
          <div className="mt-4">
            <div className="flex py-2">
              <span className="text-primary text-xl pr-2">
                <VscLocation />
              </span>
              <span>
                <span className="font-bold">Address:</span>
                <span> Utah 53127 United States</span>
              </span>
            </div>
            <div className="flex py-2">
              <span className="text-primary text-xl pr-2">
                <BsTelephone />
              </span>
              <span>
                <span className="font-bold">Call Us:</span>
                <span> (+91) - 560-025-123555</span>
              </span>
            </div>
            <div className="flex py-2">
              <span className="text-primary text-xl pr-2">
                <AiOutlineMail />
              </span>
              <span>
                <span className="font-bold">Email:</span>
                <span> aws123@gamil.com</span>
              </span>
            </div>
            <div className="flex text-primary pt-10 gap-2">
              <span className="text-xl p-2 border rounded-full bg-primary text-neutral hover:bg-blue-500">
                <FaFacebookF />
              </span>
              <span className="text-xl p-2 border rounded-full bg-primary text-neutral hover:bg-neutral hover:text-blue-400">
                <FaTwitter />
              </span>
              <span className="text-xl p-2 border rounded-full bg-primary text-neutral hover:text-red-500 hover:bg-neutral">
                <FaInstagram />
              </span>
              <span className="text-xl p-2 border rounded-full bg-primary text-neutral hover:bg-red-600 hover:text-neutral">
                <FaPinterestP />
              </span>
              <span className="text-xl p-2 border rounded-full bg-primary text-neutral hover:bg-red-500">
                <FaYoutube />
              </span>
            </div>
          </div>
        </div>
        <div>
          <button className="footer-title">Company</button>
          <a className="link link-hover animate py-2">Delivery Information</a>
          <a className="link link-hover animate py-2">Privacy Policy</a>
          <a className="link link-hover animate py-2">Terms & Conditions</a>
          <a className="link link-hover animate py-2">Support Center</a>
          <a className="link link-hover animate">Careers</a>
        </div>
        <div>
          <span className="footer-title">Account</span>
          <a className="link link-hover animate  py-2">Sign In</a>
          <a className="link link-hover animate py-2">View Cart</a>
          <a className="link link-hover animate py-2">View Cart</a>
          <a className="link link-hover animate py-2">Shipping Details</a>
          <a className="link link-hover animate py-2">Compare products</a>
        </div>
        {/* <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover animate py-2">Terms of use</a>
          <a className="link link-hover animate py-2">Privacy policy</a>
          <a className="link link-hover animate py-2">Cookie policy</a>
        </div> */}
        <div>
          <span className="footer-title">Install App</span>
          <p className="py-2">From App Store or Google Play</p>
          <div className="flex items-center gap-4">
            <div className="relative hover:top-[-4px] top-0 ease-in-out duration-200 ">
              <img className="max-h-12 w-auto " src={apply} alt="" />
            </div>
            <div className="relative hover:top-[-4px] top-0 ease-in-out duration-200 ">
              <img className="max-h-12 w-auto" src={google} alt="" />
            </div>
          </div>
          <p className="pt-6">Secured Payment Gateways</p>
          <img className=" max-h-24 w-auto" src={paypalLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
