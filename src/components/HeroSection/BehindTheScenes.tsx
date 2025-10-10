import React from "react";
import ResponsiveGallery from "../ResponsiveGallery";

export default function BehindTheScenes() {
  return (
    <div className="h-full w-full flex flex-col items-center bg-black text-white mt-4 py-12">
      <div className="container flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="md:text-6xl text-3xl font-bold text-white">
            Behind The <span className="text-[#FEC447]">Scenes</span>
          </h2>
          <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto">
            Transfer your passion into a profession with our hands-on film and
            media courses, designed to help you master the art of storytelling
            and succeed in the creative industry.
          </p>
        </div>

        <ResponsiveGallery />
      </div>
    </div>
  );
}
