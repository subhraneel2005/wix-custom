import React from "react";
import MiniCourseCard from "./MiniCourseCard";
import { Course } from "@/data/courseData";

interface CourseDetailsProps {
  course: Course;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <div>
      <div className="text-center mt-24 px-4">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          Course <span className="text-[#FEC447]">Details & Pricing</span>
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          {course.duration} with live-online sessions and practice labs includes
          downloadable resources and lifetime access to recordings.
        </p>
      </div>
      <MiniCourseCard course={course} />
    </div>
  );
}
