import React from "react";

import Image from "next/image";
import { productList } from "@/components/lib/utils";
import { SideBar } from "@/components";
import { HoverEffect } from "@/components/ui/HoverEffect";

const LaptopsForHire = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] flex justify-between relative">
        <div className="relative flex flex-col justify-center space-y-6 w-3/6 backdrop-blur-md z-20 h-[50vh px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 ">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>

          <h1 className="text-5xl plus-jakarta-sans text-tertiary my-4">
            Rent from Top Brands
          </h1>
          <p className="text-black poppins-light my-4">
            From budget-friendly options to premium models, we offer a diverse
            range of laptops to suit your needs. Experience the reliability and
            durability of these devices, ensuring you get the best value for
            your money
          </p>
          <button
            className="shadow-lg w-60 h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#E6943A,45%,#FED4A5,55%,#E6943A)] bg-[length:200%_100%] px-6 font-medium text-white poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            type="button"
          >
            Hire a Laptop
          </button>
        </div>
        <div className="w-3/6">
          <Image
            className=""
            src="/sale.png"
            alt="laptop"
            width={550}
            height={0}
          />
        </div>
      </div>

      <div className="bg-[#FBFBFB] flex gap-4 px-16 py-10">
        <div className="relative w-1/4 bg-white py-4 px-4 rounded-md shadow-md">
          <SideBar />
        </div>
        <div className="w-3/4 py-4">
          <p className="poppins-medium text-gray-400 text-lg px-4">
            {productList.length} Products
          </p>

          <HoverEffect items={productList} />
        </div>
      </div>
    </>
  );
};

export default LaptopsForHire;
