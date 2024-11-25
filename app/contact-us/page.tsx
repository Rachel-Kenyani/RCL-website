"use client";
import { cn } from "@/components/lib/utils/utils";
import { Input, Label } from "@/components/ui";
import React from "react";
import { Map } from "@/components/ui";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <div className="bg-[url('/location.png')] bg-cover relative">
        <div className="absolute left-0 top-0 w-3/6 z-10 h-[70vh] bg-tertiary bg-opacity-40"></div>
        <div className="relative flex flex-col justify-center space-y-6 w-3/6 backdrop-blur-md z-20 h-[70vh] px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 ">
          <div className="border-l-8 border-primary rounded-xl ps-4">
            <h1 className="text-5xl plus-jakarta-sans-bold text-white my-4">
              Contact<span className="text-primary">Us</span>
            </h1>
            <p className="text-white poppins-light my-4">
              Let's discuss your laptop rental needs
            </p>
          </div>
        </div>
        <div className="w-3/6"></div>
      </div>

      <div className="bg-[#F5F5F5] p-16 flex gap-4">
        <div className="bg-white w-3/5 p-8 rounded-md border-[1px] border-[#e8e8e8]">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[#034245]"></div>
          <h3 className="text-xl text-tertiary mt-3">
            Reserve your laptop today
          </h3>
          <p className="poppins-regular text-grey">
            Your dream laptop is just a click away! Fill in the details below.
          </p>

          <div>
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="number">Phone Number</Label>
                  <Input
                    id="number"
                    placeholder="+25471234567"
                    type="phone-number"
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="text">Message</Label>
                <Input id="text" placeholder="" type="text-area" />
              </LabelInputContainer>
              <button
                className="h-10 w-60 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#E6943A,45%,#FED4A5,55%,#E6943A)] bg-[length:200%_100%] px-6 font-medium text-white poppins-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                type="submit"
              >
                Reserve Now
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
          </div>
        </div>

        <div className="w-2/5">
          <div className="bg-white p-8 rounded-md border-[1px] border-[#e8e8e8]">
            <div className="flex gap-6 items-center">
              <div className="bg-[#E8F6F7] flex items-center justify-center rounded-md w-12 h-12 p-2">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: "28px" }}
                >
                  phone
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <p>Phone Number</p>
                <span className="poppins-regular text-base text-grey">
                  +254 712 345 678
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-md border-[1px] border-[#e8e8e8] my-4">
            <div className="flex gap-6 items-center">
              <div className="bg-[#E8F6F7] flex items-center justify-center rounded-md w-12 h-12 p-2">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: "28px" }}
                >
                  email
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <p>Email Address</p>
                <span className="poppins-regular text-base text-grey">
                  info@rcl.com
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-md border-[1px] border-[#e8e8e8] my-4">
            <div className="flex gap-6 items-center">
              <div className="bg-[#E8F6F7] flex items-center justify-center rounded-md w-12 h-12 p-2">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: "28px" }}
                >
                  location_on
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <p>Location</p>
                <span className="poppins-regular text-base text-grey">
                  Biashara Street, Revlon Professional Plaza, 2nd Floor Suite
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Map />
    </>
  );
};

export default ContactUs;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
