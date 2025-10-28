"use client";
import React from "react";
import { FaClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { useRouter } from "next/navigation";

type FilmCardProps = {
  title: string;
  image: string;
  duration: string;
  rating: string | number;
  students: string | number;
  description: string;
  buttonText?: string;
  url: string;
};

export function FilmCard({
  title,
  image,
  duration,
  rating,
  students,
  description,
  url,
  buttonText = "Watch Now",
}: FilmCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <div className="bg-[#191919] rounded-[16px] p-5 w-full max-w-[600px] flex flex-row gap-5 shadow-lg border border-[#FEC447]/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl mx-auto font-[Playfair_Display]">
      {/* Left Side - Image */}
      <div className="flex-shrink-0 w-[280px] overflow-hidden rounded-[12px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 flex flex-col justify-between gap-3">
        {/* Title */}
        <h1 className="text-[22px] font-semibold text-[#FEC447] leading-snug">
          {title}
        </h1>

        {/* Meta */}
        <div className="flex gap-4 text-[14px] text-[#FEC447]">
          <div className="flex items-center gap-1.5">
            <FaClock className="text-[#FEC447] w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaStar className="text-[#FEC447] w-4 h-4" />
            <span className="font-medium">{rating}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MdPeopleAlt className="text-[#FEC447] w-4 h-4" />
            <span>{students}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[14px] text-[#CED4DA] leading-relaxed flex-1">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={handleClick}
          className="bg-[#FEC447] text-[#191919] rounded-[8px] py-3 font-semibold text-[15px] shadow-md w-full transition-all duration-300 hover:bg-[#E6B03D] hover:-translate-y-0.5 hover:shadow-lg"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
