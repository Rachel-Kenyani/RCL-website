"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}
const Page: React.FC<PageProps> = ({ params }) => {
  const pathname = usePathname();

  return (
    <div className="bg-[#F5F5F5] py-6">
      <div className="px-16 py-6 flex gap-2 items-center">
        <Link
          href="/laptops-for-hire"
          className="
            text-tertiary hover:text-primary poppins-medium items-center my-2"
        >
          Laptops For Hire
        </Link>
        <span className="material-symbols-outlined">chevron_left</span>
        <Link
          href="/laptops-for-hire"
          className="
            text-tertiary hover:text-primary poppins-medium items-center my-2"
        >
          Apple
        </Link>
        <span className="material-symbols-outlined">chevron_left</span>
        <Link
          href="/laptops-for-hire"
          className="
          text-primary poppins-medium items-center my-2"
        >
          Mac
        </Link>
      </div>

      <div className="flex gap-8 px-16">
        <Image
          className="1/5"
          src={"/1-1.png"}
          alt={"Mac"}
          width={500}
          height={100}
        />
        <div className="w-3/5">
          <p className="poppins-medium text-gray-400 text-lg pb-2">
            Product Description
          </p>
          <div className="rounded-md bg-white p-4 border-[1px] border-[#e8e8e8]">
            <p className="poppins-medium text-tertiary text-2xl px-4">
              MacBook Air 13.6” M2
            </p>

            <div className="flex flex-wrap gap-6 my-4  px-4">
              <div className="flex flex-col items-center space-y-1">
                <p className="poppins-medium text-gray-400 text-sm">RAM</p>
                <p className="poppins-regular text-base">8GB</p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <p className="poppins-medium text-gray-400 text-sm">SSD</p>
                <p className="poppins-regular text-base">258GB</p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <p className="poppins-medium text-gray-400 text-sm">
                  Processor
                </p>
                <p className="poppins-regular text-base">M2</p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <p className="poppins-medium text-gray-400 text-sm">
                  Screen Size
                </p>
                <p className="poppins-regular text-base">13.6"</p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <p className="poppins-medium text-gray-400 text-sm">
                  Graphics card
                </p>
                <p className="poppins-regular text-base">8-core GPU</p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <p className="poppins-medium text-gray-400 text-sm">
                  Connectivity
                </p>
                <p className="poppins-regular text-base">WiFi"</p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <p className="poppins-medium text-gray-400 text-sm">
                  Condition
                </p>

                <div className="flex gap-1 items-center">
                  <div className="bg-primary flex justify-center items-center rounded-full w-8 h-8">
                    <Image
                      src="/sparkles.png"
                      alt="note"
                      width={20}
                      height={0}
                    />
                  </div>
                  <p className="poppins-regular text-base">13.6"</p>
                </div>
              </div>
            </div>

            <button
              className="my-2 shadow-lg h-10 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#E6943A,45%,#FED4A5,55%,#E6943A)] bg-[length:200%_100%] px-8 font-medium text-white poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              type="button"
            >
              Reserve Now
            </button>
          </div>
        </div>
      </div>

      <div className="m-16">
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
        <h3 className="text-2xl text-gray-500 poppins-medium my-2 py-2">
          What's in the package?
        </h3>
        <div className="flex gap-6 border-[1px] border-gray-200 bg-white p-8 rounded-md">
          <div className="border-[1px] border-gray-200 bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center">
            <Image src={"/laptop.png"} alt={"Mac"} width={100} height={100} />
            <p className="poppins-semibold">Laptop</p>
          </div>

          <div className="border-[1px] border-gray-200 bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center">
            <Image src={"/charger.png"} alt={"Mac"} width={100} height={100} />
            <p className="poppins-semibold">Charger</p>
          </div>

          <div className="border-[1px] border-gray-200 bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center">
            <Image src={"/adapter.png"} alt={"Mac"} width={100} height={100} />
            <p className="poppins-semibold">Power Adapter</p>
          </div>
        </div>
      </div>

      <div className="mx-16 mt-16 mb-24">
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
        <h3 className="text-2xl text-gray-500 poppins-medium my-3">
          Technical Information
        </h3>
        <div className="border-[1px] border-gray-200 bg-white p-8 rounded-md">
          <p className="poppins-regular mb-3">
            Advanced Computing Powered by the new M2 chip, this MacBook Air
            delivers faster processing performance and improved graphics
            capabilities, ideal for multimedia tasks and professional
            applications.
          </p>

          <div className="flex gap-6 my-6">
            <div className="w-1/3">
              <p className="poppins-semibold">Retina screen</p>
              <span className="poppins-thin text-sm text-center">
                Featuring a stunning 13-inch Retina display with True Tone
                technology, it delivers vibrant colors and incredible image
                details for an immersive viewing experience.
              </span>
            </div>

            <div className="w-1/3">
              <p className="poppins-semibold">All-Day Battery Life</p>
              <span className="poppins-thin text-sm text-center">
                Equipped with a long-lasting battery, it supports up to 18 hours
                of web browsing, ensuring you can work all day without needing
                to recharge.
              </span>
            </div>

            <div className="w-1/3">
              <p className="poppins-semibold">Connectivity</p>
              <span className="poppins-thin text-sm">
                Includes two Thunderbolt ports supporting charging, DisplayPort,
                Thunderbolt up to 40Gb/s, and USB 3.1 Gen 2 up to 10Gb/s.
              </span>
            </div>
          </div>
          <hr />

          <div className="flex gap-6 my-6">
            <div className="w-1/3">
              <p className="poppins-semibold">Camera and Audio</p>
              <span className="poppins-thin text-sm text-center">
                Features a FaceTime HD camera for clear video calls and a
                three-microphone array for precise voice capture, plus stereo
                speakers for a rich audio experience.
              </span>
            </div>

            <div className="w-1/3">
              <p className="poppins-semibold">Memory and storage</p>
              <span className="poppins-thin text-sm text-center">
                Comes with 8GB of unified memory and 256GB of SSD storage,
                providing ample space and quick access to all your files and
                applications.
              </span>
            </div>

            <div className="w-1/3 flex flex-col justify-center items-center">
              <p className="poppins-semibold">Product Weight</p>
              <div className="p-3 shadow-md bg-secondary w-14 h-14 flex justify-center items-center rounded-full">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: "28px" }}
                >
                  weight
                </span>
              </div>
              <span className="poppins-thin text-sm mt-2">1.2kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
