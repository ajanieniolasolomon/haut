import FAQ from "@/components/FrequentlyAskedQuestions";

// import SimpleSlider from "@/components/Slider";
// import pharmaceuticalImages from "@/data/pharmaceutical";
// import supportedByImages from "@/data/supportedBy";
import React from "react";

export default function Home() {


  return (
    <div className="  ">
      {/* First Div */}
      <div className=" mt-20   md:h-[500px]  h-[441px] justify-center  flex flex-col  items-center ">
        <div className="text-center md:px-4 px-0  md:w-[1074px] w-[327px]">
          <h1 className="md:text-[56px] text-[24px] text-black  font-[600]">
            Revolutionize Your Skincare Experience with AI
          </h1>
        </div>
        <h6 className="w-[327px] md:w-[822px] text-center text-gray-500 md:text-[20px] text-[14px] ">
          Personalized skincare recommendations powered by advanced AI
          technology.
        </h6>
        <div className="mt-12">
          <a
            href="https://apps.apple.com/ng/app/tellei/id6478509541"
            className="bg-primary text-white font-[200] rounded-full py-4 px-12 "
          >
            Request a Demo
          </a>
        </div>
      </div>

      {/* Second Div */}
      <div className="px-[5%] mt-6    relative">
        <div className="relative ">
          <img
            className="w-[100%] rounded-[24px] md:h-full h-[231px]"
            src="lab.png"
            alt=""
          />
          <div className="bg-[#09514099] h-[100%] rounded-[24px] absolute w-[100%] top-0"></div>
        </div>
        <p className="text-white md:text-[128px] text-[45px] md:w-[784px] w-[276px] text-center font-[800] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
          <p className="md:text-[48px] text-[24px] text-center md:w-full w-[337px] font-[600] text-[#095140]">
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
                Access detailed insights into users&apos; skincare needs and
                concerns in a simple, visual format. Understand their
                preferences better to offer tailored solutions. Stay informed to
                make data-driven decisions easily.
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
        <div className="mt-8 grid grid-cols-2 gap-8 ">
          <div className="rounded-[24px] flex flex-col bg-white  h-[270px] p-8">
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
          <div className="rounded-[24px] flex flex-col bg-white  h-[270px] p-8">
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
          <div className="rounded-[24px] flex flex-col bg-white  h-[270px] p-8">
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
          <div className="rounded-[24px] flex flex-col bg-white  h-[270px] p-8">
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

          <div className="">
            <img className="rounded-[24px]" src="step2products.svg" alt="" />
          </div>
          <div></div>
          <div></div>
          <div className="">
            <img className="rounded-[24px]" src="step3barcode.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Seventh Div */}

      <div className="bg-white relative w-[100%] p-[5%]">
        <div className="relative">
          <img className="w-[100%] rounded-[24px]" src="model.png" alt="" />
          <div className="bg-[#00000099] h-[100%] rounded-[24px] absolute w-[100%] top-0"></div>
        </div>
        <p className="text-white text-[48px] w-[879px]  font-[600] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Ready to Transform Skincare with AI?
        </p>
        <p className="text-white font-[500] text-[24px] w-[575px] text-center absolute top-[57%] mt-4 left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Schedule a personalized demo today and see the impact firsthand.
        </p>
        <button className="top-[68%] font-[200] text-[18px] w-[260px] h-[56px] text-white absolute left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#0C644F] rounded-[30px]">
          Request Demo
        </button>
      </div>

      {/* Eight Div */}

      <div className=" overflow-clip w-[100%] bg-white  mt-6  pl-[5%] pt-[5%] pb-[5%]  gap-6 flex flex-col">
        <h1 className="text-[#000202] text-[48px] font-[600] text-center">
          What other brands are saying
        </h1>
        <div className="flex gap-6 w-[100%]">
          <div className="rounded-[24px] bg-[#FAFAFA] h-[220px] w-[384px] p-6 flex flex-col justify-between text-center">
            <div className="text-[#8A938F] text-[16px] font-[500]">
              This app has completely transformed our in-store experience.
              Customers love the personalized recommendations, and we’ve seen a
              significant boost in product sales.
            </div>
            <div className="flex gap-2 justify-center">
              <img src="emoji.png" className="w-6 h-6" alt="" />
              <span className="text-[#000202] text-[16px]">
                Skincare brand A
              </span>
            </div>
          </div>
          <div className="rounded-[24px] bg-[#FAFAFA] h-[220px] w-[384px] p-6 flex flex-col justify-between text-center">
            <div className="text-[#8A938F] text-[16px] font-[500]">
              This app has completely transformed our in-store experience.
              Customers love the personalized recommendations, and we’ve seen a
              significant boost in product sales.
            </div>
            <div className="flex gap-2 justify-center">
              <img src="emoji.png" className="w-6 h-6" alt="" />
              <span className="text-[#000202] text-[16px]">
                Skincare brand A
              </span>
            </div>
          </div>
          <div className="rounded-[24px] bg-[#FAFAFA] h-[220px] w-[384px] p-6 flex flex-col justify-between text-center">
            <div className="text-[#8A938F] text-[16px] font-[500]">
              This app has completely transformed our in-store experience.
              Customers love the personalized recommendations, and we’ve seen a
              significant boost in product sales.
            </div>
            <div className="flex gap-2 justify-center">
              <img src="emoji.png" className="w-6 h-6" alt="" />
              <span className="text-[#000202] text-[16px]">
                Skincare brand A
              </span>
            </div>
          </div>
          <div className="rounded-[24px] bg-[#FAFAFA] h-[220px] w-[384px] p-6 flex flex-col justify-between text-center">
            <div className="text-[#8A938F] text-[16px] font-[500]">
              This app has completely transformed our in-store experience.
              Customers love the personalized recommendations, and we’ve seen a
              significant boost in product sales.
            </div>
            <div className="flex gap-2 justify-center">
              <img src="emoji.png" className="w-6 h-6" alt="" />
              <span className="text-[#000202] text-[16px]">
                Skincare brand A
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Ninth Div */}
      <div className=" bg-white p-[5%] mt-6">
        {/* <h4 className="text-[40px]"> We know your skin</h4> */}
        <FAQ />
      </div>

      {/* Tenth Div */}

      {/* <div className=" bg-white p-[5%] mt-6 w-[100%]">
        <h1 className="text-[#1b1f26] text-[52px] text-center font-medium">
          Supported by
        </h1>
        <SimpleSlider images={supportedByImages} />
      </div> */}
    </div>
  );
}
