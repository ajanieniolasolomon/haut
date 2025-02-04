import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });



// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Layout UI */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
