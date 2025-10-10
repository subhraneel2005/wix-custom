import React from "react";
import FancyCards from "./FancyCards";
import ResourceCards from "./ResourceCards";
import FeatureCards from "./FeatureCards";
import MiniCourseCard from "./MiniCourseCard";

export default function CourseDetails() {
  return (
    <div>
      <div className="text-center mt-24 px-4">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          Course <span className="text-[#FEC447]">Details & Pricing </span>
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          1 month with live-online sessions and practice labs includes
          downloadable resources and lifetime access to recordings.
        </p>
      </div>
      <MiniCourseCard />
    </div>
  );
}
