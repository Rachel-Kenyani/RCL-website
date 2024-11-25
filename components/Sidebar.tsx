"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { filterOptions } from "./lib/utils";
import {
  CheckBoxesField,
  PriceRangeSlider,
  RadioField,
  DurationButtons,
  DeviceCondition,
} from "./ui";

const SideBar = () => {
  const pathname = usePathname();

  const brandsItem = filterOptions.find((item) => item.title === "Brands");
  const screenSizeItem = filterOptions.find(
    (item) => item.title === "Screen Size"
  );
  const RAMItem = filterOptions.find((item) => item.title === "RAM");
  const SSDItem = filterOptions.find((item) => item.title === "SSD");
  const HDDItem = filterOptions.find((item) => item.title === "HDD");
  const OsItem = filterOptions.find(
    (item) => item.title === "Operating system"
  );
  const ProcessorModelItem = filterOptions.find(
    (item) => item.title === "Processor model"
  );

  return (
    <>
      <Link
        href="/laptops-for-hire"
        className={`link ${
          pathname === "/laptops-for-hire"
            ? "active text-gray-400 cursor-text"
            : "text-primary hover:text-primary"
        } flex poppins-medium items-center my-2`}
      >
        <span className="material-symbols-outlined">chevron_left</span>
        All Products
      </Link>
      <p className="text-3xl poppins-medium py-4">Laptops</p>
      <hr />
      <div className="flex flex-col space-y-4 px-4 my-4">
        <RadioField />
        <hr />

        {brandsItem && <CheckBoxesField items={[brandsItem]} />}
        <hr />

        <PriceRangeSlider />

        <hr />

        <DurationButtons />
        <hr />

        <DeviceCondition />
        <hr />

        {screenSizeItem && <CheckBoxesField items={[screenSizeItem]} />}
        <hr />

        {RAMItem && <CheckBoxesField items={[RAMItem]} />}
        <hr />

        {SSDItem && <CheckBoxesField items={[SSDItem]} />}
        <hr />

        {HDDItem && <CheckBoxesField items={[HDDItem]} />}
        <hr />

        {OsItem && <CheckBoxesField items={[OsItem]} />}
        <hr />

        {ProcessorModelItem && <CheckBoxesField items={[ProcessorModelItem]} />}
        <hr />
      </div>
    </>
  );
};

export default SideBar;
