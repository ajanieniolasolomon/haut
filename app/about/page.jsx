"use client";


export default function AboutPage() {
  return (
    <div className="w-[100%]  h-[100%]  md:mt-[95px]">
      <div className="border w-[100%] flex  relative  bg-gradient-to-r from-secondary to-white">
        <h4 className="text-white font-lexend md:text-[66px] text-[33px] absolute font-[700] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          About Us
        </h4>
        <img src="single.svg" className=" ml-auto w-[40%]" alt="" />
      </div>

      <div className=" bg-[#f5f5f5] p-[5%] h-full md:flex">
        <div className="md:w-[50%] bg-white p-[6%] flex flex-col gap-4">
          <hr className="border-2 border-primary md:w-[20%]" />
          <h1 className="capitalize font-lexend text-[#3A3A3A] text-[42px] font-[700] md:text-start text-center">
            Who we Are
          </h1>
          <div className="text-[#4B4F58] md:text-[16px] text-[12px] font-[400] md:text-justify text-justify ">
            Revolutionizing Skincare with Al Precision.<br /> <br />At Demi Care, we believe
            that everyone deserves effective solutions tailored to their unique
            skin needs and lifestyle. Our mission is to revolutionize skincare
            experiences by combining cutting-edge Al technology with
            industry-leading skincare experts.<br /> <br />This innovative solution designed
            helps brands connect with their customers on a deeper level,
            offering real time deep skin analysis and personalized
            recommendations through their skincare journey.<br /> <br />With our app, we{"'"}re
            not just enhancing customer satisfaction but also driving meaningful
            sales for skincare brands, helping build a community of real people
            and brand engagement.
          </div>
        </div>
        <div className="bg-white md:w-[50%] ">
          <img src="towel.svg" className="w-[100%] h-[100%] " alt="" />
        </div>
      </div>

      <div className="bg-white p-[5%] w-[100%]  grid ">
        <div className="border-l-1 border-b-0 border-t-0 border-r-0 border p-6 flex flex-col gap-4 ">
          <h4 className="text-[26px] text-center text-black">Our Goal</h4>
          <div className="md:text-[16px] text-[12px] text-[#4B4F58]">
            We want you to discover the secrets of your skin with AI- powered
            insights backed by aestheticians and medical experts within seconds.
          </div>
          <div className="md:text-[16px] text-[12px] text-[#4B4F58]">
            Empower you to feel confident in your skin by helping you find the
            perfect match for your skin type and concerns with brands and
            products customized to your specific needs while being inclusive of
            all skin tones, types, and textures.
          </div>
        </div>
        {/* <div className="border-l-1 border-b-0 border-t-0 border-r-0 border p-6 flex flex-col gap-4  items-center">
          <h4 className="text-[26px] text-black">Vision</h4>
          <div className="md:text-[16px] text-[12px] text-[#4B4F58]">
            Empower you to feel confident in your skin by helping you find the
            perfect match for your skin type and concerns with brands and
            products customized to your specific needs while being inclusive of
            all skin tones, types, and textures.
          </div>
        </div> */}
      </div>
    </div>
  );
}
