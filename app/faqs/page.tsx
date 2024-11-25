import React from "react";

import { AccordionUsage } from "@/components/ui";

const FAQS = () => {
  return (
    <>
      <div className="bg-[url('/faqs.png')] bg-cover relative">
        <div className="absolute left-0 top-0 w-3/6 z-10 h-[70vh] bg-tertiary bg-opacity-40"></div>
        <div className="relative flex flex-col justify-center space-y-6 w-3/6 backdrop-blur-md z-20 h-[70vh] px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 ">
          <div className="border-l-8 border-primary rounded-xl ps-4">
            <h1 className="text-5xl plus-jakarta-sans-bold text-white my-4">
              FAQs
            </h1>
            <p className="text-white poppins-light my-4">
              Have Questions? We've Got Answers
            </p>
          </div>
        </div>
        <div className="w-3/6"></div>
      </div>

      <div className="bg-[#F5F5F5] px-60 py-16">
        <AccordionUsage />
      </div>

      <div className="flex justify-between items-center bg-[url('/banner1.png')] rounded-lg bg-cover mx-16 p-16 my-12">
        <div>
          <p className="text-4xl playfair-display-medium text-white">
            Rent a Laptop in a Flash!
          </p>
          <p className="poppins-thin text-white mt-3">
            Discover the convenience and flexibility of our laptop rental
            <br />
            services. Rent from top brands and enjoy premium quality at
            <br />
            affordable rates.
          </p>
        </div>
        <div className="flex gap-6">
          <button
            className="shadow-lg h-10 w-48 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#E6943A,45%,#FED4A5,55%,#E6943A)] bg-[length:200%_100%] px-6 font-medium text-white poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            type="button"
          >
            Reserve a Laptop
          </button>
          <button
            className="shadow-lg h-10 w-48 animate-shimmer items-center justify-center rounded-md border-[1px] border-[#E6943A] px-6 text-white poppins-medium"
            type="button"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default FAQS;
