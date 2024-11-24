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
    </>
  );
};

export default FAQS;
