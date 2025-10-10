"use client";

import React, { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "whatsapp") {
      let formatted = value.replace(/\D/g, "");
      if (formatted.length > 0 && !formatted.startsWith("91")) {
        if (formatted.length === 10) {
          formatted = "91" + formatted;
        }
      }
      if (formatted.length > 12) formatted = formatted.substring(0, 12);

      if (formatted.length >= 2) {
        formatted =
          "+" + formatted.substring(0, 2) + " " + formatted.substring(2);
      }
      if (formatted.length > 8) {
        formatted = formatted.substring(0, 8) + " " + formatted.substring(8);
      }

      setFormData((prev) => ({ ...prev, whatsapp: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, whatsapp, email, city } = formData;

    if (!name || !whatsapp || !email || !city) {
      alert("Please fill in all required fields.");
      return;
    }

    const message =
      `*New Lead Inquiry*\n\n` +
      `📝 *Name:* ${name}\n` +
      `📱 *WhatsApp:* ${whatsapp}\n` +
      `📧 *Email:* ${email}\n` +
      `🏙️ *City:* ${city}\n\n` +
      `Generated from website form`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919916663357?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setFormData({ name: "", whatsapp: "", email: "", city: "" });
    }, 1000);
  };

  return (
    <div
      id="leadForm"
      className="max-w-[400px] mx-auto bg-[#0e0e0e] rounded-[12px] p-[30px] shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
    >
      <h2 className="text-[#D4AF37] text-[24px] font-semibold text-center mb-[25px]">
        Get In Touch
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-[20px]">
          <label
            className="block text-[#D4AF37] text-[14px] font-medium mb-[8px]"
            htmlFor="name"
          >
            Full Name <span className="text-[#ff4444]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-[12px_16px] bg-[#1a1a1a] border-2 border-[#333333] rounded-[8px] text-white text-[16px] transition-all duration-300 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] placeholder:text-[#888888]"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-[20px]">
          <label
            className="block text-[#D4AF37] text-[14px] font-medium mb-[8px]"
            htmlFor="whatsapp"
          >
            WhatsApp Number <span className="text-[#ff4444]">*</span>
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full p-[12px_16px] bg-[#1a1a1a] border-2 border-[#333333] rounded-[8px] text-white text-[16px] transition-all duration-300 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] placeholder:text-[#888888]"
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>

        <div className="mb-[20px]">
          <label
            className="block text-[#D4AF37] text-[14px] font-medium mb-[8px]"
            htmlFor="email"
          >
            Email Address <span className="text-[#ff4444]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-[12px_16px] bg-[#1a1a1a] border-2 border-[#333333] rounded-[8px] text-white text-[16px] transition-all duration-300 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] placeholder:text-[#888888]"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className="mb-[20px]">
          <label
            className="block text-[#D4AF37] text-[14px] font-medium mb-[8px]"
            htmlFor="city"
          >
            City <span className="text-[#ff4444]">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-[12px_16px] bg-[#1a1a1a] border-2 border-[#333333] rounded-[8px] text-white text-[16px] transition-all duration-300 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] placeholder:text-[#888888]"
            placeholder="Enter your city"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E878] text-black border-none py-[14px] px-[20px] text-[16px] font-semibold rounded-[8px] cursor-pointer transition-all duration-300 uppercase tracking-[1px] hover:from-[#F4E878] hover:to-[#D4AF37] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(212,175,55,0.3)] active:translate-y-0"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
