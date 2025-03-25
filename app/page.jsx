"use client";
import FAQ from "@/components/FrequentlyAskedQuestions";
import ImageSlider from "@/components/ImageSlider";
// import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import Typewriter from "@/components/Typewriter";
import ScrollAnimation from 'react-animate-on-scroll';
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
// import SimpleSlider from "@/components/Slider";
// import pharmaceuticalImages from "@/data/pharmaceutical";
// import supportedByImages from "@/data/supportedBy";
import { Animated } from "react-animated-css";
export default function Home() {
  const textToType = "Discover the secrets of your skin in  90 secs";
  const subText =
    "Personalized skin analysis and product recommendation for your unique skin concern powered by advanced AI technology backed by top Aestheticians and Medical Experts.";
  const [subtextStarted, setSubtextStarted] = useState(false);
  const [div1Hovered, setDiv1Hovered] = useState(false);
  const [div2Hovered, setDiv2Hovered] = useState(false);
  const [div3Hovered, setDiv3Hovered] = useState(false);
  const [div4Hovered, setDiv4Hovered] = useState(false);

  // console.log(hovered)
  return (
    <div className=" ">
      <div className="  relative     justify-center  md:h-[540px] h-[393px]  md:mt-[100px] mb-6  flex flex-col  items-center ">
        <div className="mb-[16px] z-10 text-center md:px-4 px-0  md:w-[1074px] w-[327px]">
          <h1 className="md:text-[63px] text-[34px] tracking-[-0.75px] text-[#282828] capitalize  font-[700] font-cgp">
            <Typewriter
              text={textToType}
              speed={30}
              delay={500}
              onComplete={() => setSubtextStarted(true)} // Start subtext when main text is done
            />
          </h1>
        </div>
        <h6 className="w-[327px] z-10 md:w-[822px] text-center mb-[32px] text-gray-500 md:text-[20px] text-[14px] ">
          {subtextStarted && ( // Conditionally render subtext Typewriter
            <Typewriter text={subText} speed={20} delay={0} /> // No initial delay
          )}
        </h6>
        <div className="z-10">
          <a
            href="https://apps.apple.com/ng/app/demi-care-brand/id6741867226"
            className="bg-secondary transition-colors duration-300 hover:bg-primary text-white font-[200] rounded-full py-4 px-12 "
          >
            Request a Demo
          </a>
        </div>
        {/* <AnimatedGridPattern /> */}
      </div>

      <div className="p-[5%]    relative">
        <ImageSlider />
      </div>




        <div className="bg-white w-[100%] p-[5%] flex flex-col">
          <div className="w-[100%] flex flex-col gap-2 items-center">
            <div className="flex justify-center items-center  w-[100%] ">
              <button className="border border-[#8A938F] text-[#8A938F] text-[16px]  px-2 rounded-[30px]">
                How it works
              </button>
            </div>
            <h3 className="md:text-[48px] text-[24px] text-center font-[600] text-[#000202] ">
              Effortless Skincare Analysis in 4 Simple Steps
            </h3>
          </div>

          <div className="flex-col flex w-[100%] mt-12 gap-6  ">
            <div className="md:flex   gap-6  h-full">
              <ScrollAnimation animateIn='fadeIn'
               animateOnce={true}
              >
                <div className="md:w-[592px] w-[100%]   border flex flex-col justify-end relative  bg-[#9FC3CE] rounded-[24px]">
                  <img className="rounded-[24px]   " src="model.svg" alt="" />

                  {/* <img className="rounded-[24px] absolute mx-auto border  " src="mask.svg" alt="" /> */}
                  <div className="bg-[#100B6E] rounded-b-[24px] p-6 flex flex-col gap-2  text-white">
                    <h3 className="font-[400] text-[18px]">Instore Experience</h3>
                    <p className="font-[500] text-[24px]">
                      Customers scan their faces, ready for a quick skin check-up.
                    </p>
                  </div>
                </div>

              </ScrollAnimation>

              <div className=" md:mt-0 mt-6  relative flex md:justify-center justify-between items-center md:items-start  flex-col md:w-[50%] w-[100%] h-[200px] md:h-auto ">
                <div className="relative w-[90px] h-[38px] text-[14px] flex justify-center items-center text-[#8A938F] shadow-lg shadow-[#34A8531F] border rounded-[8px] ">
                  <div className="rounded-full bg-[#EB7244] w-[24px] h-[24px] absolute -right-3 -top-3"></div>
                  Step 1
                </div>

                <img
                  src="step1Arrow.svg"
                  className="    absolute md:w-[300px] md:h-[300px] w-[114px] h-[130px] md:left-[55px]  -bottom-[5px]"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row  gap-6 h-full">
              <div className="order-2 md:order-1 h-[200px] md:h-auto  md:mt-0 mt-6 border-red-950  relative flex md:justify-center justify-between items-center md:items-end flex-col w-[100%] md:w-[50%]">
                <div className="md:ml-auto mt-6 relative w-[90px] h-[38px] text-[14px] flex justify-center items-center text-[#8A938F] shadow-lg shadow-[#34A8531F] border rounded-[8px] ">
                  <div className="rounded-full bg-[#EB7244] w-[24px] h-[24px] absolute -right-3 -top-3"></div>
                  Step 2
                </div>

                <img
                  src="step2Arrow.svg"
                  className="md:w-[300px] md:h-[300px] w-[114px] h-[130px] absolute bottom-0 md:right-[40px] right-[180px]"
                  alt=""
                />
              </div>

              <div className="order-1 md:order-2 md:w-[50%] w-[100%]">
                <ScrollAnimation animateIn='fadeIn'
                 animateOnce={true}
                >
                  <img className="rounded-[24px]" src="step2human.svg" alt="" />
                </ScrollAnimation>
              </div>

            </div>

            <div className="md:flex   gap-6 md:h-[655px]  h-full">
              <ScrollAnimation animateIn='fadeIn'
               animateOnce={true}
              >
                <div className="md:w-[592px] w-[100%]   border flex flex-col justify-end relative  bg-[#9FC3CE] rounded-[24px]">
                  <img
                    className="rounded-[24px]   "
                    src="step2products.svg"
                    alt=""
                  />

                  {/* <img className="rounded-[24px] absolute mx-auto border  " src="mask.svg" alt="" /> */}


                  <div className="bg-[#100B6E] rounded-b-[24px] p-6 flex flex-col gap-2  text-white">
                    <h3 className="font-[400] text-[18px]">
                      Personalized Recomendations
                    </h3>
                    <p className="font-[500] text-[24px]">
                      The App instantly recommends products tailored to customers
                      specific skin concerns after deep analysis.
                    </p>
                  </div>

                </div>
              </ScrollAnimation>
              <div className="md:justify-center justify-between items-center md:items-start h-[200px] md:h-auto  relative flex flex-col md:w-[50%] w-[100%]">
                <div className="md:mt-0 mt-6 relative w-[90px] h-[38px] text-[14px] flex justify-center items-center text-[#8A938F] shadow-lg shadow-[#34A8531F] border rounded-[8px] ">
                  <div className="rounded-full bg-[#EB7244] w-[24px] h-[24px] absolute -right-3 -top-3"></div>
                  Step 3
                </div>

                <img
                  src="step3Arrow.svg"
                  className=" md:w-[300px] md:h-[300px] w-[114px] h-[130px] absolute bottom-0 md:left-[80px] left-[190px]"
                  alt=""
                />
              </div>
            </div>
            <ScrollAnimation animateIn='fadeIn'
             animateOnce={true}
             >
              <div className="md:flex  gap-6">
                <div className="md:w-[50%] w-[100%]"></div>
                <div className=" md:w-[50%] w-[100%]">
                  <img className="rounded-[24px]" src="step3barcode.svg" alt="" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

      <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
        <div className="  h-full mt-[100px] md:gap-0 gap-6 bg-[#FAFAFA] py-[5%]  px-[5%] ">
          <div className="flex  justify-center w-[100%] ">
            <button className="border border-[#8A938F] text-[#8A938F] text-[16px] px-2 rounded-[30px]">
              For Brands
            </button>
          </div>

          <div className="w-[100%] flex justify-center my-2">
            <p className="md:text-[48px] text-[24px] text-center md:w-full w-[337px] font-[600] text-primary">
              Faster & Smarter Solutions{" "}
              <span className="text-[#000202]">for Skincare Brands</span>
            </p>
          </div>

          <div className="text-[#8A938F] text-[24px] w-[100%]  flex items-center justify-center">
            <p className="w-[1155px]  text-center md:text-[24px] text-[14px]">
              We equip your skincare brand with Human & Artificial Intelligence
              (AI) tools to deeply analyze user’s faces, recommend tailored
              products to their skin concerns, access user insights, connects with
              users using hyperlocal content and boost marketing impact.
            </p>
          </div>

          <div className="md:flex   mt-8 md:h-[677px] h-full  md:justify-between w-[100%] gap-[3%]  ">


            <div className=" border md:w-[60%] w-[100%] rounded-[24px] flex flex-col relative justify-center items-center bg-white">
              <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <img src="analysis.svg" />
              </ScrollAnimation>
              <div className="border rounded-b-[24px] h-auto  w-[100%] absolute bg-white bottom-0 p-6 ">
                <h3 className="md:text-[24px] text-[16px] font-[600]">
                  Skin Analysis Results
                </h3>
                <div className="md:text-[18px] text-[12px] font-[400] text-[#8F918F]">
                  Access detailed insights into users&apos; skincare needs and
                  concerns in a simple, visual format. Understand their
                  preferences better to offer tailored solutions. Stay informed to
                  make data-driven decisions easily.
                </div>
              </div>
            </div>


            <div className="border rounded-[24px] md:w-[40%] w-[100%] bg-white p-6 md:mt-0 mt-6 flex flex-col ">
              <h3 className="md:text-[24px] text-[16px] font-[600]">
                Terminal Setup
              </h3>
              <div className="md:text-[18px] text-[12px] font-[400] text-[#8F918F] mt-4">
                Create immersive experiences with our terminals to provide
                seamless user skin analysis. Personalized recommendations at the
                point of interaction while being inclusive of the {`user's`} skin
                tone, type, and texture.
              </div>

              <div className="w-[100%] flex items-center  justify-center mt-6">
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'>  <img className="mt-4" src="world.svg" /></ScrollAnimation>

              </div>
            </div>
          </div>

          <div className="w-[100%] md:flex   my-2  h-full gap-[3%] mt-8">
            <div className="md:w-[50%] w-[100%] rounded-[24px] bg-white border p-6">
              <h3 className="text-[24px] font-[600] text-[#000202]">
                Email Marketing
              </h3>
              <div className="text-[#8F918F] md:text-[18px] text-[12px] mt-4">
                We will create and send targeted email campaigns based on real
                user analysis data and trends. Connect with your audience with a
                hyperlocal content strategy and build a community.
              </div>

              <div className="w-[100%] flex justify-center items-center ">
                <ScrollAnimation animateIn='fadeIn'
                  animateOut='fadeOut'>
                  <img src="marketing.svg" alt="" />
                </ScrollAnimation>
              </div>
            </div>
            <div className="md:w-[50%] w-[100%] rounded-[24px] h-auto bg-white border md:mt-0 mt-6 flex flex-col items-center p-6 relative">
              <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <img src="analytic.svg" alt="" />
              </ScrollAnimation>
              <div className="border rounded-b-[24px] p-6 h-auto absolute bottom-0 w-[100%] bg-white">
                <h3 className="md:text-[24px] text-[16px] font-[600] text-[#000202]">
                  Analytic Dashboard
                </h3>
                <div className="text-[#8F918F] md:text-[18px] text-[12px]">
                  Monitor skincare trends and terminal performance in one
                  easy-to-use dashboard. Gain valuable insights into user
                  behaviors and preferences. Make informed decisions with clear,
                  actionable data.
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] mt-8 bg-white flex  md:p-0 p-[5%]  justify-center md:items-center items-start  md:h-[600px] h-[332px] border rounded-[24px] relative">
            <ScrollAnimation animateIn='fadeIn'
              animateOut='fadeOut'>
              <img src="products.svg" className="  " alt="" />
            </ScrollAnimation>

            <div className="absolute bottom-0 p-6  h-auto w-[100%] bg-white rounded-b-[24px] border">
              <h3 className="md:text-[24px] text-[16px] font-[600] text-[#000202]">
                Product Integration
              </h3>
              <div className="text-[#8F918F] md:text-[18px] text-[12px] mt-4">
                Add, update, and manage your products effortlessly with the
                portal, ensuring your offerings match tailored skin concerns and
                are ready for users to explore. Keep everything organized in one
                central place.
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Fifth Div */}
      <ScrollAnimation animateIn="fadeIn">
        <div className="w-[100%] flex flex-col bg-[#FAFAFA]  p-[5%]">
          <div className="flex flex-col justify-center items-center">
            <h3 className="md:text-[48px] text-[24px] font-[600] text-[#000202] ">
              Boost Sales Effortlessly
            </h3>
            <div className="text-[#8A938F] font-[400] text-center md:w-[826px] w-[337px] md:text-[24px] text-[14px] ">
              Build a community around your brand with shorter transaction time,
              easier purchase decisions, increased sales, loyalty, and customized
              analysis
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 grid-cols-1 gap-8 ">
            <div
              onMouseEnter={() => setDiv1Hovered(true)}
              onMouseLeave={() => setDiv1Hovered(false)}
              className={` transition-colors duration-300 ${div1Hovered ? "bg-secondary" : "bg-white"
                } 
            rounded-[24px] flex flex-col   md:h-[270px]  p-6`}
            >
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <img className="w-[42px] h-[42px]" src="wave.svg" alt="" />
              </Animated>

              <h3
                className={`transition-colors duration-300 ${div1Hovered ? "text-white" : "text-[#000202]"
                  } 
               md:text-[24px] text-[16px] font-[500]  mt-4`}
              >
                Human & AI Powered Skin Analysis
              </h3>

              <div
                className={`transition-colors duration-300 ${div1Hovered ? "text-white" : "text-[#8F918F]"
                  }  
                md:text-[18px] text-[12px] font-[400] mt-4`}
              >
                Deeply analyze your customer’s face in 90 seconds, inclusive of
                skin tone and texture, detecting skin concerns like
                hyperpigmentation, sunburn, dryness, acne, darks spots, and more,
                ensuring precise and reliable insights
              </div>
            </div>
            <div
              onMouseEnter={() => setDiv2Hovered(true)}
              onMouseLeave={() => setDiv2Hovered(false)}
              className={` transition-colors duration-300 ${div2Hovered ? "bg-secondary" : "bg-white"
                }  rounded-[24px] flex flex-col  md:h-[270px]  p-6`}
            >
              <img className="w-[42px] h-[42px]" src="curvedArrow.svg" alt="" />
              <h3
                className={`transition-colors duration-300 ${div2Hovered ? "text-white" : "text-[#000202]"
                  } md:text-[24px] text-[16px] font-[500]  mt-4`}
              >
                Personalized Product Suggestions
              </h3>

              <div
                className={`transition-colors duration-300 ${div2Hovered ? "text-white" : "text-[#8F918F]"
                  }  md:text-[18px] text-[12px] font-[400] mt-4`}
              >
                Engage your customers with tailored product recommendations that
                meet their unique skincare needs and lifetime updates on their
                skincare journey. Build community, and boost sales and customer
                satisfaction.
              </div>
            </div>
            <div
              onMouseEnter={() => setDiv3Hovered(true)}
              onMouseLeave={() => setDiv3Hovered(false)}
              className={`transition-colors duration-300 ${div3Hovered ? "bg-secondary" : "bg-white"
                } rounded-[24px] flex flex-col   md:h-[270px]  p-6`}
            >
              <img className="w-[42px] h-[42px]" src="barcode.svg" alt="" />
              <h3
                className={`transition-colors duration-300 ${div3Hovered ? "text-white" : "text-[#000202]"
                  }  md:text-[24px] text-[16px] font-[500]  mt-4`}
              >
                QR Code Access to Results
              </h3>

              <div
                className={`transition-colors duration-300 ${div3Hovered ? "text-white" : "text-[#8F918F]"
                  }  md:text-[18px] text-[12px] font-[400] mt-4`}
              >
                A simple scan of a QR code lets customers view their analysis and
                recommended products on their mobile devices, ensuring a smooth
                and memorable in-store experience.
              </div>
            </div>
            <div
              onMouseEnter={() => setDiv4Hovered(true)}
              onMouseLeave={() => setDiv4Hovered(false)}
              className={`transition-colors duration-300 ${div4Hovered ? "bg-secondary" : "bg-white"
                } rounded-[24px] flex flex-col   md:h-[270px]  p-6`}
            >
              <img className="w-[42px] h-[42px]" src="integration.svg" alt="" />
              <h3
                className={`transition-colors duration-300 ${div4Hovered ? "text-white" : "text-[#000202]"
                  }  md:text-[24px]  text-[16px] font-[500]  mt-4`}
              >
                Seamless Brand Integration
              </h3>

              <div
                className={`transition-colors duration-300 ${div4Hovered ? "text-white" : "text-[#8F918F]"
                  }  md:text-[18px] text-[12px] font-[400] mt-4`}
              >
                Our app effortlessly integrates with your skincare brand’s product
                line, matching analyzed skin concerns to your products for
                personalized and effective recommendations.
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      {/* <SimpleSlider images={pharmaceuticalImages} /> */}

      <div  className="flex flex-col md:w-auto w-[337px] ">
      <h2 className="md:text-[48px]  text-[24px] font-[600] text-center  mb-5">
     Trusted By
        </h2>
        <Marquee autoFill="false" pauseOnHover="true">
      <img className="h-[10%] mr-5 w-[200px]  pt-5" src="urbanskin.svg" alt="" />
      <img className="h-[10%] w-[200px] mr-10   pt-5" src="perfect.png" alt="" />
      <img className="h-[10%] w-[200px] mr-10 pt-5" src="shefa.jpg" alt="" />
      
