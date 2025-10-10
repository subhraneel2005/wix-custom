import React from "react";

export default function LetsTalk() {
  return (
    <div className="h-full w-full flex flex-col items-center bg-black text-white mt-4 py-12">
      <div className="container flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="md:text-6xl text-3xl font-bold text-white">
            Let&apos;s <span className="text-[#FEC447]">Talk</span>
          </h2>
          <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto">
            Become a part of our passionate educator community and share your
            expertise with learners worldwide. As an instructor, you&apos;ll
            create engaging courses, guide students, and help shape their
            personal and professional success.
          </p>
        </div>

        {/* Two Images Side by Side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 w-full max-w-[900px]">
          <img
            src="/letsTalk1.jpg"
            alt="Lets Talk 1"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <img
            src="/letsTalk2.jpg"
            alt="Lets Talk 2"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
