"use client";

import React, { useEffect, useState, useRef } from "react";

export default function RentalProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const handleMouseEnter = (step: number) => {
    setActiveStep(step);
  };

  const handleMouseLeave = () => {
    setActiveStep(null);
  };

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="px-16">
      <h1 className="text-3xl playfair-display-extrabold text-tertiary">
        How it All Works
      </h1>
      <div className="my-6 relative container" ref={containerRef}>
        <div
          className={`timeframe-line absolute left-1/2 top-0 w-3 rounded-2xl ${
            activeStep === 1
              ? "bg-gradient-to-b from-primary to-gray-200 to-25%"
              : activeStep === 2
              ? "bg-gradient-to-b from-gray-200 from-25% via-primary to-gray-200 to-50%"
              : activeStep === 3
              ? "bg-gradient-to-b from-gray-200 from-50% via-primary to-gray-200 to-75%"
              : activeStep === 4
              ? "bg-gradient-to-b from-gray-200 from-75% via-primary to-gray-200 to-100%"
              : ""
          }`}
          style={{
            height: containerHeight,
          }}
        ></div>

        {/* Step 1 */}
        <div
          className={`step-1 flex gap-12 justify-around my-10 ${
            activeStep === 1 ? "" : "opacity-40"
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <span
            className={`icon material-symbols-outlined ${
              activeStep === 1 ? "text-primary" : "text-gray-400"
            } w-2/5 text-end`}
            style={{ fontSize: "56px" }}
          >
            category_search
          </span>
          <div className="w-2/5 text-start">
            <div
              className={`w-12 h-12 p-2 flex items-center justify-center rounded-full ${
                activeStep === 1 ? "bg-primary" : "bg-gray-400"
              }`}
            >
              <span className="circle text-3xl playfair-display-extrabold text-white">
                1
              </span>
            </div>
            <h1 className="text-tertiary poppins-regular mt-6 mb-3 text-2xl">
              Browse & Select
            </h1>
            <p className="text-grey poppins-thin">
              Explore our website to find the perfect laptop for your needs. Not
              sure which one to choose? Contact us, and our team will guide you
              through the options.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div
          className={`step-2 flex gap-12 justify-around my-10 ${
            activeStep === 2 ? "" : "opacity-40"
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-2/5 flex flex-col items-end">
            <div
              className={`circle w-12 h-12 p-2 flex items-center justify-center rounded-full ${
                activeStep === 2 ? "bg-primary" : "bg-gray-400"
              }`}
            >
              <span className="text-3xl playfair-display-extrabold text-white w-2/5">
                2
              </span>
            </div>
            <h1 className="text-tertiary poppins-regular text-2xl text-end mt-6 mb-3">
              Reserve Your Laptop
            </h1>
            <p className="text-grey poppins-thin text-end">
              Once you've chosen your laptop, give us a call at [Phone Number]
              or email [Email Address] to reserve it. We’ll confirm availability
              and hold the laptop for you.
            </p>
          </div>
          <span
            className={`icon material-symbols-outlined ${
              activeStep === 2 ? "text-primary" : "text-gray-400"
            } w-2/5`}
            style={{ fontSize: "60px" }}
          >
            beenHere
          </span>
        </div>
        {/* Step 3 */}
        <div
          className={`step-3 flex gap-12 justify-around my-10 ${
            activeStep === 3 ? "" : "opacity-40"
          }`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <span
            className={`icon material-symbols-outlined ${
              activeStep === 3 ? "text-primary" : "text-gray-400"
            } w-2/5 text-end`}
            style={{ fontSize: "60px" }}
          >
            storefront
          </span>
          <div className="w-2/5 text-start">
            <div
              className={`circle w-12 h-12 p-2 flex items-center justify-center rounded-full ${
                activeStep === 3 ? "bg-primary" : "bg-gray-400"
              }`}
            >
              <span className="text-3xl playfair-display-extrabold text-white">
                3
              </span>
            </div>
            <h1 className="text-tertiary poppins-regular mt-6 mb-3 text-2xl">
              Pick-Up Your Laptop
            </h1>
            <p className="text-grey poppins-thin">
              Visit our location at [Physical Address] during business hours to
              pick up your reserved laptop. We’ll have it ready for you, along
              with any additional accessories or software you requested.
            </p>
          </div>
        </div>
        {/* Step 4 */}
        <div
          className={`step-4 flex gap-12 justify-around my-10 opacity-40 ${
            activeStep === 4 ? "" : "opacity-40"
          }`}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-2/5 flex flex-col items-end">
            <div
              className={`circle w-12 h-12 p-2 flex items-center justify-center rounded-full ${
                activeStep === 4 ? "bg-primary" : "bg-gray-400"
              }`}
            >
              <span className="text-3xl playfair-display-extrabold text-white w-2/5">
                4
              </span>
            </div>
            <h1 className="text-tertiary poppins-regular text-2xl text-end mt-6 mb-3">
              Enjoy & Return
            </h1>
            <p className="text-grey poppins-thin text-end">
              Use the laptop for as long as you need. If you need assistance,
              our support team is just a call away. When your rental period
              ends, return the laptop to our store—no hassle, no stress.
            </p>
          </div>
          <span
            className={`icon material-symbols-outlined ${
              activeStep === 4 ? "text-primary" : "text-gray-400"
            } w-2/5`}
            style={{ fontSize: "60px" }}
          >
            handshake
          </span>
        </div>
      </div>
    </div>
  );
}
