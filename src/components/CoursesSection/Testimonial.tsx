"use client";

import React from "react";

const testimonials = [
  {
    name: "Bessie Cooper",
    role: "Web Designer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "The Photoshop course completely transformed my design skills. I went from basic edits to creating professional-level graphics in just a few weeks. The step-by-step guidance and creative assignments made learning fun and practical.",
  },
  {
    name: "John Doe",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The course gave me the confidence to start freelancing. I learned practical tips that clients actually value and it made a huge difference in my work.",
  },
  {
    name: "Emily Smith",
    role: "Graphic Artist",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "I loved how structured everything was. The assignments kept me motivated and the feedback I got helped me improve much faster.",
  },
];

export default function Testimonials() {
  return (
    <div className="flex justify-center px-5 py-16">
      <div className="flex flex-wrap justify-center gap-6 max-w-[1000px] w-full">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-[#010105] rounded-2xl p-6 pt-14 max-w-[300px] flex-1 text-center border border-[#e59935]"
          >
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden border-[3px] border-[#0b0b0b]">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="mt-3 text-lg font-bold bg-gradient-to-r from-[#e59935] via-[#ffe998] to-[#e59935] bg-clip-text text-transparent">
              {t.name}
            </h2>
            <p className="text-[13px] font-medium text-white mb-2">{t.role}</p>
            <p className="text-[13px] leading-relaxed text-[#b5b5b5]">
              {t.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
