import SimpleSlider from "@/components/Slider";
// import pharmaceuticalImages from "@/data/pharmaceutical";
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
      <div className=" mt-20   md:h-[500px]  h-full justify-center  flex flex-col  items-center">
        <div className="text-center px-4  w-[1074px]">
          <h1 className="md:text-[56px] text-[30px] text-black  font-[600]">
            Revolutionize Your Skincare Experience with AI
          </h1>
        </div>
        <h6 className="md:w-[60%] w-[822px] text-center text-gray-500 md:text-[20px] text-[15px] ">
          Personalized skincare recommendations powered by advanced AI
          technology.
        </h6>
        <div className="mt-12">
          <a
            href="https://apps.apple.com/ng/app/tellei/id6478509541"
            className="bg-primary text-white font-[400] rounded-full py-4 px-12 "
          >
            Request a Demo
          </a>
        </div>
      </div>

      {/* Second Div */}
      <div className="px-[5%] mt-6  relative">
        <img className="w-[100%] rounded-[24px]" src="lab.png" alt="" />
        <p className="text-white text-[128px] w-[784px] font-[800] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Welcome to Innovation!
        </p>
      </div>

      {/* Third Div */}

      <div className="  h-full mt-[100px] md:gap-0 gap-6 bg-secondary py-[10%] md:px-[5%] px-[5%] ">
        <div className="flex  justify-center w-[100%] ">
          <button className="border border-[#8A938F] text-[#8A938F] text-[16px] px-2 rounded-[30px]">
            For Skincare Brands
          </button>
        </div>

        <div className="w-[100%] flex justify-center my-2">
          <p className="text-[48px] font-[600] text-[#095140]">
            Smarter Solutions{" "}
            <span className="text-[#000202]">for Skincare Brands</span>{" "}
          </p>
        </div>

        <div className="text-[#8A938F] text-[24px] w-[100%]  flex items-center justify-center">
          <p className="w-[897px]  text-center">
            We equip your skincare brand with AI-powered tools to access user
            insights, boost marketing impact, and streamline in store
            operations.
          </p>
        </div>

        <div className="flex mt-8 h-[677px] justify-between w-[100%] gap-[3%]  ">
          <div className=" border w-[60%] rounded-[24px] flex flex-col relative justify-center items-center bg-white">
            <img src="analysis.svg" />
            <div className="border rounded-b-[24px] h-[174px] w-[100%] absolute bg-white bottom-0 p-6">
              <h3 className="text-[24px] font-[600]">Skin Analysis Results</h3>
              <div className="text-[18px] font-[400] text-[#8F918F]">
                Access detailed insights into users' skincare needs and concerns
                in a simple, visual format. Understand their preferences better
                to offer tailored solutions. Stay informed to make data-driven
                decisions easily.
              </div>
            </div>
          </div>
          <div className="border rounded-[24px] w-[40%] bg-white p-6 flex flex-col ">
            <h3 className="text-[24px] font-[600]">Terminal Setup</h3>
            <div className="text-[18px] font-[400] text-[#8F918F] mt-4">
              Set up in-store terminals to provide seamless user skincare
              analysis. Offer personalized recommendations directly at the point
              of interaction. Manage terminal settings and performance easily
              from the portal.
            </div>

            <div className="w-[100%] flex items-center  justify-center mt-6">
              <img className="mt-4" src="world.svg" />
            </div>
          </div>
        </div>

        <div className="w-[100%] flex  my-2 h-[401px] gap-[3%] mt-8">
          <div className="w-[50%] rounded-[24px] bg-white border p-6">
            <h3 className="text-[24px] font-[600] text-[#000202]">
              Email Marketing
            </h3>
            <div className="text-[#8F918F] text-[18px] mt-4">
              Create and send targeted email campaigns based on real user
              analysis data. Connect with your audience by offering the right
              products at the right time.
            </div>

            <div className="w-[100%] flex justify-center items-center ">
              <img src="marketing.svg" alt="" />
            </div>
          </div>
          <div className="w-[50%] rounded-[24px] bg-white border flex flex-col items-center p-6 relative">
            <img src="analytic.svg" alt="" />
            <div className="border rounded-b-[24px] p-6 h-[172px] absolute bottom-0 w-[100%] bg-white">
              <h3 className="text-[24px] font-[600] text-[#000202]">
                Analytic Dashboard
              </h3>
              <div className="text-[#8F918F] text-[18px] mt-4">
                Monitor skincare trends and terminal performance in one
                easy-to-use dashboard. Gain valuable insights into user
                behaviors and preferences. Make informed decisions with clear,
                actionable data.
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-8 bg-white flex items-center justify-center h-[600px] border rounded-[24px] relative">
          <img src="products.svg" alt="" />

          <div className="absolute bottom-0 p-6 h-[188px] w-[100%] bg-white rounded-b-[24px] border">
            <h3 className="text-[24px] font-[600] text-[#000202]">
              Product Registration
            </h3>
            <div className="text-[#8F918F] text-[18px] mt-4">
              Add, update, and manage your products effortlessly within the
              portal. Ensure your offerings are always accurate and ready for
              users to explore. Keep everything organized in one central place.
            </div>
          </div>
        </div>
      </div>

      {/* Fourth div */}

      <div className="w-[100%] flex mt-6 bg-white p-[5%] ">
        <div className="w-[50%]">
          <img
            className="rounded-tl-[100px] rounded-br-[100px] w-[400px] h-[400px] "
            src="ai.png"
            alt=""
          />
        </div>
        <div className="w-[50%] flex flex-col h-[400px] ">
          <div className="flex  w-[100%] ">
            <button className="border border-[#8A938F] text-[#8A938F] text-[16px] px-2 rounded-[30px]">
              About Us
            </button>
          </div>

          <h3 className="text-[36px] font-[500] text-[#000202] mt-4">
            Revolutionizing Skincare with AI Precision
          </h3>

          <div className="text-[#8F918F] text-[16px] mt-4">
            At Tellei, we believe that everyone deserves a skincare solution
            tailored to their unique needs. Our mission is to revolutionize in
            store skincare experiences by combining cutting edge AI technology
            with industry leading skincare expertise. We’ve designed an
            innovative solution that helps brands connect with their customers
            on a deeper level, offering real time skin analysis and personalized
            recommendations. With our app, we’re not just enhancing customer
            satisfaction but also driving meaningful sales for skincare brands
            worldwide.
          </div>

          <button className="bg-primary w-[193px] h-[60px] font-[400] text-white rounded-[30px] mt-4">
            Contact Us
          </button>
        </div>
      </div>

      {/* Fifth Div */}
      <div className="w-[100%] flex flex-col bg-[#FAFAFA]  p-[5%]">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[48px] font-[600] text-[#000202] mt-4">
            Boost Sales Effortlessly
          </h3>
          <div className="text-[#8A938F] font-[400] text-center w-[826px] text-[24px] ">
            Deploy our AI-powered app to provide tailored recommendations and
            increase product sales with no extra effort required.
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8">
          <div className="rounded-[24px] flex flex-col bg-white w-[592px] h-[270px] p-8">
            <img className="w-[42px] h-[42px]" src="wave.svg" alt="" />
            <h3 className="text-[24px] font-[500] text-[#000202] mt-4">
              AI-Powered Skin Analysis
            </h3>

            <div className="text-[#8F918F] text-[18px] font-[400] mt-4">
              AI instantly analyzes your customers face to accurately detect
              skincare concerns like dryness, acne, and dark spots, ensuring
              precise and reliable insights.
            </div>
          </div>
          <div className="rounded-[24px] flex flex-col bg-white w-[592px] h-[270px] p-8">
            <img className="w-[42px] h-[42px]" src="curvedArrow.svg" alt="" />
            <h3 className="text-[24px] font-[500] text-[#000202] mt-4">
              Personalized Product Suggestions
            </h3>

            <div className="text-[#8F918F] text-[18px] font-[400] mt-4">
              Engage your customers with tailored product recommendations that
              meet their unique skincare needs. Our app instantly matches
              analyzed concerns to your product line, boosting sales and
              customer satisfaction.
            </div>
          </div>
          <div className="rounded-[24px] flex flex-col bg-white w-[592px] h-[270px] p-8">
            <img className="w-[42px] h-[42px]" src="barcode.svg" alt="" />
            <h3 className="text-[24px] font-[500] text-[#000202] mt-4">
              QR Code Access to Results
            </h3>

            <div className="text-[#8F918F] text-[18px] font-[400] mt-4">
              A simple scan of a QR code lets customers view their analysis and
              recommended products on their mobile devices, ensuring a smooth
              and memorable in store experience.
            </div>
          </div>
          <div className="rounded-[24px] flex flex-col bg-white w-[592px] h-[270px] p-8">
            <img className="w-[42px] h-[42px]" src="integration.svg" alt="" />
            <h3 className="text-[24px] font-[500] text-[#000202] mt-4">
              Seamless Brand Integration
            </h3>

            <div className="text-[#8F918F] text-[18px] font-[400] mt-4">
              Our app effortlessly integrates with your skincare brand’s product
              line, matching analyzed skin concerns to your products for
              personalized and effective recommendations.
            </div>
          </div>
        </div>
      </div>
      {/* <SimpleSlider images={pharmaceuticalImages} /> */}

      {/* sixth div */}

      <div className="bg-white w-[100%] p-[5%] flex flex-col">
        <div className="w-[100%] flex flex-col gap-2 items-center">
          <div className="flex justify-center items-center  w-[100%] ">
            <button className="border border-[#8A938F] text-[#8A938F] text-[16px]  px-2 rounded-[30px]">
              How it works
            </button>
          </div>
          <h3 className="text-[48px] font-[600] text-[#000202] ">
            Effortless Skincare Analysis in 4 Simple Steps
          </h3>
        </div>

        <div className="grid grid-cols-2 w-[100%] mt-12  gap-12">
          <div className="">
            <img className="rounded-[24px]" src="step1human.svg" alt="" />
          </div>
          <div></div>
          <div></div>
          <div className="">
            <img className="rounded-[24px]" src="step2human.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Seventh Div */}

      <div className="bg-secondary md:h-[850px] h-full py-[10%] px-[5%]">
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
