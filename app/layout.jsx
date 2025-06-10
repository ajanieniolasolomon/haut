"use client";
import Header from "@/components/Header";
// import { Inter } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import "animate.css/animate.compat.css"
import { usePathname } from 'next/navigation';
import {ViewTransitions} from 'next-view-transitions'
import ReactLenis from "@studio-freight/react-lenis";
// const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  const pathname = usePathname();
 

  return (
    <ViewTransitions>
    <html lang="en">
      <Head>
        {" "}
        {/* Add the Head component */}
        <title>Demicare</title> {/* Optional: Set the title here */}
        <link rel="icon" href="/favicon.ico" /> {/* Path to your favicon */}
        {/* <link
          href="https://fonts.googleapis.com/css?family=Lexend"
          rel="stylesheet"
        ></link> */}

      </Head>
      <body className={'font-cgp'}>
      <ReactLenis root>
        {/* Layout UI */}
        <>
          {
            pathname.includes('campaign')  && <main >{children}</main>
          }
             {
            pathname.includes('wheel') && <main className="dark">{children}</main>
          }

          {
            !  (pathname.includes('campaign') ||  pathname.includes('wheel')) && <>

              <Header />
              <main>{children}</main>
              <Footer />
            </>
          }

        </>
</ReactLenis>
      </body>
    </html>
    </ViewTransitions>
  );
}
