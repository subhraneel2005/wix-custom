import ContactSection from "@/components/ContactSection";
import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen justify-center items-center flex flex-col w-full py-12 mt-12">
      <div className="container">
        <div className="text-center mt-24 px-6">
          <h2 className="md:text-6xl text-3xl font-bold text-white">
            Have Questions? We Have
            <span className="text-[#FEC447]"> Answers</span>
          </h2>
          <p className="md:text-lg text-sm italic text-white/60 max-w-[1000px] mt-4 mx-auto leading-relaxed">
            Our films blend powerful storytelling with stunning visuals,
            creating cinematic experiences that stay with audiences long after
            the credits roll. From concept to screen, we craft every detail with
            passion and precision, delivering movies that entertain, inspire,
            and connect with viewers worldwide.
          </p>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}
