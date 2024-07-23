"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const autoplay = true;
  const transitionTime = 2000;
  const images = [
    { src: "phoenix.svg", alt: "Image 1" },
    { src: "grupoboticario.svg", alt: "Image 2" },
    { src: "systemakvile.jpg", alt: "Image 3" },
    { src: "drmax.jpg", alt: "Image 4" },
    { src: "ulta.svg", alt: "Image 5" },
    { src: "almirall.svg", alt: "Image 5" },
  ];


  const settings = {
    dots: false,
    infinite: true,
    autoplay: autoplay,
    speed: 2000,
    autoplaySpeed: transitionTime,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    variableWidth: true,
    
  };
  return (
    <div className="slider-container py-4  ">
      <Slider {...settings}>
        {images.map((image) => (
          <img
            style={{ width: '300px' }}
            className=" p-12 text-center"
            key={image.src}
            src={image.src}
            alt=""
          />
        ))}
      </Slider>
    </div>
  );
}
