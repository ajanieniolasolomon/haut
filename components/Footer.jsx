import React from "react";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="  bg-primary  md:h-[400px] h-full px-[5%] py-[2%]    flex flex-col">
      <div className="  md:h-[380px] h-full gap-6 grid md:grid-cols-5 grid-cols-2">
        <div className=" flex flex-col gap-6 md:col-span-1 col-span-2">
          <div className="">
            <img src={"/logo2.svg"} alt="" className="w-[100px]" />
            {/* <p className="text-[24px] font-[500] text-white ">Demi Care</p> */}
          </div>
          <button className="bg-white font-[200] rounded-[30px] h-[56px] text-primary text-[18px]">
            Request Demo
          </button>
        </div>
        <div className=" flex flex-col gap-6">
          <h3 className="text-[14px] text-white font-[200] opacity-[40%] capitalize">
            Get the app
          </h3>
          <p className="text-[14px] text-white font-[500] opacity-[80%] capitalize">
            Download on iOS
          </p>
        </div>
        <div className=" flex flex-col gap-6">
          <h3 className="text-[14px] text-white font-[200] opacity-[40%] capitalize">
            Company
          </h3>
          <p className="text-[14px] text-white font-[500] opacity-[80%] capitalize">
            About Us
          </p>
          <p className="text-[14px] text-white font-[500] opacity-[80%] capitalize">
            Our Service
          </p>
          <p className="text-[14px] text-white font-[500] opacity-[80%] capitalize">
            Request Demo
          </p>
        </div>
        <div className=" flex flex-col gap-6">
          <h3 className="text-[14px] text-white font-[200] opacity-[40%] capitalize">
            Legal
          </h3>
          <p className="text-[14px] text-white font-[500] opacity-[80%] capitalize">
            Terms and Conditions
          </p>
        </div>
        <div className=" flex flex-col gap-6">
          <h3 className="text-[14px] text-white font-[200] opacity-[40%] capitalize">
            Social Media
          </h3>
          <p className="text-[14px] text-white font-[500] flex gap-2 items-center opacity-[80%] capitalize">
            <FaInstagram size={24} />
            <span>Instagram</span>
          </p>
          <p className="text-[14px] text-white font-[500] flex gap-2 items-center opacity-[80%] capitalize">
            <FaYoutube size={24} />
            <span>Youtube</span>
          </p>
          <p className="text-[14px] text-white font-[500] flex gap-2 items-center opacity-[80%] capitalize">
            <FaXTwitter size={24} />
            <span>X (Twitter)</span>
          </p>
          <p className="text-[14px] text-white font-[500] flex gap-2 items-center opacity-[80%] capitalize">
            <FaFacebook size={24} />
            <span>Facebook</span>
          </p>
        </div>
      </div>
      <div className="w-[100%]    md:h-[20px] h-full md:my-0 mt-[30px]">
        <h3 className="text-center text-white opacity-[40%] text-[14px]  font-[500]">
          © 2025 — Copyright
        </h3>
      </div>
    </div>
  );
}
