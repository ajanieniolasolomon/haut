/* eslint-disable react/prop-types */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line react/prop-types
export default function SimpleSlider({ images }) {
  const autoplay = true;
  const transitionTime = 2000;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: autoplay,
    speed: 2000,
    autoplaySpeed: transitionTime,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container py-4  ">
      <Slider {...settings}>
        {images.map((image) => (
          <img
            style={{ width: "300px", height: "300px" }}
            className=" p-12 object-center "
            key={image.src}
            src={image.src}
            alt=""
          />
        ))}
      </Slider>
    </div>
  );
}
