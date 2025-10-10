import React from "react";
import ResourceCards from "./ResourceCards";

export default function GetFreeWithCourse() {
  return (
    <div>
      <div className="text-center mt-24 px-4">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          Get <span className="text-[#FEC447]">Free </span>with Course
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          Downloadable project files, sample RAW images, and ready-to-use
          presets and LUTs to practice and achieve professional looks fast.
          Lifetime access to class recordings with community and many more.
        </p>
      </div>
      <ResourceCards />
    </div>
  );
}
