import LastForm from "@/components/CoursesSection/LastForm";
import StudentsSay from "@/components/CoursesSection/StudentsSay";
import CourseDetails from "@/components/SIngle/CourseDetails";
import GetFreeWithCourse from "@/components/SIngle/GetFreeWithCourse";
import OurStudents from "@/components/SIngle/OurStudents";
import SingleCoursePage from "@/components/SIngle/SingleCoursePage";
import WhatULearn from "@/components/SIngle/WhatULearn";
import WhyLearn from "@/components/SIngle/WhyLearn";
import WhyUs from "@/components/SIngle/WhyUs";
import React from "react";

export default function page() {
  return (
    <div>
      <SingleCoursePage />
      <div className="text-center mt-24 px-6">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          Mastering <span className="text-[#FEC447]">Visual Storytelling</span>
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          Visual storytelling blends light, color, composition, and editing to
          guide the eye and evoke emotion, turning a single frame into a
          compelling narrative. It draws viewers into the moment, creating
          connection and memorability that words alone can&apos;t match.
        </p>
      </div>
      <div className="container">
        <WhyLearn />
        <WhatULearn />
        <GetFreeWithCourse />
        <OurStudents />
        <WhyUs />
        <CourseDetails />
      </div>
      <StudentsSay />
      <LastForm />
    </div>
  );
}
