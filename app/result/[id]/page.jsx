"use client";

import React from "react";
import { useForm } from "react-hook-form";

const Result = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };
  // console.log(params)

  const name = 'olamide'
  if (typeof name === 'string') {
    return (
      <div className="p-4 md:p-[5%]  md:mt-[95px] flex flex-col gap-6">
        <h3 className="text-primary md:text-[24px] text-[14px] font-[700] ">
          {`Hello ${name}`}
         
        </h3>

        <div className=" md:flex  md:flex-row flex flex-col ">
          <div className=" md:w-[50%] md:flex md:gap-6   md:flex-row flex flex-col">
            <h3 className="text-[#5F5F5F] md:text-[24px] text-[14px] font-[400]">
              Skin Analysis:
            </h3>
            <div className="flex flex-col gap-2 text-black text-[18px]">
              <h6>Acne</h6>
              <h6>Hyperpigmentation</h6>
              <h6>Dryness / Dehydration</h6>
            </div>
          </div>
          <img src="/user.svg" className="md:w-[50%] h-[100%] " alt="" />
        </div>

        <div className=" w-[100%] flex flex-col gap-4">
          <h3 className="text-black md:text-[24px] text-[14px] font-[400]">
            Skincare Recommendations:
          </h3>
          <div className="border border-[#CAC4D0] rounded-[8px] md:flex p-4 gap-4 md:flex-row flex flex-col">
            <img src="/recommend1.svg" className="md:w-[50%] h-full " alt="" />
            <div className="flex flex-col gap-2 md:w-[50%] h-full">
              <h3 className="text-primary md:text-[24px] text-[14px] font-[400]">
                Acne Defense Essential Kit
              </h3>

              <div className="flex flex-col gap-2">
                <h3 className="text-black md:text-[24px] text-[14px] font-[500]">
                  Key ingredient:
                </h3>
                <div className="text-[#5F5F5F] text-[14px] font-[400]">
                  5% Benzoyl Peroxide Serum 10% dual-acid Azelaic Acid Clarifies
                  pores and reduces inflammation Tranexamic Acid fades the
                  appearance of hyperpigmentation.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[100%] flex flex-col gap-4">
          {/* <h3 className="text-black md:text-[24px] text-[14px] font-[400]">
            Skincare Recommendations:
          </h3> */}
          <div className="border border-[#CAC4D0] rounded-[8px] md:flex p-4 gap-4 md:flex-row flex flex-col">
            <img src="/recommend2.svg" className="md:w-[50%] h-full " alt="" />
            <div className="flex flex-col gap-2 md:w-[50%] h-full">
              <h3 className="text-primary md:text-[24px] text-[14px] font-[400]">
                Advanced Even Tone Day & Night Treatment
              </h3>

              <div className="flex flex-col gap-2">
                <h3 className="text-black md:text-[24px] text-[14px] font-[500]">
                  Key ingredient:
                </h3>
                <div className="text-[#5F5F5F] text-[14px] font-[400]">
                  <p>3% Tranexamic Acid</p>
                  <p>5% Niacinamide</p>
                  <p> 2% Kojic Acid</p>
                  <p> 5% Glycolic Acid</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[100%] flex flex-col gap-4">
          {/* <h3 className="text-black md:text-[24px] text-[14px] font-[400]">
            Skincare Recommendations:
          </h3> */}
          <div className="border border-[#CAC4D0] rounded-[8px] md:flex p-4 gap-4  md:flex-row flex flex-col">
            <img src="/recommend3.svg" className="md:w-[50%] h-full " alt="" />
            <div className="flex flex-col gap-2 md:w-[50%] h-full">
              <h3 className="text-primary md:text-[24px] text-[14px] font-[400]">
                Men's Ingrown Hair Duo
              </h3>

              <div className="flex flex-col gap-2">
                <h3 className="text-black md:text-[24px] text-[14px] font-[500]">
                  Key ingredient:
                </h3>
                <div className="text-[#5F5F5F] text-[14px] font-[400]">
                  Niacinamide (Vitamin B3) Benzoyl Peroxide to s Soothe razor
                  irritation, reduce inflammation, and ultimately reveal
                  clearer, smoother skin.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[100%]">
          <h3 className="md:text-[24px] text-[14px] font-[400] text-black">
            Food to Avoid
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="  w-[100%] rounded-[4px] flex flex-col gap-2">
              <img
                src="/dairy.svg"
                className="w-[100%] md:h-full h-[200px] "
                alt=""
              />
              <h3 className="md:text-[24px] text-center text-[12px] font-[400]">
                Dairy
              </h3>
            </div>
            <div className=" w-[100%] rounded-[4px] flex flex-col gap-2 ">
              <img
                src="/sugar.svg"
                className="w-[100%] md:h-full h-[200px] "
                alt=""
              />
              <h3 className="md:text-[24px] text-center text-[12px] font-[400]">
                Excessive sugar
              </h3>
            </div>
            <div className=" w-[100%] rounded-[4px] flex flex-col gap-2">
              <img
                src="/pfoods.svg"
                className="w-[100%] md:h-full h-[200px] "
                alt=""
              />
              <h3 className="md:text-[24px] text-center text-[12px] font-[400]">
                Processed foods
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[100%]">
          <h3 className="md:text-[24px] text-[14px] font-[400] text-black">
            Lifestyles Changes:
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-[10px]">
            <p className="font-[400] p-[8px] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Drink plenty of water
            </p>
            <p className="font-[400] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Protect skin from the sun
            </p>
            <p className="font-[400] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Manage stress levels
            </p>
            <p className="font-[400] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Get 7-8 hours of sleep each night
            </p>
            <p className="font-[400] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Avoid harsh scrubbing or over-washing
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[100%]">
          <h3 className="md:text-[24px] text-[14px] font-[400] text-black">
            Dry Season Adjustments
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-[10px]">
            <p className="font-[400] p-[8px] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Increase moisturizer application frequency
            </p>
            <p className="font-[400] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Use a humidifier to add moisture to the air
            </p>
            <p className="font-[400] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Avoid long hot showers
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[100%]">
          <h3 className="md:text-[24px] text-[14px] font-[400] text-black">
            Wet Season Adjustments
          </h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[10px]">
            <p className="font-[400] p-[8px] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Switch to a lightwright, oil-free moisturizer
            </p>
            <p className="font-[400] p-[8px] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Use a gentle, non-comedogenic cleanser
            </p>
            <p className="font-[400] p-[8px] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Ensure adequate sun protection, even on cloudy days
            </p>
            <p className="font-[400] p-[8px] md:text-[18px] text-[10px] h-[28px] border flex justify-center items-center border-[#4EBDB4] rounded-full text-black">
              Avoid touching the face excessively
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 md:mt-[95px] flex items-center justify-center">
      {" "}
      {/* Responsive container */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 w-full md:w-3/4 lg:w-[600px] border">
        {" "}
        {/* Card-like container */}
        {/* <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>{" "} */}
        {/* Optional heading */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full border rounded-md px-3 py-2 focus:outline-none  ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}{" "}
            {/* Error message */}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-secondary transition-colors duration-300 hover:bg-primary text-white font-[200] rounded-full  h-[47px] focus:outline-none"
            >
              Enter your Email to view result
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Result;

