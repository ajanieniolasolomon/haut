import SimpleSlider from "@/components/Slider";
import React from "react";

export default function Home() {
  const glassStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    borderBottomLeftRadius: "40px",
    borderBottomRightRadius: "40px",
    backdropFilter: "blur(40px)",
  };

  return (
    <div className="  ">
      {/* First Div */}
      <div className=" mt-24 border-red-950 h-[500px] justify-center space-y-6 flex flex-col  items-center">
        <div className="text-center">
          <h1 className="text-[56px] text-black  font-medium">
            The Science-Based Solution
          </h1>
          <h4 className="text-[56px]">
            for{" "}
            <span className="text-primary font-medium">AI Skin Analysis</span>{" "}
          </h4>
        </div>
        <h6 className="w-[60%] text-center text-gray-500 text-[20px]">
          Start your customer&apos;s journey to healthier skin with personalized
          product recommendations, available at the tap of a button.
        </h6>
        <div>
          <button className="bg-primary text-white rounded-full py-4 px-12 font-bold">
            Request a demo
          </button>
        </div>
      </div>

      {/* Second Div */}
      <div className="px-[5%] ">
        <img className="w-[100%]" src="main image.png" alt="" />
      </div>

      {/* Third Div */}

      <div className=" h-[500px] mt-[100px] bg-secondary grid grid-cols-2 p-[5%] ">
        {/* first internal div */}
        <div className=" ">
          <div className="text-[40px] text-black  font-medium ">
            <p>AI Skin Analysis SaaS:</p>
            <p>
              {" "}
              <span className="text-primary">no-code,</span>customizable
            </p>
            <p>solution for beauty industry</p>
          </div>
          <div className="text-[20px] text-gray-500 mt-4">
            <p>Haut.AI&apos;s Skin Analysis SaaS is an AI-powered platform</p>
            <p>that enables beauty brands to provide personalized</p>
            <p>product recommendations and interactive skin</p>
            <p>assessments to their customers.</p>
          </div>
        </div>

        {/* second internal div */}
        <div className="bg-white rounded-[50px] w-[550px] flex justify-center items-center ">
          <div className=" text-gray-500  text-[16px] grid gap-4">
            <p className="border-b py-2">
              Analyzes more than 15 essential skin health and beauty metrics
            </p>
            <p className="border-b py-2">
              Trained on over 3 million data points for accurate analysis
            </p>
            <p className="border-b py-2">
              Evaluates 150+ unique multidimensional facial biomarkers
            </p>
            <p className="border-b py-2">
              Uses 94 algorithms for recommending skincare products
            </p>
          </div>
        </div>
      </div>

      {/* Fourth div */}

      <SimpleSlider />
      {/* Fifth Div */}

      <div className="h-[450px] bg-gradient-to-t from-blue-200 to-white grid grid-cols-3 py-[5%] px-[10%]  ">
        <div className="bg-white text-[#222E52] rounded-3xl p-[10%] h-[250px] w-[330px] flex flex-col relative">
          <p className="text-[40px] font-medium"> 98%</p>
          <div className="absolute -bottom-11 text-[20px] opacity-80 font-medium  right-[11%] left-[11%]">
            We use verified science and over 3M data points to achieve this{" "}
            <span className="font-extrabold"> level of accuracy</span>
          </div>
        </div>
        <div className="bg-white text-[#222E52] rounded-3xl p-[10%] h-[250px] w-[330px] flex flex-col relative">
          <p className="text-[40px] font-medium "> 62%</p>
          <div className="absolute -bottom-11 text-[20px] opacity-80 font-medium  right-[11%] left-[11%]">
            The average{" "}
            <span className="font-extrabold">
              growth in customer conversion
            </span>{" "}
            through AI skincare analysis with Haut.AI
          </div>
        </div>
        <div className="bg-white text-[#222E52] rounded-3xl p-[10%] h-[250px] w-[330px] flex flex-col relative">
          <p className="text-[40px] font-medium"> 34%</p>
          <div className="absolute -bottom-11 text-[20px] opacity-80 font-medium  right-[11%] left-[11%]">
            The average{" "}
            <span className=" font-extrabold">increase in order value</span>{" "}
            Haut.AI customers discover in their clients’ carts
          </div>
        </div>
      </div>

      {/* sixth div */}

      <div className="grid grid-cols-1  md:grid-cols-2 gap-24 mt-6 p-[10%]">
        <div className="flex flex-col gap-12 mt-12">
          <div className="bg-secondary rounded-[40px] relative h-[670px]">
            <img className="  pt-[10%]" src="checkyourquality.png" alt="" />
            <div className="p-8 flex flex-col gap-4 absolute bg-secondary rounded-b-[40px]  bottom-0">
              <h1 className="text-[#a8acb1] text-[18px]">Step 1</h1>
              <h4 className="text-gray-800 text-[20px]">
                Install Haut.AI&apos;s Skin Analysis app on your e-commerce
                website, or offer an in-store expereince
              </h4>
            </div>
          </div>
          <div className="bg-secondary rounded-[40px] relative ">
            <img
              className="rounded-[40px]  pt-[10%]"
              src="https://static.tildacdn.net/tild3639-3538-4033-b039-326364336436/Frame_102_1.jpg"
              alt=""
            />
            <div className="p-8 flex flex-col gap-4 absolute bg-secondary rounded-b-[40px]  bottom-0">
              <h1 className="text-[#a8acb1] text-[18px]">Step 3</h1>
              <h4 className="text-gray-800 text-[20px]">
                Our advanced AI engine quickly and efficiently evaluates the
                face, identifying more than 15 essential skin health and beauty
                metrics
              </h4>
            </div>
          </div>
          <div className="  ">
            <h4 className="text-[35px]   ">
              {" "}
              Beauty brands that choose Haut.AI see an average increase in
              shopping cart value of 34%
            </h4>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className=" h-[200px] flex justify-end ">
            <h4 className="text-[40px]  w-[80%] text-right">
              {" "}
              <span className="text-primary">Personalise</span> every customers`
              skincare recommendations
            </h4>
          </div>
          <div className="bg-secondary rounded-[40px] relative ">
            <img
              className="rounded-[40px]  "
              src="https://static.tildacdn.net/tild6666-6539-4565-b035-643138613732/Rectangle_58_1.jpg"
              alt=""
            />
            <div
              style={glassStyle}
              className="p-8 flex flex-col gap-4 absolute bg-transparent rounded-b-[40px]  bottom-0"
            >
              <h1 className="text-[#a8acb1] text-[18px]">Step 2</h1>
              <h4 className="text-gray-800 text-[20px]">
                Customers take selfies using our smart camera
              </h4>
            </div>
          </div>
          <div className="bg-secondary rounded-[40px] relative ">
            <img
              className="rounded-[40px] px-[20%] py-[10%] "
              src="specialforyou.png"
              alt=""
            />
            <div className="p-8 flex flex-col gap-4 absolute h-[230px] bg-secondary rounded-b-[40px]  bottom-0">
              <h1 className="text-[#a8acb1] text-[18px]">Step 4</h1>
              <h4 className="text-gray-800 text-[20px]">
                AI-powered recommendation engine will suggest the best skincare
                products to achieve the perfect skin based on your
                customer&aspos;s skin metrics
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Seventh Div */}

      <div className="bg-secondary h-[800px] py-[10%] px-[5%]">
        <div className=" w-[70%]">
          <h1 className="text-[56px] text-[#1A2937]">
            Pricing plan based on usage
          </h1>
          <h4 className="text-[20px] text-gray-500 mt-4">
            Haut.AI offers a customizable and easy-to-use skincare analysis tool
            that provides accurate, personalized recommendations based on years
            of scientific research.
          </h4>
        </div>
        <div className="grid grid-cols-2 mt-16 gap-10 ">
          <div className="bg-white rounded-[40px] p-[10%] ">
            <h1 className="text-[#1A2937] text-[30px]">
              For small & medium businesses
            </h1>
            <h4 className="mt-4 text-gray-500">
              Customise the algorithm, and create new recommendations by adding
              your own products. Haut.AI will help you provide an exceptional
              digital experience
            </h4>
          </div>
          <div className="bg-white rounded-[40px] p-[10%]">
            <h1 className="text-[#1A2937] text-[30px]">For Enterprises</h1>
            <h4 className="mt-4 text-gray-500">
              Bring digital transformation to your cosmetics brand. A dedicated
              account manager and support team will work with you to build a
              fully customised solution powered by Skin SaaS.
            </h4>
          </div>
        </div>
        <div className="mt-16">
          <button className="border  py-4 px-10 rounded-full text-primary font-medium border-primary hover:text-white hover:bg-primary">
            Request Price
          </button>
        </div>
      </div>
    </div>
  );
}
