"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0   bg-white border w-screen  flex justify-between items-center px-[5%] py-6 z-10`}
    >
      <Link href="/">
        <img src={"/Logo.png"} alt="" className="w-[50px]" />
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
      <div className="">
        <button className="border w-[165px] py-2 rounded-full text-white  bg-primary">
          Contact Us
        </button>
      </div>
      <ul
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } space-x-4 absolute top-full left-0 w-full bg-white p-4`}
      >
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
          <Link href="/contact">
            <p className="hover:text-[#3c69d6] text-black">Contact</p>
          </Link>
        </li>
      </ul>
      {/* Add a hamburger menu icon for mobile */}
      <button className="md:hidden focus:outline-none " onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-primary "
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
