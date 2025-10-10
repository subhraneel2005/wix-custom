"use client";
import Image from "next/image";

export default function SingleCoursePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/p.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 -z-10" />

      {/* Hero Content */}
      <div className="text-center mt-20 container">
        <h1 className="md:text-5xl text-3xl font-bold text-white">
          Master Professional Photo Editing with{" "}
          <span className="text-[#FEC447]">Photoshop</span>
        </h1>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto leading-relaxed">
          Turn your passion into a career. Learn to transform ordinary photos
          into stunning masterpieces with hands-on Photoshop training
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-[#FFD966] text-black rounded-[24px] px-6 py-2 font-semibold hover:bg-[#ffea8f] transition-all duration-200 cursor-pointer">
            Enroll now
          </button>

          <button className="border border-[#E59935] text-[#FFE998] rounded-[24px] px-6 py-2 font-semibold bg-transparent hover:bg-[#e59935]/20 transition-all duration-200 cursor-pointer">
            Free Consulting
          </button>
        </div>
      </div>
    </div>
  );
}
