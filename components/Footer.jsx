import React from "react";


import {  FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="  bg-primary  md:h-[750px] h-full p-[10%] md:gap-0 gap-6 grid md:grid-cols-2 grid-cols-1">
      <div className=" flex flex-col gap-6">
        <div>
          <h1 className="text-[20px] text-white"> Name</h1>
          <input
            type="text"
            className="bg-white outline-none p-4 rounded-lg w-full"
            placeholder="john smith"
          />
        </div>
        <div>
          <h1 className="text-[20px] text-white"> Email</h1>
          <input
            type="email"
            className="bg-white outline-none p-4 rounded-lg w-full"
            placeholder="mail@example.com"
          />
        </div>
        <div>
          <h1 className="text-[20px] text-white"> Message</h1>
          <textarea
            className="bg-white outline-none p-4 rounded-lg w-full h-[100px]"
            placeholder="Type something"
            name=""
            id=""
          ></textarea>
        </div>
        <div>
          <h6 className="text-white text-[20px]">
            Please read our{" "}
            <a className="underline underline-offset-4" href="/">
              Privacy Notice
            </a>{" "}
          </h6>
        </div>
        <div className="">
          <button className="border p-4 px-12 md:w-[50%] w-[100%] font-bold rounded-full  text-white bg-primary">
            SUBMIT
          </button>
        </div>
      </div>
      <div className=" flex flex-col gap-6 md:text-right text-left text-white">
        <h1 className="text-[40px]  ">Contact Us </h1>
        <div>
          <h4 className="text-[12px]">Send us an e-mail</h4>
          <h4 className="text-[20px]">team@haut.ai</h4>
        </div>
        <div>
          <h4 className="text-[12px]">Press request</h4>
          <h4 className="text-[20px]">press@haut.ai</h4>
        </div>
        <div>
          <h4 className="text-[20px]">Tallinn, Estonia</h4>
        </div>
        <div className="flex gap-4  md:justify-end justify-start ">
          <FaYoutube size={30} />
          <FaFacebook size={30} />
          <FaLinkedin size={30} />
          <FaXTwitter size={30} />
          <FaInstagram size={30} />
        </div>
        <div>
          <h4 className="text-[12px]">© Copyright Haut.AI 2024.</h4>
          <h4 className="text-[14px]">
            {" "}
            <span className="underline underline-offset-2">
              Privacy Notice
            </span>{" "}
            and <span className="underline underline-offset-2">Terms & Conditions</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
