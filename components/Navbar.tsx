import React from "react";

import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="relative h-20 px-1 md:px-4 lg:px-16 xl:px-32 2xl:px-64">
      {/* Mobile */}
      <div className="flex justify-between items-center md:hidden py-2">
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={150} height={0} />
        </Link>
        <Menu />
      </div>

      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-2 h-full">
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={150} height={0} />
        </Link>

        <div className="flex gap-6">
          <Link
            href="/"
            className="flex poppins-medium hover:text-primary items-center text-tertiary my-2"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="flex poppins-medium hover:text-primary items-center text-tertiary my-2"
          >
            About Us
          </Link>
          <Link
            href="/laptops-for-hire"
            className="flex poppins-medium hover:text-primary items-center text-tertiary my-2"
          >
            Laptops for Hire
          </Link>
          <Link
            href="/blogs"
            className="flex poppins-medium hover:text-primary items-center text-tertiary my-2"
          >
            Blogs
          </Link>
          <Link
            href="/faqs"
            className="flex poppins-medium hover:text-primary items-center  text-tertiary my-2"
          >
            FAQs
          </Link>
        </div>

        <SearchBar />

        <Link href="/contact-us" className="flex justify-center my-2">
          <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#019BA2,45%,#4EBABF,55%,#019BA2)] bg-[length:200%_100%] px-6 font-medium text-white poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            type="button"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
