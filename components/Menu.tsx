"use client";

import Link from "next/link";
import { useState } from "react";

import { IconX } from "@tabler/icons-react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="cursor-pointer flex flex-col justify-center align-middle"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="h-1 w-8 bg-tertiary"></div>
      <div className="h-1 w-8 bg-tertiary my-1"></div>
      <div className="h-1 w-8 bg-tertiary"></div>
      {open && (
        <>
          <div className="absolute right-4 top-4 z-50">
            <IconX stroke={2} className="text-white" />
          </div>
          <div className="absolute left-0 top-0 w-full h-screen bg-black flex flex-col py-32 justify-around">
            <Link
              href="/"
              className="flex poppins-medium justify-center text-white my-2"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="flex poppins-medium justify-center text-white my-2"
            >
              About Us
            </Link>
            <Link
              href="/laptops-for-hire"
              className="flex poppins-medium justify-center text-white my-2"
            >
              Laptops for Hire
            </Link>
            <Link
              href="/faqs"
              className="flex poppins-medium justify-center  text-white my-2"
            >
              FAQs
            </Link>
            <Link href="/contact-us" className="flex justify-center my-2">
              <button
                className="shadow-xl inline-flex h-10 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#019BA2,45%,#4EBABF,55%,#019BA2)] bg-[length:200%_100%] px-6 font-medium text-white poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                type="button"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Menu;
