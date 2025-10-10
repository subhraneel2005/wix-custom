import React from "react";
import LastContactForm from "./LastContactForm";

export default function LastForm() {
  return (
    <div className="text-center mt-24 px-6">
      <h2 className="md:text-6xl text-3xl font-bold text-white">
        Want To Learn From Our <span className="text-[#FEC447]">Experts?</span>
      </h2>
      <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto leading-relaxed">
        Learn from industry experts through hands-on training and real-world
        projects. Our courses give you the skills and confidence to turn your
        passion for cinema into a professional career.
      </p>
      <LastContactForm />
    </div>
  );
}
