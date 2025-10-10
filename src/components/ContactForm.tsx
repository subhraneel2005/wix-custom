"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

type FormData = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  interest: string;
};

type ContactBoxProps = {
  icon: React.ReactNode;
  title: string;
  info: string;
  onClick: () => void;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    interest: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, mobile, email, interest } = formData;
    const whatsappMessage = `Hello! I'm interested in your services.

*Contact Details:*
Name: ${firstName} ${lastName}
Mobile: ${mobile}
Email: ${email}
Enquiry Type: ${interest}

Looking forward to hearing from you!`;

    sendToWhatsApp(whatsappMessage);
  };

  const sendToWhatsApp = (message: string) => {
    const phoneNumber = "919916663357";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const openWhatsApp = () =>
    sendToWhatsApp("Hello! I'd like to know more about your services.");
  const callUs = () => window.open("tel:+919916663357", "_self");
  const openMaps = () =>
    window.open(
      "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent("123 Avenue, Bengaluru"),
      "_blank"
    );
  const sendEmail = () =>
    window.open(
      `mailto:123@gmail.com?subject=${encodeURIComponent(
        "Inquiry about your services"
      )}&body=${encodeURIComponent(
        "Hello,\n\nI'm interested in learning more about your services.\n\nBest regards,"
      )}`,
      "_self"
    );
  const openWebsite = () => window.open("https://www.123.com", "_blank");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2  p-8 md:p-12 rounded-3xl bg-[#1A1A1A] border border-white/5">
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#EDAC40] to-[#F6CC74] bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-gray-400 text-base">
                Fill out the form below and we'll get back to you soon
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-[#EDAC40]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-black/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#EDAC40] focus:ring-2 focus:ring-[#EDAC40]/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-[#EDAC40]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-black/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#EDAC40] focus:ring-2 focus:ring-[#EDAC40]/20 transition-all"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-[#EDAC40]"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-black/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#EDAC40] focus:ring-2 focus:ring-[#EDAC40]/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-[#EDAC40]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-black/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#EDAC40] focus:ring-2 focus:ring-[#EDAC40]/20 transition-all"
                  />
                </div>
              </div>

              {/* Enquiry Type */}
              <div>
                <label
                  htmlFor="interest"
                  className="block mb-2 text-sm font-medium text-[#EDAC40]"
                >
                  Enquiry Type
                </label>
                <select
                  id="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-black/50 border border-gray-700/50 text-white cursor-pointer focus:outline-none focus:border-[#EDAC40] focus:ring-2 focus:ring-[#EDAC40]/20 transition-all appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23EDAC40'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1.25rem",
                  }}
                >
                  <option value="">Select an enquiry type</option>
                  <option value="Cinematography">Cinematography</option>
                  <option value="Production">Production</option>
                  <option value="Direction">Direction</option>
                  <option value="Audio">Audio</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Editing">Editing</option>
                  <option value="VFX">VFX</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-8 py-4 px-8 rounded-xl font-semibold text-base bg-gradient-to-r from-[#EDAC40] to-[#F6CC74] text-black shadow-lg hover:shadow-[#EDAC40]/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#EDAC40] to-[#F6CC74] bg-clip-text text-transparent">
                  Contact Us
                </h3>
                <p className="text-gray-400 text-sm">
                  Choose your preferred way to reach us
                </p>
              </div>

              <div className="space-y-4">
                <ContactBox
                  icon={<FaWhatsapp />}
                  title="WhatsApp Us"
                  info="Quick Response"
                  onClick={openWhatsApp}
                />
                <ContactBox
                  icon={<FaPhone />}
                  title="Call Us"
                  info="+91 11-2233-44"
                  onClick={callUs}
                />
                <ContactBox
                  icon={<FaMapMarkerAlt />}
                  title="Visit Us"
                  info="123 Avenue, Bengaluru"
                  onClick={openMaps}
                />
                <ContactBox
                  icon={<FaEnvelope />}
                  title="Email Us"
                  info="123@gmail.com"
                  onClick={sendEmail}
                />
                <ContactBox
                  icon={<FaGlobe />}
                  title="Website"
                  info="www.123.com"
                  onClick={openWebsite}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactBox: React.FC<ContactBoxProps> = ({
  icon,
  title,
  info,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="group flex items-center gap-4 p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 cursor-pointer hover:border-[#EDAC40]/30 hover:shadow-lg hover:shadow-[#EDAC40]/10 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#EDAC40]/10 border border-[#EDAC40]/20 group-hover:bg-[#EDAC40]/20 group-hover:border-[#EDAC40]/40 transition-all duration-300">
      <span className="text-[#EDAC40] text-xl">{icon}</span>
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-semibold text-white text-sm mb-0.5">{title}</h4>
      <p className="text-gray-400 text-xs truncate">{info}</p>
    </div>
  </div>
);
