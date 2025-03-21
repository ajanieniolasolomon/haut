"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";

const Result = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const router = useParams();
  const { id } = router;

  const colors = [
    "#FF6B6B", // Red
    "#6B76FF", // Blue
    "#FFA500", // Orange
    "#38A169", // Green
    "#FACC15", // Yellow
    "#E11D48", // Pink
    "#9333EA", // Purple
  ];
  
  const getRandomColor = (index) => colors[index % colors.length];

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/get-analysis/customer?analysisId=${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch analysis. Please try again.");
        }

        const data = await response.json();
        setAnalysis(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching analysis:", error);
      }
    };

    fetchAnalysis();
  }, [id]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      {/* Loading State */}
      {!analysis && !error && <p>Loading analysis...</p>}

      {/* Main Content */}
      {analysis?.data && (
        <div className="p-4 md:p-[5%] md:mt-[95px] flex flex-col gap-6">
          <div className="md:flex md:flex-row flex flex-col">
            <div className="md:w-[50%] md:flex md:gap-6 md:flex-row flex flex-col">
              <h3 className="text-[#5F5F5F] md:text-[24px] font-[400]">
                Skin Analysis:
              </h3>
              <div className="flex flex-wrap gap-2 mb-5 mt-5">
                {analysis.data.skinConcerns?.map((condition, key) => (
                  <span
                    key={key}
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: getRandomColor(key) }}
                  >
                    {condition.name}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={analysis.data?.imageUrl}
              className="md:w-[50%] h-[100%]"
              alt="User"
            />
          </div>

          {/* Skincare Recommendations */}
          <div className="w-[100%] flex flex-col gap-4">
            <h3 className="text-black md:text-[24px] text-[14px] font-[400]">
              Skincare Recommendations:
            </h3>
            {analysis.data.productAnalysis?.map((condition, key) => (
              <div
                key={key}
                className="border border-[#CAC4D0] rounded-[8px] md:flex p-4 gap-4 md:flex-row flex flex-col"
              >
                <img
                  src={condition.imageUrl}
                  className="md:w-[50%] h-full"
                  alt={condition.name}
                />
                <div className="flex flex-col gap-2 md:w-[50%]">
                  <h3 className="text-primary md:text-[24px] text-[14px] font-[400]">
                    {condition.name}
                  </h3>
                  <h5 className=" md:text-[20px] text-[10px] font-[200]">
                    {condition.explanation}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="w-full bg-gray-100 text-gray-700 text-sm text-center p-3 border-t border-gray-300">
        <p>
          <strong>Disclaimer:</strong> All skincare recommendations provided
          have been carefully vetted by our team of dermatologists and licensed
          aestheticians. However, individual skin reactions may vary. We advise
          conducting a patch test before using any new product and consulting a
          professional for personalized guidance.
        </p>
      </div>
    </>
  );
};

export default Result;
