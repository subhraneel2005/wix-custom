import React from "react";
import TabbedImageGallery from "./TabbedImageGallery";

export default function OurStudents() {
  return (
    <div>
      <div className="text-center mt-24 px-4">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          From Beginners to Professionals See What Create{" "}
          <span className="text-[#FEC447]"> Our Students</span>
        </h2>
      </div>
      <TabbedImageGallery />
    </div>
  );
}