</Marquee>
      </div>

      
      <ScrollAnimation animateIn="fadeIn">
        <div className="bg-white relative w-[100%] p-[5%]">
          <div className="relative">
            <img
              className="w-[100%] md:h-full h-[231px] rounded-[24px]"
              src="model.png"
              alt=""
            />
            <div className="bg-[#00000099] h-[100%] rounded-[24px] absolute w-[100%] top-0"></div>
          </div>
          <p className="text-white md:text-[48px] text-center text-[24px] md:w-[879px] w-[249px]  font-[600] absolute md:top-[50%] top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            Ready to know the secrets of your skin in 90 secs
          </p>
          <p className="text-white font-[500] md:text-[24px] text-[14px] md:w-[575px] w-[249px] text-center absolute md:top-[63%] top-[50%] mt-4 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            Transform your skincare routine with human and artificial intelligence
          </p>

          <button className="md:top-[78%] top-[75%] font-[200] text-[18px] md:w-[260px] w-[177px] md:h-[56px] h-[48px] text-white absolute left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary rounded-[30px]">
            Request Demo
          </button>

        </div>
      </ScrollAnimation>

      {/* Eight Div */}

      {/* <div className=" overflow-clip w-[100%] bg-white  mt-6  p-[5%]  gap-6 flex flex-col">
        <h1 className="text-[#000202] md:text-[48px] text-[24px] font-[600] text-center">
          What other brands are saying
        </h1>
        <div className="flex md:flex-row flex-col  gap-6 w-[100%] ">
          <div className="rounded-[24px] bg-[#FAFAFA]  md:w-[384px] md:gap-0  gap-4 w-[100%] p-6 flex flex-col justify-between text-center">
            <div className="text-[#8A938F] md:text-[16px] text-[14px] font-[500]">
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
          <div className="rounded-[24px] bg-[#FAFAFA]  md:w-[384px] w-[100%] md:gap-0  gap-4 p-6 flex flex-col justify-between text-center">
            <div className="text-[#8A938F] md:text-[16px] text-[14px] font-[500]">
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
          <div className="rounded-[24px] bg-[#FAFAFA] md:w-[384px] w-[100%] md:gap-0  gap-4 p-6 flex flex-col justify-between text-center">
            <div className="text-[#8A938F] md:text-[16px] text-[14px] font-[500]">
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
          <div className="rounded-[24px] bg-[#FAFAFA]  md:w-[384px] w-[100%] md:gap-0  gap-4 p-6 flex flex-col justify-between text-center">
            <div className="text-[#8A938F] md:text-[16px] text-[14px] font-[500]">
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
      </div> */}

      {/* Ninth Div */}
      <ScrollAnimation animateIn="fadeIn">
        <div className=" bg-white p-[5%] ">
          <FAQ />
        </div>
      </ScrollAnimation>


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
