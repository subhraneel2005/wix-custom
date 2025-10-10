import React from "react";
import FancyCards from "./FancyCards";

export default function WhatULearn() {
  return (
    <div>
      <div className="text-center mt-24 px-4">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          What You&apos;ll<span className="text-[#FEC447]"> Learn</span>
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          Core editing fundamentals: cropping, exposure and color correction,
          white balance, and sharpening for clean, consistent images.
        </p>
      </div>
      <FancyCards />
    </div>
  );
}
