"use client";

import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { IoBook, IoCall } from "react-icons/io5";
import { FaAward } from "react-icons/fa6";

type Instructor = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const instructors: Instructor[] = [
  {
    title: "Expert Instructors",
    description: "Work on real projects to build your portfolio.",
    icon: <GiGraduateCap className="text-[#fac851] text-2xl" />,
  },
  {
    title: "Hands On Project",
    description: "Work on real projects to build your portfolio.",
    icon: <IoBook className="text-[#fac851] text-2xl" />,
  },
  {
    title: "Certification",
    description: "Work on real projects to build your portfolio.",
    icon: <FaAward className="text-[#fac851] text-2xl" />,
  },
  {
    title: "24/7 Support",
    description: "Work on real projects to build your portfolio.",
    icon: <IoCall className="text-[#fac851] text-2xl" />,
  },
];

export default function InstructorCards() {
  return (
    <div className="flex flex-wrap justify-center gap-14 p-6 bg-black mt-12 py-12">
      {instructors.map((inst, idx) => (
        <div
          key={idx}
          className="bg-[#191919] rounded-xl p-4 w-[230px] text-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#fac85133] mb-6 transition-transform hover:scale-110">
            {inst.icon}
          </div>
          <h3 className="text-white text-xl font-bold mb-3">{inst.title}</h3>
          <p className="text-[#ccc] text-sm">{inst.description}</p>
        </div>
      ))}
    </div>
  );
}
