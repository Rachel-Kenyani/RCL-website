import React from "react";

import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[url('/About.png')] bg-cover relative">
        <div className="absolute left-0 top-0 w-3/6 z-10 h-[50vh] bg-tertiary bg-opacity-40"></div>
        <div className="relative flex flex-col justify-center space-y-6 w-3/6 backdrop-blur-md z-20 h-[50vh] px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 ">
          <div className="border-l-8 border-primary rounded-xl ps-4">
            <h1 className="text-5xl plus-jakarta-sans-bold text-white my-4">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-white poppins-light my-4">
              Our Commitment to Excellence
            </p>
          </div>
        </div>
        <div className="w-3/6"></div>
      </div>

      <div className="flex px-16 my-12">
        <div className="w-1/2 flex flex-col justify-center space-y-6 pe-20">
          <div>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
            <h3 className="text-xl text-tertiary my-3">About RCL Solutions</h3>

            <p className="poppins-thin text-grey my-3">
              <span className="poppins-medium text-primary">
                RCL Solutions Ltd.
              </span>
               is a leading provider of flexible and reliable laptop rental
              solutions. We specialise in offering a wide range of high-quality
              laptops to meet the diverse needs of businesses, individuals, and
              organisations. 
            </p>
            <p className="poppins-thin text-grey my-3">
              Whether you're looking for a short-term rental for a conference, a
              long-term solution for a remote workforce, or a temporary
              replacement for a damaged device, we have the perfect laptop for
              you.
            </p>
          </div>
        </div>
        <div className="bg-[url('/Hall-2.png')] bg-contain bg-no-repeat w-1/2 h-96"></div>
      </div>

      <div className="flex gap-4 my-6">
        <div className="w-1/3 px-16">
          <h1 className="text-5xl poppins-bold text-tertiary">
            Our Mission <br /> & Vision
          </h1>
          <hr className="border-2 border-primary w-60 mt-[5px]" />
          <hr className="border-2 border-secondary w-60 mt-[5px]" />
        </div>

        <div className="w-2/3 rounded-s-full flex gap-4 border-b-2 border-primary relative pe-16 bg-gray-100">
          <Image
            className=""
            src="/handshake.png"
            alt="logo"
            width={250}
            height={0}
          />

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
              <h3 className="text-xl text-primary mt-3">Mission</h3>
            </div>

            <p className="poppins-thin text-grey m-0 text-sm">
              To empower innovation and productivity by providing seamless
              access to the latest technology, ensuring that individuals and
              businesses can thrive without the burden of ownership.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 my-6">
        <div className="w-2/3 rounded-e-full flex gap-4 border-b-2 border-secondary relative ps-16 bg-gray-100">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
              <h3 className="text-xl text-secondary mt-3">Vision</h3>
            </div>

            <p className="poppins-thin text-grey m-0 text-sm">
              To revolutionise the way technology is accessed by creating a
              future where everyone has the tools they need to succeed,
              fostering a culture of innovation and sustainability through our
              cutting-edge rental services.
            </p>
          </div>
          <Image
            className=""
            src="/handshake2.png"
            alt="logo"
            width={250}
            height={0}
          />
        </div>
      </div>

      <div className="bg-[#F7FCFC] my-12 px-16">
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
        </div>
        <h2 className="text-tertiary my-5 text-center text-2xl">Our Values</h2>
        <p className="poppins-regular text-center text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          facilisis massa.
        </p>
        <div className="flex gap-6 justify-center my-6 pb-6">
          <div className="flex flex-col items-center text-center bg-white w-52 space-y-2 rounded-md p-8 shadow-lg">
            <div className="bg-[#E8F6F7] rounded-md w-12 pt-2 mb-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "28px" }}
              >
                handshake
              </span>
            </div>
            <p className="text-tertiary">Reliability</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white w-52 space-y-2 rounded-md p-8 shadow-lg">
            <div className="bg-[#E8F6F7] rounded-md w-12 pt-2 mb-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "28px" }}
              >
                verified_user
              </span>
            </div>
            <p className="text-tertiary">Quality Assurance</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white w-52 space-y-2 rounded-md p-8 shadow-lg">
            <div className="bg-[#E8F6F7] rounded-md w-12 pt-2 mb-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "28px" }}
              >
                approval_delegation
              </span>
            </div>
            <p className="text-tertiary">Customer Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center space-y-6 items-center bg-[url('/Banner.png')] bg-cover mx-32 p-16 my-12">
        <p className="text-4xl playfair-display-extrabold text-white">
        Your Laptop, Your Way
        </p>
        <button
          className="h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#E6943A,45%,#FED4A5,55%,#E6943A)] bg-[length:200%_100%] px-6 font-medium text-white poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-lg"
          type="button"
        >
          Hire a Laptop
        </button>
      </div>
    </>
  );
};

export default AboutUs;
