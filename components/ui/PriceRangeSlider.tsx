"use client"
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const PriceRangeSlider = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 15000]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-gray-400 poppins-semibold text-base">
          Monthly Price
        </p>
        <button
          className="shadow-xl inline-flex h-full text-sm py-2 items-center justify-center rounded-md bg-[#E7FAFB] px-6 text-primary poppins-medium"
          type="button"
        >
          Apply
        </button>
      </div>
      <div className="my-4">
        <Slider
          value={priceRange}
          onChange={handleSliderChange}
          min={0}
          max={15000}
          step={10}
          valueLabelFormat={(value) => `KSh.${value}`}
          valueLabelDisplay="auto"
          sx={{
            width: "100%",
            color: "#019BA2",
            "&.Mui-checked": {
              color: "#019BA2",
            },
          }}
        />
        <Typography className="flex items-center justify-between" gutterBottom>
          <span className="py-2 w-24 px-2 poppins-medium text-gray-400 text-sm border-[1px] border-gray-200 rounded-md">
            KSh.
            <span className="text-tertiary text-base">{priceRange[0]} </span>
          </span>{" "}
          -{" "}
          <span className="py-2 w-24 px-2 oppins-medium text-sm text-gray-400 border-[1px] border-gray-200 rounded-md">
            KSh.
            <span className="text-tertiary text-base">{priceRange[1]} </span>
          </span>
        </Typography>
      </div>
    </>
  );
};

export default PriceRangeSlider;
