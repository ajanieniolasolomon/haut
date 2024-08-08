import SimpleSlider from "@/components/Slider";
import pharmaceuticalImages from "@/data/pharmaceutical";
import supportedByImages from "@/data/supportedBy";
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
      <div className=" mt-32  border-red-950 md:h-[500px] h-full justify-center space-y-6 flex flex-col  items-center">
        <div className="text-center px-4">
          <h1 className="md:text-[56px] text-[30px] text-black  font-medium">
            The Science-Based Solution
          </h1>
          <h4 className="md:text-[56px] text-[30px]">
            for{" "}
            <span className="text-primary font-medium">AI Skin Analysis</span>{" "}
          </h4>
        </div>
        <h6 className="md:w-[60%] w-[95%] text-center text-gray-500 md:text-[20px] text-[15px]">
          Start your customer&apos;s journey to healthier skin with personalized
          product recommendations, available at the tap of a button.
        </h6>
        <div>
          <a
            href="https://apps.apple.com/ng/app/tellei/id6478509541"
            className="bg-primary text-white rounded-full py-4 px-12 font-bold"
          >
            Request a demo
          </a>
        </div>
      </div>

      {/* Second Div */}
      <div className="px-[5%] mt-6 ">
        <img className="w-[100%]" src="main image.png" alt="" />
      </div>

      {/* Third Div */}

      <div className=" md:h-[500px] h-full mt-[100px] md:gap-0 gap-6 bg-secondary grid md:grid-cols-2 grid-cols-1 py-[5%] md:px-[5%] px-[5%] ">
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
            <p>Tellei&apos;s Skin Analysis SaaS is an AI-powered platform</p>
            <p>that enables beauty brands to provide personalized</p>
            <p>product recommendations and interactive skin</p>
            <p>assessments to their customers.</p>
          </div>
        </div>

        {/* second internal div */}
        <div className="bg-white md:rounded-[50px] rounded-0 md:w-[550px] w-full flex justify-center items-center ">
          <div className=" text-gray-500  text-[16px] grid gap-4 px-2 ">
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

      <SimpleSlider images={pharmaceuticalImages} />
      {/* Fifth Div */}

      <div className="md:h-[450px] gap-4 h-full bg-gradient-to-t from-primary to-white grid md:grid-cols-3 grid-cols-1 py-[5%] px-[10%]  ">
        <div className="bg-white text-[#222E52] rounded-3xl p-[10%] h-[250px] md:w-[330px] w-full flex flex-col justify-end">
          <p className="text-[40px] font-medium"> 98%</p>
          <div className="  text-[20px] opacity-80 font-medium  right-[11%] left-[11%] ">
            We use verified science and over 3M data points to achieve this{" "}
            <span className="font-extrabold"> level of accuracy</span>
          </div>
        </div>
        <div className="bg-white text-[#222E52] rounded-3xl p-[10%] h-[250px] md:w-[330px] w-full flex flex-col ">
          <p className="text-[40px] font-medium "> 62%</p>
          <div className=" text-[20px] opacity-80 font-medium  right-[11%] left-[11%]">
            The average{" "}
            <span className="font-extrabold">
              growth in customer conversion
            </span>{" "}
            through AI skincare analysis with Tellei
          </div>
        </div>
        <div className="bg-white text-[#222E52] rounded-3xl p-[10%] h-[250px] md:w-[330px] w-full flex flex-col ">
          <p className="text-[40px] font-medium"> 34%</p>
          <div className="  text-[20px] opacity-80 font-medium  right-[11%] left-[11%]">
            The average{" "}
            <span className=" font-extrabold">increase in order value</span>{" "}
            Tellei customers discover in their clients’ carts
          </div>
        </div>
      </div>

      {/* sixth div */}

      <div className="grid grid-cols-1  md:grid-cols-2 gap-24 mt-6 p-[10%]">
        <div className="flex flex-col gap-12 mt-12">
          <div className="bg-secondary rounded-[40px] relative h-[670px]">
            <img
              className="max-w-full h-auto  pt-[10%]"
              src="checkyourquality.png"
              alt=""
            />
            <div className="p-8 flex flex-col gap-4 absolute bg-secondary rounded-b-[40px]  bottom-0">
              <h1 className="text-[#a8acb1] text-[18px]">Step 1</h1>
              <h4 className="text-gray-800 text-[20px]">
                Install Tellei&apos;s Skin Analysis app on your e-commerce
                website, or offer an in-store expereince
              </h4>
            </div>
          </div>
          <div className="bg-secondary rounded-[40px] relative ">
            <img
              className="rounded-[40px]  pt-[10%] max-w-full h-auto"
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
            <h4 className="md:text-[35px] text-[25px]   ">
              {" "}
              Beauty brands that choose Tellei see an average increase in
              shopping cart value of 34%
            </h4>
          </div>
        </div>

        <div className="flex flex-col gap-12 ">
          <div className=" md:h-[200px] flex justify-end md:mb-0 mb-16  h-full">
            <h4 className="md:text-[40px] text-[30px]  w-[80%] text-right">
              {" "}
              <span className="text-primary">Personalise</span> every customers`
              skincare recommendations
            </h4>
          </div>
          <div className="bg-secondary rounded-[40px] relative ">
            <img
              className="rounded-[40px] max-w-full h-auto "
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
          <div className="bg-secondary rounded-[40px]   relative border ">
            <img
              className="rounded-[40px] px-[20%] py-[10%] max-w-full h-auto "
              src="specialforyou.png"
              alt=""
            />
            <div className="md:p-8 p-4   flex flex-col gap-4 absolute h-[260px] bg-secondary rounded-b-[40px]  bottom-0">
              <h1 className="text-[#a8acb1] text-[18px]">Step 4</h1>
              <h4 className="text-gray-800 md:text-[20px] text-[18px]">
                AI-powered recommendation engine will suggest the best skincare
                products to achieve the perfect skin based on your
                customer&apos;s skin metrics
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Seventh Div */}

      <div className="bg-secondary md:h-[800px] h-full py-[10%] px-[5%]">
        <div className=" md:w-[70%] w-[100%]">
          <h1 className="text-[56px] text-[#1A2937] text-left ">
            Pricing plan based on usage
          </h1>
          <h4 className="text-[20px] text-gray-500 mt-4">
            Tellei offers a customizable and easy-to-use skincare analysis tool
            that provides accurate, personalized recommendations based on years
            of scientific research.
          </h4>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-10 ">
          <div className="bg-white rounded-[40px] p-[10%] ">
            <h1 className="text-[#1A2937] text-[30px]">
              For small & medium businesses
            </h1>
            <h4 className="mt-4 text-gray-500">
              Customise the algorithm, and create new recommendations by adding
              your own products. Tellei will help you provide an exceptional
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

      {/* Eight Div */}

      {/* <div className=" p-[5%] mt-6 w-[100%]">
        <h1 className="text-[#1b1f26] text-[52px] text-center font-medium">
          Press
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 w-[100%] gap-8 mt-8 ">
          <div className="flex gap-4 justify-center items-center">
            <img
              src="cosmeticsandtoiletries.png"
              alt=""
              className="w-[150px] h-[100px] "
            />
            <h4 className="text-gray-500 text-[20px]">
              Industry Insight: How Digital Tech is Iterating Beauty
            </h4>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img src="forbes.png" className="w-[150px] h-[100px] " alt="" />
            <h4 className="text-gray-500 text-[20px]">
              This Female AI Scientist Quietly Built A Profitable Longevity
              Startup In Estonia That Is Dominating The Global Skincare AI
              Market
            </h4>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img src="vogue.png" className="w-[150px] h-[100px] " alt="" />
            <h4 className="text-gray-500 text-[20px]">
              The Fashion Exec&apos;s Guide to Generative Artificial
              Intelligence
            </h4>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="beautymatter.png"
              className="w-[150px] h-[100px] "
              alt=""
            />
            <h4 className="text-gray-500 text-[20px]">
              Four New Need-to-Know B2B Beauty Tech Tools
            </h4>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="cosmeticbusiness.png"
              className="w-[150px] h-[100px] "
              alt=""
            />
            <h4 className="text-gray-500 text-[20px]">
              Tellei claims to be the first company to incorporate generative AI
              for skin simulations
            </h4>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img src="eustartups.png" className="w-[150px] h-[100px] " alt="" />
            <h4 className="text-gray-500 text-[20px]">
              Selfies for skincare | Interview with Anastasia Georgievskaya, CEO
              and Co-founder, Tellei
            </h4>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="crunchbasenews.png"
              className="w-[150px] h-[100px] "
              alt=""
            />
            <h4 className="text-gray-500 text-[20px]">
              Special Series Part 4: From Wigs To Fish, Some Very Quirky AI
              Startups Got Funded In 2022
            </h4>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="cosmeticsandtoiletries.png"
              className="w-[150px] h-[100px] "
              alt=""
            />
            <h4 className="text-gray-500 text-[20px]">
              Tellei Taps BreezoMeter Environmental Data for Personalized Skin
              Care Recommendations
            </h4>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="cosmeticbusiness.png"
              className="w-[150px] h-[100px] "
              alt=""
            />
            <h4 className="text-gray-500 text-[20px]">
              Innovative AI skincare company Tellei partners with retail giant
              Ulta Beauty to revolutionise the beauty and skincare industry
            </h4>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <img
              src="cosmeticsdesign.png"
              className="w-[150px] h-[100px] "
              alt=""
            />
            <h4 className="text-gray-500 text-[20px]">
              Ready to adopt&apos;: AI skin analysis firm Tellei aiming to tap
              into &apos;tech savvy&apos; Asian market
            </h4>
          </div>
        </div>
      </div> */}

      {/* Ninth Div */}
      <div className="h-[250px] bg-primary opacity-70 text-white justify-center items-center flex mt-6">
        <h4 className="text-[40px]"> We know your skin</h4>
      </div>

      {/* Tenth Div */}

      <div className=" bg-white p-[5%] mt-6 w-[100%]">
        <h1 className="text-[#1b1f26] text-[52px] text-center font-medium">
          Supported by
        </h1>
        <SimpleSlider images={supportedByImages} />
      </div>
    </div>
  );
}
