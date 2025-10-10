import React from "react";
import { CourseCard } from "../CourseCard";

export default function OurCourses() {
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
    {
      title: "Motion Graphics Course",
      image:
        "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/afterEffects-new.jpg",
      duration: "45 Days",
      students: "500+",
      modules: 6,
      description:
        "Master Adobe After Effects and bring your ideas to life with stunning animations, visual effects, and motion graphics that captivate audiences.",
      learnPoints: [
        "PDynamic Animations",
        "Text & Title Animation",
        "Visual Effects (VFX)",
        "Green Screen & Compositing",
        "3D Motion & Camera Tracking",
        "Export for Any Platform",
      ],
      enrollUrl: "https://wa.me/919916663357",
      knowMoreUrl: "https://akshayentertainment.wixstudio.com/akshay/blank-2-2",
    },
    {
      title: "Photography & Cinematography",
      image:
        "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/cinema.jpg",
      duration: "1 Month",
      students: "500+",
      modules: 6,
      description:
        "Learn the art of photography and cinematography from capturing stunning moments to creating cinematic videos that tell powerful stories.",
      learnPoints: [
        "Camera Mastery",
        "Lighting Techniques",
        "Portrait & Event Photography",
        "Cinematography Skills",
        "Creative Shooting Styles",
        "Practical Projects & Portfolio",
      ],

      enrollUrl: "https://wa.me/919916663357",
      knowMoreUrl: "https://akshayentertainment.wixstudio.com/akshay/blank-2-2",
    },
  ];

  return (
    <div className="text-center mt-24 px-6">
      <h2 className="md:text-6xl text-3xl font-bold text-white">
        Our Professional <span className="text-[#FEC447]">Courses</span>
      </h2>
      <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto leading-relaxed">
        Learn from industry experts through hands-on training and real-world
        projects. Our courses give you the skills and confidence to turn your
        passion for cinema into a professional career.
      </p>

      <div>
        <a
          href="#leadForm"
          className="inline-block px-8 py-3 mt-6 bg-[#DCBD47] text-black font-semibold rounded-lg hover:bg-[#FEC447] transition-colors shadow-l cursor-pointer"
        >
          Apply Now
        </a>
      </div>

      {/* Course Cards */}
      <div className="flex flex-wrap justify-center items-start py-16 text-left gap-5">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}
