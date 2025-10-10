"use client";

import React from "react";

export default function WorkshopCard() {
  return (
    <div className="h-full flex items-center justify-center px-5  bg-[#010105] py-16">
      <div className="grid md:grid-cols-[1fr_300px] gap-10 max-w-4xl w-full bg-[#191919] border border-[#FEC447] rounded-[28px] p-10 overflow-hidden">
        {/* Content Section */}
        <div className="flex flex-col gap-5">
          <div className="inline-block border max-w-32 border-[#FEC447] rounded-2xl px-3 py-1 text-[#FEC447] text-xs font-medium">
            Free Workshop
          </div>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mt-2">
            Frame by Frame: Master the
            <br />
            Art of <span className="text-[#FEC447]">Cinematography</span>
          </h1>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-6 text-gray-300 text-xs mt-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-user-tie text-[#FEC447] text-sm"></i>
              <span>By Industry Expert Jhon Doe</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="far fa-clock text-[#FEC447] text-sm"></i>
              <span>3 Hrs</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mt-5">
            Step inside the world of professional cinema with this immersive,
            full-day masterclass. Learn the secrets of storytelling,
            cinematography, direction, and production from industry veterans who
            have worked on award-winning projects.
          </p>

          <button className="mt-5 cursor-pointer inline-block bg-gradient-to-tr from-[#e59935] via-[#ffe998] to-[#e59935] text-[#1a1a1a] rounded-full px-6 py-3 font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            Reserve my spot now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative h-96 md:h-auto rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
            alt="Professional instructor"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
