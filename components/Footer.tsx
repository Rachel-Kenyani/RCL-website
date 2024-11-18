import React from "react";

import Link from "next/link";
import Image from "next/image";
import { IconSend } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="bg-tertiary flex flex-rows justify-between px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 py-6">
      <div>
        <div className="my-4">
          <Link href="/">
            <Image src="/Footer-Logo.png" alt="logo" width={150} height={0} />
          </Link>
        </div>

        <small className="text-white poppins-thin">
          Lorem Ipsum is simply dummy text of the printing
          <br /> and typesetting industry.
        </small>
      </div>

      <div className="flex flex-col">
        <p className="text-white poppins-bold my-4">Links</p>
        <small className="text-white poppins-thin my-2">About Us</small>
        <small className="text-white poppins-thin my-2">Laptops for Hire</small>
        <small className="text-white poppins-thin my-2">Blog</small>
        <small className="text-white poppins-thin my-2">FAQs</small>
        <small className="text-white poppins-thin my-2">Contact Us</small>
      </div>

      <div className="flex flex-col">
        <p className="text-white poppins-bold my-4">Get In Touch</p>
        <small className="text-white poppins-thin my-2">
          xyz building, x Rd, Nairobi
        </small>
        <small className="text-white poppins-thin my-2">xyz@gmail.com</small>
        <small className="text-white poppins-thin my-2">+254 712 345 789</small>
        <small className="text-white poppins-thin my-2">+254 712 345 789</small>
      </div>

      <div className="flex flex-col">
        <p className="text-white poppins-bold my-4">Stay up to date</p>
        <form className="relative w-full max-w-sm">
          <input
            type="text"
            name="name"
            className="w-full p-2 pr-12 border border-gray-300 rounded"
            placeholder="Enter your email address"
          />
          <IconSend className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 poppins-medium cursor-pointer hover:text-secondary" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
