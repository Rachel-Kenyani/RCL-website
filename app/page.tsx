"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import {
  IconArrowRight,
  IconCircleCheck,
  IconCircleX,
} from "@tabler/icons-react";

import { clientsImages } from "@/components/lib/utils";
import { RentalProcessSteps, LogoSlider } from "@/components";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/Hero.png')] bg-cover relative">
        <div className="absolute left-0 top-0 w-3/6 z-10 h-full bg-tertiary bg-opacity-40"></div>
        <div className="relative flex flex-col justify-center space-y-6 w-3/6 backdrop-blur-md z-20 h-screen px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 ">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-primary"></div>
            <p className="text-white poppins-medium">
              Welcome to RCL Solutions
            </p>
          </div>
          <h1 className="text-5xl plus-jakarta-sans text-white my-4">
            Rent the Latest
            <br /> Laptops for <span className="text-primary">Ultimate</span>
            <br /> Efficiency
          </h1>
          <p className="text-white poppins-light my-4">
            Introducing the ultimate solution for all your laptop needs -
            Laptops for Hire! Say{" "}
            <span className="text-primary poppins-thin">goodbye</span> to the
            hassle of purchasing expensive laptops and
            <span className="text-primary poppins-thin"> hello</span> to the
            convenience of renting them whenever and wherever you need.
          </p>
          <button
            className="inline-flex h-10 w-60 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#E6943A,45%,#FED4A5,55%,#E6943A)] bg-[length:200%_100%] px-6 font-medium text-white poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            type="button"
          >
            View Available Laptop <IconArrowRight />
          </button>
        </div>
        <div className="w-3/6"></div>
      </div>

      <div className="my-12">
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
        </div>
        <h2 className="text-tertiary my-5 text-center text-2xl">Our Clients</h2>
        <p className="poppins-regular text-center text-grey">
          Proudly serving and trusted by our esteemed clients
        </p>
        <LogoSlider clientsContent={clientsImages} />
      </div>

      <div className="flex px-16 my-12 bg-gradient-to-br from-[#ecfcfc] to-white border-t-2 border-[#e8e8e8]">
        <div className="w-1/2 flex flex-col justify-center space-y-6 pe-20">
          <div>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
            <h3 className="text-xl my-3">
              Trust us provide
              <span className="poppins-semibold">
                {" "}
                excellent
                <br /> quality of laptops
              </span>
            </h3>

            <p className="poppins-thin text-grey my-3">
              Our top-of-the-line laptops are equipped with the latest
              technology and powerful processors, ensuring smooth and efficient
              performance for all your tasks. Whether you're a student, a
              professional, or a digital nomad, our laptops are perfect for all
              your needs.
            </p>
            <Link
              className="inline-flex gap-3 items-center text-primary text-lg"
              href={"./"}
            >
              See more Informations <IconArrowRight />
            </Link>
          </div>
        </div>
        <div className="bg-[url('/Hall.png')] bg-contain bg-no-repeat w-1/2 h-96"></div>
      </div>

      <div className="flex justify-between items-center bg-[url('/Ad-Banner.png')] bg-cover mx-16 p-16 my-12">
        <p className="text-2xl playfair-display-extrabold text-white">
          Rent our top laptops and <br /> boost your productivity{" "}
        </p>
        <button
          className="shadow-lg h-10 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#E6943A,45%,#FED4A5,55%,#E6943A)] bg-[length:200%_100%] px-6 font-medium text-white poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          type="button"
        >
          Hire a Laptop
        </button>
      </div>

      <div className="my-12">
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
        </div>
        <h2 className="text-tertiary my-5 text-center text-2xl">
          Why rent rather than buy
        </h2>
        <p className="poppins-regular text-center text-grey">
          Simply to preserve cash, save time and manage your device responsibly
        </p>
        <div className="flex gap-10 mx-36 my-4">
          <div className="bg-red-50 p-4 border-[1px] border-[#e8e8e8] rounded-md">
            <div className="rounded-full px-2 py-2 w-10 h-10 bg-white border-2 border-red-500 flex items-center justify-center mx-auto">
              <Image src="/note.png" alt="note" width={30} height={0} />
            </div>
            <h3 className="text-red-500 text-center poppins-semibold mt-4">
              Traditional purchase
            </h3>
            <div className="flex my-4">
              <IconCircleX className="text-red-500 flex-shrink-0 me-2" />
              <p className="poppins-thin text-wrap text-sm">
                <span className="poppins-medium">High upfront cost:</span> You
                spend KSh 40,000 on average for a laptop.
              </p>
            </div>
            <div className="flex my-4">
              <IconCircleX className="text-red-500 flex-shrink-0 me-2" />
              <p className="poppins-thin text-wrap text-sm">
                <span className="poppins-medium">
                  Rapid technological advancements:
                </span>{" "}
                Laptops become outdated quickly, making it difficult to keep up
                with the latest features and performance.
              </p>
            </div>
            <div className="flex my-4">
              <IconCircleX className="text-red-500 flex-shrink-0 me-2" />
              <p className="poppins-thin text-wrap text-sm">
                <span className="poppins-medium">Limited flexibility:</span>{" "}
                Once purchased, a laptop is a long-term commitment, limiting
                flexibility to adapt to changing needs or budgets.
              </p>
            </div>
            <div className="flex my-4">
              <IconCircleX className="text-red-500 flex-shrink-0 me-2" />
              <p className="poppins-thin text-wrap text-sm">
                <span className="poppins-medium">
                  Potential for unused resources:
                </span>{" "}
                If a laptop is not used frequently or for demanding tasks, it
                can be a waste of resources.
              </p>
            </div>
          </div>
          <div className="bg-[#F7FEFF] p-4 border-[1px] border-[#e8e8e8] rounded-md">
            <div className="rounded-full px-1 py-1 w-10 h-10 bg-white border-2 border-primary flex items-center justify-center mx-auto">
              <Image src="/Symbol.png" alt="note" width={30} height={0} />
            </div>
            <h3 className="text-primary text-center poppins-semibold mt-4">
              Rent with RCL Solutions
            </h3>
            <div className="flex my-4">
              <IconCircleCheck className="text-primary flex-shrink-0 me-2" />
              <p className="poppins-thin text-wrap text-sm">
                <span className="poppins-medium">Affordability:</span> You get
                to rent a laptop from as low as Ksh 7500 per month.
              </p>
            </div>
            <div className="flex my-4">
              <IconCircleCheck className="text-primary flex-shrink-0 me-2" />
              <p className="poppins-thin text-wrap text-sm">
                <span className="poppins-medium">
                  Avoid outdated equipment:
                </span>{" "}
                Laptops become outdated quickly, making it difficult to keep up
                with the latest features and performance.
              </p>
            </div>
            <div className="flex my-4">
              <IconCircleCheck className="text-primary flex-shrink-0 me-2" />
              <p className="poppins-thin text-wrap text-sm">
                <span className="poppins-medium">Flexibility:</span> Renting
                makes it easy to upgrade to newer models or adjust rental
                periods based on changing requirements
              </p>
            </div>
            <div className="flex my-4">
              <IconCircleCheck className="text-primary flex-shrink-0 me-2" />
              <p className="poppins-thin text-wrap text-sm">
                <span className="poppins-medium">
                  Optimised resource utilisation:
                </span>{" "}
                You have access to the right laptop for your specific
                needs, avoiding the waste of resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16 my-12 p-6 bg-gradient-to-br from-[#ecfcfc] to-white border-t-[1px] border-[#e8e8e8]">
        <h3 className="text-2xl mt-3 playfair-display-semibold text-center text-tertiary">
          New or Refurbished: The Perfect Laptop for You
        </h3>

        <p className="poppins-thin text-black text-center mx-16">
          We understand that every customer has unique needs and
          preferences. That's why we provide you with the flexibility to choose
          the option that best suits your budget and requirements.
        </p>
        <div className="flex justify-center gap-4">
          <div className="w-1/3 flex flex-col items-center my-4 bg-white border-[1px] border-[#e8e8e8] rounded-md py-6">
            <Image src="/Mac-1.png" alt="laptop" width={250} height={0} />
            <h3 className="text-lg mt-3 poppins-medium text-center pb-3">
              New Devices
            </h3>
            <p className="poppins-thin text-sm text-center pb-3">
              Latest Technology and Features
            </p>
            <p className="poppins-thin text-sm text-center pb-3">
              Full Warranty and Support
            </p>
            <p className="poppins-thin text-sm text-center pb-3">
              No wear or tear
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center my-4 bg-white border-[1px] border-[#e8e8e8] rounded-md py-6">
            <Image
              className="pb-3"
              src="/Mac-2.png"
              alt="laptop"
              width={250}
              height={0}
            />
            <h3 className="text-lg mt-3 poppins-medium text-center pb-3">
              Refurbished Devices
            </h3>
            <p className="poppins-thin text-sm text-center pb-3">
              Affordability
            </p>
            <p className="poppins-thin text-sm text-center pb-3">
              Reliable device with good performance
            </p>
            <p className="poppins-thin text-sm text-center">
              Reduce your environmental impact
            </p>
          </div>
        </div>
      </div>

      <RentalProcessSteps />
    </>
  );
}
