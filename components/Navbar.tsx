"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Menu } from ".";
import { SearchBar } from ".";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-full shadow-lg mx-4 sticky h-20 px-2 md:px-2 lg:px-6 xl:px-14 2xl:px-30 top-0 left-0 z-40">
      {/* Mobile */}
      <div className="flex justify-between items-center md:hidden py-2">
        <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
          <Image src="/Logo.png" alt="logo" width={150} height={0} priority />
        </Link>
        <Menu />
      </div>

      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-2 h-full">
        <Link
          href="/"
          className={`link ${pathname === "/about-us" ? "active" : ""}`}
        >
          <Image src="/Logo.png" alt="logo" width={150} height={0} priority />
        </Link>

        <div className="flex gap-8">
          <Link
            href="/"
            className={`link ${
              pathname === "/" ? "active text-primary" : "text-tertiary"
            }flex poppins-medium hover:text-primary items-center my-2`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`link ${
              pathname === "/about-us" ? "active text-primary" : "text-tertiary"
            } flex poppins-medium hover:text-primary items-center my-2`}
          >
            About Us
          </Link>
          <Link
            href="/laptops-for-hire"
            className={`link ${
              pathname === "/laptops-for-hire"
                ? "active text-primary"
                : "text-tertiary"
            } flex poppins-medium hover:text-primary items-center my-2`}
          >
            Laptops for Hire
          </Link>

          <Link
            href="/faqs"
            className={`link ${
              pathname === "/faqs" ? "active text-primary" : "text-tertiary"
            } flex poppins-medium hover:text-primary items-center  my-2`}
          >
            FAQs
          </Link>
        </div>

        <SearchBar />

        <Link href="/contact-us" className="flex justify-center my-2">
          <button
            type="button"
            className={`link ${
              pathname === "/contact-us"
                ? "active bg-none text-tertiary border-[1px] border-tertiary"
                : "bg-[linear-gradient(110deg,#019BA2,45%,#2DC6CD,55%,#019BA2)] bg-[length:200%_100%] text-white"
            } shadow-xl h-10 animate-shimmer items-center justify-center rounded-md px-6 font-medium poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            type="button`}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
