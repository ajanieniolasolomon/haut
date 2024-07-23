import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });



// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Layout UI */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
