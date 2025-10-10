import React from "react";
import FancyCards from "./FancyCards";
import { Course } from "@/data/courseData";

interface WhatULearnProps {
  course: Course;
}

export default function WhatULearn({ course }: WhatULearnProps) {
  return (
    <div>
      <div className="text-center mt-24 px-4">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          {course.whatYouLearnTitle.split(" ").map((word, index) =>
            word === "Learn" ? (
              <span key={index} className="text-[#FEC447]">
                {" "}
                {word}
              </span>
            ) : (
              <span key={index}> {word}</span>
            )
          )}
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          {course.whatYouLearnSubtitle}
        </p>
      </div>
      <FancyCards cards={course.courseCards} />
    </div>
  );
}
