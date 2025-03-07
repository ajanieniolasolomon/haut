
import React from "react";
import { useTransitionRouter } from 'next-view-transitions'

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {


  const slideInOut = () => {
    document.documentElement.animate(
      [
        {

          opacity: 1,
          transform: "translateY(0)"
        },
        {

          opacity: 0.2,
          transform: "translateY(-35%)"
        }
      ], {
      duration: 1500,
      easing: "cubic-bezier(0.87,0,0.13,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)"
    }
    );
    document.documentElement.animate(
      [
        {

          clipPath: "polygon(0% 100% ,100% 100%,100% 100%,0% 100%)",

        },
        {

          clipPath: "polygon(0% 100% ,100% 100%,100% 0%,0% 0%)",
        }
      ], {
      duration: 1500,
      easing: "cubic-bezier(0.87,0,0.13,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)"
    }
    );

  }

  const router = useTransitionRouter()
  return (
    <div className="  bg-primary  md:h-[400px] h-full px-[5%] py-[2%]    flex flex-col ">
      <div className="  md:h-[380px] h-full gap-6 grid md:grid-cols-5 grid-cols-2">
        <div className=" flex flex-col gap-6 md:col-span-1 col-span-2">
          <div className=" md:m-0 m-auto">
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
          <a href="/about" onClick={(e) => {
            e.preventDefault()
            router.push("/about", {
              onTransitionReady: slideInOut
            })
          }} className="text-[14px] text-white font-[500] opacity-[80%] capitalize">
            About Us
          </a>
          <a href="/privacy" onClick={(e) => {
            e.preventDefault()
            router.push("/privacy", {
              onTransitionReady: slideInOut
            })
          }} className="text-[14px] text-white font-[500] opacity-[80%] capitalize">
            Privacy & Policy
          </a>
          <p className="text-[14px] text-white font-[500] opacity-[80%] capitalize">
            Request Demo
          </p>
        </div>
        <div className=" flex flex-col gap-6">
          <h3 className="text-[14px] text-white font-[200] opacity-[40%] capitalize">
            Legal
          </h3>
          <a href="/terms"

            onClick={(e) => {
              e.preventDefault()
              router.push("/terms", {
                onTransitionReady: slideInOut
              })
            }}

            className="text-[14px] text-white font-[500] opacity-[80%] capitalize">
            Terms and Conditions
          </a>
        </div>
        <div className=" flex flex-col gap-6">
          <h3 className="text-[14px] text-white font-[200] opacity-[40%] capitalize">
            Social Media
          </h3>
          <p
            onClick={() =>
              window.open(
                "https://www.instagram.com/demicareng",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="text-[14px] cursor-pointer text-white font-[500] flex gap-2 items-center opacity-[80%] capitalize"
          >
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
      <div className="w-[100%]    md:h-[20px] h-full md:my-0 mt-[50px]">
        <h3 className="text-center text-white opacity-[40%] text-[14px]  font-[500]">
          © 2025 — Copyright
        </h3>
      </div>
    </div>
  );
}
