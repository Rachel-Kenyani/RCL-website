"use client"
import { CustomTooltip } from "./CustomTooltip";
import React, { useState } from "react";

const DurationButtons = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-gray-400 poppins-semibold text-base">Rent For</p>
        
        <CustomTooltip
          title="The monthly payment is calculated based on the minimum rental period selected. The longer the rental period, the lower the monthly payment."
          placement="top"
          arrow
        >
          <span
            className="material-symbols-outlined text-primary text-lg"
            style={{ fontSize: "28px" }}
          >
            info
          </span>
        </CustomTooltip>
      </div>
      <div className="flex flex-wrap gap-4 my-4">
        {["1 Month", "3 Months", "6 Months", "1 year"].map((label, index) => (
          <button
            key={index}
            className={`shadow-md h-full py-2 items-center justify-center rounded-lg px-4 poppins-medium border-[1px] 
            ${selected === index ? "border-primary " : "border-gray-200"}`}
            type="button"
            onClick={() => handleClick(index)}
          >
            <span className="text-base text-tertiary">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DurationButtons;
