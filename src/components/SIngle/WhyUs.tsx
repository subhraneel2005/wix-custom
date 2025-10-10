import React from "react";
import FeatureCards from "./FeatureCards";

export default function WhyUs() {
  return (
    <div>
      <div className="text-center mt-24 px-4">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          Why <span className="text-[#FEC447]">Choose Us ? </span>
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          Real projects, lifelong access, and responsive support so progress is
          fast, guidance is reliable, and outcomes are portfolio ready.
        </p>
      </div>
      <FeatureCards />
    </div>
  );
}
