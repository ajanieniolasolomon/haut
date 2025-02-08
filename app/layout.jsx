"use client";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {" "}
        {/* Add the Head component */}
        <title>Demicare</title> {/* Optional: Set the title here */}
        <link rel="icon" href="/favicon.ico" /> {/* Path to your favicon */}
        <link
          href="https://fonts.googleapis.com/css?family=Lexend"
          rel="stylesheet"
        ></link>
        
      </Head>
      <body className={inter.className}>
        {/* Layout UI */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
