"use client";

import React from "react";
import { Star, Award, Laptop, Headphones } from "lucide-react";

const CourseFeatures = () => {
  const features = [
    { icon: <Star className="icon-gradient" />, text: "Expert Instructors" },
    { icon: <Award className="icon-gradient" />, text: "Certification" },
    { icon: <Laptop className="icon-gradient" />, text: "Hands On Project" },
    { icon: <Headphones className="icon-gradient" />, text: "24/7 Support" },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap py-5 px-2 bg-[#0E0E0E] rounded-2xl mt-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center text-white font-medium mx-[20px] my-[10px] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] md:text-[1.2rem] text-[1rem]"
        >
          <div className="text-[1.5rem] mr-[10px] text-[#EAD564]">
            {feature.icon}
          </div>
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  );
};

export default CourseFeatures;
