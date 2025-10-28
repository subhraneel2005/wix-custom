import React from "react";
import { CourseCard } from "../CourseCard";
import { coursesData } from "@/data/courseData";

export default function OurCourses({ limit }: { limit?: number }) {
  const displayedCourses = limit ? coursesData.slice(0, limit) : coursesData;

  return (
    <div className="h-full w-full flex flex-col items-center bg-black text-white mt-8">
      <div className="container flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="md:text-6xl text-3xl font-bold text-white">
            Our Professional <span className="text-[#FEC447]">Courses</span>
          </h2>
          <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto">
            Learn from industry experts through hands-on training and real-world
            projects. Our courses give you the skills and confidence to turn
            your passion for cinema into a professional career.
          </p>
        </div>
        {/* Course Cards - Using Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto py-16 w-full md:px-12 px-4">
          {displayedCourses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
              knowMoreUrl={`/course/${course.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
