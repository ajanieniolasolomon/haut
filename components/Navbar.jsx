"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    const handleEmailClick = () => {
      window.location.href = "mailto:info@demicare.kin";
    }

  return (
    <nav
      className={`md:fixed relative top-0 left-0 right-0 bg-white border w-[100%] flex justify-between items-center px-[5%] py-6 z-10 transition-all duration-300`} // Added transition
    >
      <Link href="/">
        <img src={"/Logo.svg"} alt="" className="w-[50px]" />
      </Link>
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link href="/contact">
            <p className="hover:text-primary text-[#000202]">Our service</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="hover:text-primary text-[#000202]">About us</p>
          </Link>
        </li>
      </ul>
      <div className="md:block hidden">
        <button onClick={handleEmailClick} className="border w-[165px] py-2 font-[200] rounded-full text-white bg-primary">
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
            <Link href="/">
              <p className="hover:text-[#3c69d6] text-black">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="hover:text-[#3c69d6] text-black">About</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p onClick={handleEmailClick} className="hover:text-[#3c69d6] text-black">Contact</p>
            </Link>
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
