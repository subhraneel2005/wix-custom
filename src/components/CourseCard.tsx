"use client";
import { safeOpen } from "@/utils/safeOpen";
import React, { useState } from "react";
import { FaClock, FaCheck } from "react-icons/fa";

type CourseCardProps = {
  title: string;
  image: string;
  duration: string;
  description: string;
  learnPoints: string[];
  enrollUrl?: string;
  knowMoreUrl?: string;
};

export function CourseCard({
  title,
  image,
  duration,
  description,
  learnPoints,
  enrollUrl,
  knowMoreUrl,
}: CourseCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEnroll = () => setModalOpen(true);
  const handleKnowMore = () => knowMoreUrl && safeOpen(knowMoreUrl, "_blank");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    if (enrollUrl) {
      const message = `Hello, I am interested in enrolling.\n\nCourse: ${title}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;
      safeOpen(`${enrollUrl}?text=${encodeURIComponent(message)}`, "_blank");
      setModalOpen(false);
    }
  };

  return (
    <>
      <div className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-[#2a2a2a] hover:border-[#FEC447]/60 transition-all duration-300">
        {/* Image Section */}
        <div className="relative w-full h-[240px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/80 px-3 py-1 rounded-full text-sm text-[#FEC447]">
            <FaClock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col gap-4">
          {/* Title */}
          <h2 className="text-white text-2xl font-semibold leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-[#bfbfbf] text-[15px] leading-relaxed">
            {description}
          </p>

          {/* Learn Points */}
          <div className="mt-3">
            <h3 className="text-[#FEC447] text-[15px] mb-2 font-medium">
              What Youll Learn
            </h3>
            <ul className="flex flex-col gap-2">
              {learnPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-[#ccc] text-[14px]"
                >
                  <FaCheck className="text-[#FEC447] mt-[2px]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleEnroll}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#FEC447] to-[#F8E38C] text-black font-semibold hover:opacity-90 transition-all duration-200"
            >
              Enroll Now
            </button>
            <button
              onClick={handleKnowMore}
              className="flex-1 py-3 rounded-xl border border-[#FEC447] text-[#FEC447] font-semibold hover:bg-[#FEC447] hover:text-black transition-all duration-200"
            >
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-[#1a1a1a] rounded-lg p-6 w-[90%] max-w-[400px] text-white border border-[#2a2a2a]">
            <h2 className="text-xl font-semibold mb-4 text-[#FEC447]">
              Enroll in {title}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-2 rounded bg-[#2a2a2a] border border-[#444] text-white focus:outline-none focus:border-[#FEC447]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-2 rounded bg-[#2a2a2a] border border-[#444] text-white focus:outline-none focus:border-[#FEC447]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="p-2 rounded bg-[#2a2a2a] border border-[#444] text-white focus:outline-none focus:border-[#FEC447]"
                required
              />
              <div className="flex justify-end gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-[#333] rounded hover:opacity-80 transition-all duration-200"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#FEC447] to-[#F8E38C] text-black font-semibold rounded hover:opacity-90 transition-all duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
