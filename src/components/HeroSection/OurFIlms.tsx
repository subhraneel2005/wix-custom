"use client";
import React from "react";
import { FilmCard } from "../FilmCard";

export default function OurFilms() {
  const films = [
    {
      title: "Mahaan Hutatma",
      image:
        "https://static.wixstatic.com/media/46e2bb_f268213249f34e62a749cd6ecefa860b~mv2.jpg",
      duration: "1H 45M",
      rating: "9.5",
      students: "500+ Students",
      description:
        '"Mahaan Hutatma" the national award-winning short film directly translating into "The Great Martyr" is a dedication to the martyred freedom fighters and the Indian Army for their selfless sacrifice.',
    },
    {
      title: "Bhinna a Web Series",
      image:
        "https://static.wixstatic.com/media/46e2bb_549313d94b0a4cb8b76092e552e4b0a4~mv2.jpg",
      duration: "1H 45M",
      rating: "9.5",
      students: "500+ Students",
      description:
        '"Bhinna" is a web series about family, suspense, and thriller. How an 8-year-old child Bhinna copes with her mothers death, and the challenges she and her father face, is the story of resilience and hope.',
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center bg-black text-white mt-14">
      <div className="container flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="md:text-6xl text-3xl font-bold text-white">
            Our <span className="text-[#FEC447]">Film</span> Collection
          </h2>
          <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto">
            Our films blend powerful storytelling with stunning visuals,
            creating cinematic experiences that stay with audiences long after
            the credits roll. From concept to screen, we craft every detail with
            passion and precision, delivering movies that entertain, inspire,
            and connect with viewers worldwide..
          </p>
        </div>
        {/* Film Cards */}
        <div className="flex flex-wrap gap-12 justify-center items-start max-w-7xl mx-auto py-16">
          {films.map((film, index) => (
            <FilmCard key={index} {...film} />
          ))}
        </div>
      </div>
    </div>
  );
}
