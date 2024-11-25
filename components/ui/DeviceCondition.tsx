"use client"

import React, { useState } from "react";

const DeviceCondition = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonType: "new" | "refurbished") => {
    setSelectedButton((prevSelected) =>
      prevSelected === buttonType ? null : buttonType
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-gray-400 poppins-semibold text-base">Condition</p>
        
      </div>
      <div className="flex flex-wrap gap-4 my-4">
        <button
          className={`shadow-md h-full py-2 items-center justify-center rounded-lg px-3 poppins-medium border-[1px] ${
            selectedButton === "new" ? "border-primary" : "border-gray-200"
          }`}
          type="button"
          onClick={() => handleButtonClick("new")}
        >
          New
        </button>
        <button
          className={`shadow-md h-full py-2 items-center justify-center rounded-lg px-3 poppins-medium border-[1px] ${
            selectedButton === "refurbished"
              ? "border-primary"
              : "border-gray-200"
          }`}
          type="button"
          onClick={() => handleButtonClick("refurbished")}
        >
          Refurbished
        </button>
      </div>
    </div>
  );
};

export default DeviceCondition;
