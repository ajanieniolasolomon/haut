import React, { useState, useEffect, useRef } from "react";

const images = [
  { src: "lab.png", text: "Welcome to Innovation!" },
  { src: "girlfacingai.svg", text: "Scan and Identify Skin Concerns" },
  { src: "productmatch.svg", text: "Perfect Product Match" },
  { src: "results.svg", text: "Scan for Results" },
  { src: "skinneeds.svg", text: "Discover Radiance Today!" },
  { src: "skinsecrets.svg", text: "Demi Care Analyze Skin Secrets" },

];



const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    timeoutRef.current = setTimeout(nextSlide, 3000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const currentImage = images[currentIndex]; // Get the current image object

  return (
    <div className="relative w-full md:h-[600px] h-[231px] overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={currentImage.src} // Use currentImage.src
          alt={`Slide ${currentIndex + 1}`}
          className="absolute inset-0 w-[100%] rounded-[24px] md:h-full h-[231px] object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: 1 }}
        />
        <div className="absolute inset-0 rounded-[24px] flex items-center justify-center bg-[#100B6E] bg-opacity-[40%]">
          {" "}
          {/* Overlay */}
          <p className="text-white md:text-[128px] text-[45px] text-center font-[800]">
            {currentImage.text}
          </p>{" "}
          {/* Caption */}
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
