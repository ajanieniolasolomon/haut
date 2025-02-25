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
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 md:mt-[95px]  flex items-center justify-center ">
      {" "}
      {/* Responsive container */}
      <div className="bg-white rounded-lg shadow-md border p-6 md:p-8 lg:p-10 w-full md:w-3/4 lg:w-[600px]">
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
              className={`w-full border rounded-md px-3 py-2 focus:outline-none bg-transparent ${
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
              className="bg-secondary transition-colors duration-300 w-full h-[47px] hover:bg-primary text-white font-[200] rounded-full focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Result;
