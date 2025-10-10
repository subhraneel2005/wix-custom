"use client";
import React, { useState } from "react";
import { FaClock, FaCheck } from "react-icons/fa";
import { MdPeopleAlt, MdBook } from "react-icons/md";

type CourseCardProps = {
  title: string;
  image: string;
  duration: string;
  students: string | number;
  modules: number;
  description: string;
  learnPoints: string[];
  enrollUrl?: string;
  knowMoreUrl?: string;
};

export function CourseCard({
  title,
  image,
  duration,
  students,
  modules,
  description,
  learnPoints,
  enrollUrl,
  knowMoreUrl,
}: CourseCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEnroll = () => setModalOpen(true);
  const handleKnowMore = () =>
    knowMoreUrl && window.open(knowMoreUrl, "_blank");

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
      window.open(`${enrollUrl}?text=${encodeURIComponent(message)}`, "_blank");
      setModalOpen(false);
    }
  };

  return (
    <>
      <div className="bg-[#191919] rounded-[24px] p-6 w-full shadow-lg flex flex-col gap-4 h-full">
        {/* Image */}
        <div
          className="w-full h-[320px] bg-center bg-contain rounded-[8px]"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Top Info */}
        <div className="flex flex-wrap justify-between mb-4 text-[#fff]">
          <div className="flex items-center gap-1 text-[#FEC447]">
            <FaClock className="w-4 h-4" />
            <span className="text-[14px] font-semibold">{duration}</span>
            <span className="text-[12px] ml-1 text-[#FEC447]">Duration</span>
          </div>

          <div className="flex items-center gap-1 text-[#FEC447]">
            <MdPeopleAlt className="w-4 h-4" />
            <span className="text-[14px] font-semibold">{students}</span>
            <span className="text-[12px] ml-1 text-[#FEC447]">Students</span>
          </div>

          <div className="flex items-center gap-1 text-[#FEC447]">
            <MdBook className="w-4 h-4" />
            <span className="text-[14px] font-semibold">{modules}</span>
            <span className="text-[12px] ml-1 text-[#FEC447]">Modules</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[24px] font-bold text-white mb-2">{title}</h2>

        {/* Description */}
        <p className="text-[16px] text-[#ccc] mb-4">{description}</p>

        {/* Learn Points */}
        <div className="mb-4">
          <h3 className="text-[16px] text-white mb-2">What You'll Learn:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {learnPoints.map((point, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-[#ccc] text-[14px]"
              >
                <FaCheck className="text-[#FEC447]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <button
            onClick={handleEnroll}
            className="flex-1 py-3 px-6 rounded-[25px] bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] text-[#2d2d2d] font-semibold hover:opacity-90 transition"
          >
            Enroll Now
          </button>
          <button
            onClick={handleKnowMore}
            className="flex-1 py-3 px-6 rounded-[25px] border-2 border-[#E59935] text-[#E59935] font-semibold hover:bg-[#E59935] hover:text-[#2d2d2d] transition"
          >
            Know More
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-[#222] rounded-lg p-6 w-[90%] max-w-[400px] text-white">
            <h2 className="text-xl mb-4">Enroll Now</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-2 rounded text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-2 rounded text-black"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="p-2 rounded text-black"
                required
              />
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-red-500 rounded hover:opacity-90 transition"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-400 text-black rounded hover:opacity-90 transition"
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
