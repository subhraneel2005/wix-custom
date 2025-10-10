"use client";

import React from "react";

// Reusable Card Component
type WorkshopCardProps = {
  image: string;
  title: string;
  category: string;
  date: string;
  description: string;
};

export const EventPropCard: React.FC<WorkshopCardProps> = ({
  image,
  title,
  category,
  date,
  description,
}) => {
  return (
    <div className="max-w-xs w-full bg-[#191919] rounded-xl overflow-hidden shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl cursor-pointer h-[450px]">
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#2a2a2a] p-5">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-[rgba(229,153,53,0.2)] text-[#e59935] px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <span className="text-[#999] text-xs font-normal">{date}</span>
        </div>

        <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-3">
          {title}
        </h3>

        <p className="text-[#bbb] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Parent Component with 4 Cards
export default function EventsGrid() {
  const imageUrl =
    "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=center";

  const workshops = [
    {
      title: "Pick the Perfect Location",
      category: "Workshop",
      date: "12th July 2025",
      description:
        "From budget to luxury, find accommodations that suit your travel.",
    },
    {
      title: "Lighting Techniques 101",
      category: "Workshop",
      date: "15th July 2025",
      description:
        "Master the art of lighting for professional video and photography.",
    },
    {
      title: "Storyboarding & Planning",
      category: "Workshop",
      date: "18th July 2025",
      description:
        "Learn how to plan shots and visualize scenes before filming.",
    },
    {
      title: "Camera Movement Essentials",
      category: "Workshop",
      date: "20th July 2025",
      description:
        "Explore dynamic camera movements to make your scenes cinematic.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-10 bg-[#010105] h-full">
      {workshops.map((w, idx) => (
        <EventPropCard
          key={idx}
          image={imageUrl}
          title={w.title}
          category={w.category}
          date={w.date}
          description={w.description}
        />
      ))}
    </div>
  );
}
