import Image from "next/image";
import React from "react";
import { Course } from "@/data/courseData";

interface WhyLearnProps {
  course: Course;
}

export default function WhyLearn({ course }: WhyLearnProps) {
  return (
    <section className="text-white py-16 px-4 mt-14 flex flex-col md:flex-row items-center justify-center gap-16">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={course.whyLearnImage}
          alt={course.whyLearnTitle}
          width={400}
          height={200}
          className="rounded-2xl object-cover w-full h-auto"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {course.whyLearnTitle}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-8 italic">
          {course.whyLearnDescription}
        </p>

        <button className="bg-[#FFD966] text-black rounded-[24px] px-6 py-2 font-semibold hover:bg-[#ffea8f] transition-all duration-200 cursor-pointer">
          Apply Now
        </button>
      </div>
    </section>
  );
}
