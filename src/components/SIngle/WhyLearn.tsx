import Image from "next/image";
import React from "react";

export default function WhyLearn() {
  return (
    <section className="text-white py-16 px-4 mt-14 flex flex-col md:flex-row items-center justify-center gap-16 ">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/editing.jpg"
          alt="Photo Editing Class"
          width={400}
          height={200}
          className="rounded-2xl object-cover w-full h-auto"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Why Learn Photo Editing?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-8 italic">
          Photo editing is the backbone of photography, fashion, e-commerce, and
          social media. With Akshay Entertainment Academy, you&apos;ll gain
          professional Photoshop skills, real-world editing experience, and the
          confidence to work on weddings, brands, and freelance projects.
        </p>

        <button className="bg-[#FFD966] text-black rounded-[24px] px-6 py-2 font-semibold hover:bg-[#ffea8f] transition-all duration-200 cursor-pointer">
          Apply Now
        </button>
      </div>
    </section>
  );
}
