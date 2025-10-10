"use client";
import React from "react";
import { FaClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

type FilmCardProps = {
  title: string;
  image: string;
  duration: string;
  rating: string | number;
  students: string | number;
  description: string;
  buttonText?: string;
};

export function FilmCard({
  title,
  image,
  duration,
  rating,
  students,
  description,
  buttonText = "Watch Now",
}: FilmCardProps) {
  return (
    <div className="bg-[#191919] rounded-[16px] p-5 w-[340px] flex flex-col gap-4 shadow-lg border border-[#FEC447]/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl mx-auto font-[Playfair_Display]">
      {/* Banner Image */}
      <div className="overflow-hidden rounded-[12px] w-full h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-[12px]"
        />
      </div>

      {/* Title */}
      <h1 className="text-[20px] font-semibold text-[#FEC447] text-center leading-snug">
        {title}
      </h1>

      {/* Meta */}
      <div className="flex justify-center gap-4 mb-1 text-[14px] text-[#FEC447]">
        <div className="flex items-center gap-1">
          <FaClock className="text-[#FEC447] w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaStar className="text-[#FEC447] w-4 h-4" />
          <span className="font-medium">{rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <MdPeopleAlt className="text-[#FEC447] w-4 h-4" />
          <span>{students}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[13px] text-[#CED4DA] text-justify leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button className="bg-[#FEC447] text-[#191919] rounded-[8px] py-3 font-semibold text-[15px] shadow-md w-full transition-all duration-300 hover:bg-[#E6B03D] hover:-translate-y-0.5 hover:shadow-lg">
        {buttonText}
      </button>
    </div>
  );
}
