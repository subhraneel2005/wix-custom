"use client";

import React, { useState } from "react";
import { Star, GraduationCap, X } from "lucide-react";

const MiniCourseCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

    const message = `Hello! I'm interested in enrolling for the Photoshop Basics course.

*Course Details:*
- Course: Photoshop Basics
- Price: ₹25,000

*My Details:*
- Name: ${name}
- Email: ${email}
- Phone: ${phone}`;

    const whatsappURL = `https://wa.me/919916663357?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    setIsModalOpen(false);
    form.reset();
  };

  return (
    <section className=" text-white px-6 md:px-16 py-16 flex flex-col md:flex-row items-center justify-center gap-12 font-['Playfair_Display']">
      {/* LEFT: Course Card */}
      <div className="bg-[#191919] rounded-xl p-5 w-full md:w-1/2 shadow-lg hover:-translate-y-1 transition-transform">
        <div
          className="w-full h-72 bg-contain bg-center rounded-lg mb-5 relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/photoshop-new.jpg')",
          }}
        ></div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#FFD700" stroke="#FFD700" />
            ))}
            <span className="text-sm text-gray-400 font-medium">9.5k</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3">Photoshop Basics</h2>
        <p className="text-gray-300 text-sm mb-5 leading-relaxed">
          Dive deep into the world of professional cinematography, from camera
          techniques and lighting to framing, movement, and mood. Learn how to
          shoot like a pro.
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#ff6b6b] flex items-center justify-center text-white font-semibold text-sm border-2 border-[#2d2d2d]">
                A
              </div>
              <div className="w-8 h-8 rounded-full bg-[#4ecdc4] flex items-center justify-center text-white font-semibold text-sm border-2 border-[#2d2d2d]">
                B
              </div>
              <div className="w-8 h-8 rounded-full bg-[#45b7d1] flex items-center justify-center text-white font-semibold text-sm border-2 border-[#2d2d2d]">
                C
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">25,000+</p>
              <p className="text-gray-400 text-xs">Students Enrolled</p>
            </div>
          </div>
        </div>

        {/* Enroll Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 w-full bg-gradient-to-r from-[#e59935] via-[#ffe998] to-[#e59935] text-black font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:shadow-[0_6px_20px_rgba(229,153,53,0.4)] transition-all"
        >
          <GraduationCap size={18} /> Enroll Today & Save 50%
        </button>
      </div>

      {/* RIGHT: Why Learn Photo Editing */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Why Learn Photo Editing?
        </h2>
        <p className="text-[#d1d1d1] leading-relaxed text-[15px]">
          Photo editing is the backbone of photography, fashion, e-commerce, and
          social media. With Akshay Entertainment Academy, you’ll gain
          professional Photoshop skills, real-world editing experience, and the
          confidence to work on weddings, brands, and freelance projects.
        </p>

        <button className="bg-[#FFD966] text-black rounded-[24px] px-6 py-2 font-semibold hover:bg-[#ffea8f] transition-all duration-200 cursor-pointer">
          Apply Now
        </button>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#2d2d2d] rounded-xl p-8 w-[90%] max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={22} />
            </button>
            <h3 className="text-2xl font-bold mb-6 text-white">Enroll Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white text-sm mb-2">
                  Full Name *
                </label>
                <input
                  name="name"
                  required
                  className="w-full bg-[#404040] border-none rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#e59935]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#404040] border-none rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#e59935]"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  required
                  className="w-full bg-[#404040] border-none rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#e59935]"
                  placeholder="Enter your phone number"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#e59935] via-[#ffe998] to-[#e59935] text-black font-semibold py-3 rounded-lg hover:shadow-[0_6px_20px_rgba(229,153,53,0.4)] transition-all"
              >
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default MiniCourseCard;
