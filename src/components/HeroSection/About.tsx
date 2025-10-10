"use client";
import React from "react";

export default function About() {
  return (
    <div className="h-full w-full flex flex-col items-center bg-black py-16 text-white mt-12">
      <div className="container flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="md:text-6xl text-3xl font-bold text-white">
            About <span className="text-[#FEC447]">Us</span>
          </h2>
          <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto">
            Transfer your passion into a profession with our hands-on film and
            media courses, designed to help you master the art of storytelling
            and succeed in the creative industry.
          </p>
        </div>

        {/* Main Flex Section with Background and Overlay */}
        <div className="relative w-full max-w-7xl rounded-[32px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/films/aboutUs.jpg')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-14 px-6 py-12 z-10">
            {/* Left Text + Buttons */}
            <div className="flex-1 text-center md:text-left">
              <p className="italic text-white/90 leading-relaxed text-base md:text-lg">
                Akshay Entertainment is a film production company, run by Akshay
                Chandrashekhar who is an actor, creative and talented individual
                committed to producing, financing, and distributing high-quality
                entertainment. Here, we are working hard to uncover better ways
                of working with films and have them shine in the Kannada film
                industry. Our sole aim is to promote Karnataka as an exciting
                and dynamic filming destination to international filmmakers.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <button className="bg-[#FFD966] text-black rounded-[20px] px-5 py-2 text-sm font-semibold hover:bg-[#ffea8f] transition-all duration-200">
                  Let’s Chat
                </button>
                <button className="border border-[#E59935] text-[#FFE998] rounded-[20px] px-5 py-2 text-sm font-semibold hover:bg-[#e59935]/20 transition-all duration-200">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right: Services Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {[
                  {
                    title: "Film Production",
                    desc: "Creative storytelling and consulting for your projects",
                  },
                  {
                    title: "Post Production",
                    desc: "Editing and refining stories to perfection",
                  },
                  {
                    title: "Audio Production",
                    desc: "Sound design and audio mixing with precision",
                  },
                  {
                    title: "Creative Direction",
                    desc: "Visionary guidance to bring ideas to life",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#000]/70 rounded-[24px] p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#E59935] to-[#FFE998] rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 3h18v16H3V3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/80">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
