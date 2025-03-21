"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTransitionRouter } from 'next-view-transitions'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

const slideInOut =() =>{
  document.documentElement.animate(
    [
      {

        opacity:1,
        transform: "translateY(0)"
      },
      {

        opacity:0.2,
        transform: "translateY(-35%)"
      }
    ],{
      duration:1500,
      easing:"cubic-bezier(0.87,0,0.13,1)",
      fill:"forwards",
      pseudoElement:"::view-transition-old(root)"
    }
  );
  document.documentElement.animate(
    [
      {

        clipPath:"polygon(0% 100% ,100% 100%,100% 100%,0% 100%)",
  
      },
      {

        clipPath:"polygon(0% 100% ,100% 100%,100% 0%,0% 0%)",
      }
    ],{
      duration:1500,
      easing:"cubic-bezier(0.87,0,0.13,1)",
      fill:"forwards",
      pseudoElement:"::view-transition-new(root)"
    }
  );

}

  const router = useTransitionRouter()
    const handleEmailClick = () => {
      window.location.href = "mailto:info@demicare.skin";
    }

  return (
    <nav
      className={`md:fixed relative top-0 left-0 right-0 bg-white/20 backdrop-blur-md rounded-lg p-6  border-white/10 shadow-inner border w-[100%] flex justify-between items-center px-[5%] py-6 z-20 transition-all duration-300`} // Added transition
    >
      <a 
       onClick={(e)=>{
        e.preventDefault()
        router.push("/",{
          onTransitionReady:slideInOut
        })
       }}
      
      href="/">
        <img src={"/Logo.svg"} alt="" className="w-[50px]" />
      </a>
      <ul className="hidden md:flex space-x-8">
        <li>
          <a
               onClick={(e)=>{
                e.preventDefault()
                router.push("/contact",{
                  onTransitionReady:slideInOut
                })
               }}
          
          href="/contact">
            <p className="hover:text-primary text-[#000202]">Our service</p>
          </a>
        </li>
        <li>
          <a 
          
          onClick={(e)=>{
            e.preventDefault()
            router.push("/about",{
              onTransitionReady:slideInOut
            })
           }}
          
          href="/about">
            <p className="hover:text-primary text-[#000202]">About us</p>
          </a>
        </li>
      </ul>
      <div className="md:block hidden">
        <button
          onClick={handleEmailClick}
          className=" w-[165px] py-2 font-[200] rounded-full text-white bg-primary"
        >
          Contact Us
        </button>
      </div>
      <div // Changed to a div for better animation control
        className={`md:hidden  absolute top-0  left-0 w-full bg-white p-4 transition-transform duration-300 ${
          isOpen ? "translate-y-0 top-[70px]" : "-translate-y-full "
        } `}
      >
        <ul className="space-y-4">
          {" "}
          {/* Changed to space-y for vertical spacing */}
          <li>
            <a href="/" 
            
            onClick={(e)=>{
      
              e.preventDefault()
           
              router.push("/",{
                onTransitionReady:slideInOut
              })
             }}
            >
              <p className="hover:text-[#3c69d6] text-black">Home</p>
            </a>
          </li>
          <li>
            <a href="/about" 
            
            
            onClick={(e)=>{
      
              e.preventDefault()
 
              router.push("/about",{
                onTransitionReady:slideInOut
              })
             }}
            >
              <p className="hover:text-[#3c69d6] text-black">About</p>
            </a>
          </li>
          <li>
            <a >
              <p
                onClick={handleEmailClick}
                className="hover:text-[#3c69d6] text-black"
              >
                Contact
              </p>
            </a>
          </li>
        </ul>
      </div>

      <button
        className="md:hidden focus:outline-none z-20"
        onClick={toggleMenu}
      >
        {" "}
        {/* Added z-index */}
        <svg
          className={`h-6 w-6 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : "" // Rotate icon on open
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}
