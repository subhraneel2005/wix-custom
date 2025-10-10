"use client";
import React from "react";
import { FilmCard } from "../FilmCard";
import { CourseCard } from "../CourseCard";

export default function Courses() {
  const courses = [
    {
      title: "Photoshop Mastery",
      image:
        "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/photoshop-new.jpg",
      duration: "3 Months",
      students: "500+",
      modules: 6,
      description:
        "Master Photoshop  the ultimate tool for editing photos, designing albums, and creating stunning posters with ease.",
      learnPoints: [
        "Photography Fundamentals",
        "Advanced Camera Techniques",
        "Adobe Photoshop Mastery",
        "Premiere Pro Video Editing",
        "After Effects Animation",
        "Color Grading & Correction",
      ],
      enrollUrl: "https://wa.me/919916663357",
      knowMoreUrl: "https://akshayentertainment.wixstudio.com/akshay/blank-2-2",
    },
    {
      title: "Video Editing with Premiere Pro",
      image:
        "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/video-editing-new.jpg",
      duration: "3 Months",
      students: "500+",
      modules: 6,
      description:
        "Learn Adobe Premiere Pro and transform raw footage into cinematic videos. From cutting to color grading.",
      learnPoints: [
        "Professional Editing Tools",
        "Multi-Track Timeline",
        "Color Correction & Grading",
        "Transitions & Effects",
        "Slow Motion & Speed Control",
        "Export for Any Platform",
      ],
      enrollUrl: "https://wa.me/919916663357",
      knowMoreUrl: "https://akshayentertainment.wixstudio.com/akshay/blank-2-2",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center bg-black text-white mt-14">
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
        {/* Film Cards */}
        <div className="flex flex-wrap gap-12 justify-center items-start max-w-7xl mx-auto py-16">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
