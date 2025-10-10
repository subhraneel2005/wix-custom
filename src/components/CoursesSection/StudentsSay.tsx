import React from "react";
import Testimonials from "./Testimonial";

export default function StudentsSay() {
  return (
    <div className="text-center mt-24 px-6">
      <h2 className="md:text-6xl text-3xl font-bold text-white">
        What our <span className="text-[#FEC447]">Students</span> say
      </h2>
      <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
        Hear from our students as they share their experiences and success
        stories.Their journeys reflect the skills, confidence, and inspiration
        gained through our programs Real voices, real results, and real growth.
      </p>
      <Testimonials />
    </div>
  );
}
