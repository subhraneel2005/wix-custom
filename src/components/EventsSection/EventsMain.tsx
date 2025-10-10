import React from "react";

export default function EventsMain() {
  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden py-16">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/eventsBg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/90 -z-10" />

      {/* Header Section */}
      <div className="text-center md:pt-[200px] pt-28 pb-8 px-6">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          Experience <span className="text-[#FEC447]">Cinema</span> Beyond the
          Screen
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto leading-relaxed">
          From red carpet premieres to intimate workshops, Akshay Entertainment
          creates events that bring you closer to the art of filmmaking
          celebrating stories, nurturing talent, and connecting cinema lovers
          from Karnataka to the world.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="border border-[#E59935] text-[#FFE998] rounded-[24px] px-6 py-2 font-semibold bg-transparent hover:bg-[#e59935]/20 transition-all duration-200 cursor-pointer">
          Upcoming Events
        </button>
      </div>
    </div>
  );
}
