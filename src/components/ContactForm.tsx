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
  fullWidth?: boolean;
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
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row max-w-[1400px] mx-auto gap-8 py-12 mt-8 px-4">
      {/* Form Section - Takes up more space */}
      <div className="bg-black/80 p-10 rounded-2xl backdrop-blur-md border border-white/10 md:w-[70%]">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#EDAC40] to-[#F6CC74] bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="mb-2 font-medium text-[#EDAC40]"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#EDAC40] focus:ring-1 focus:ring-[#EDAC40]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="mb-2 font-medium text-[#EDAC40]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#EDAC40] focus:ring-1 focus:ring-[#EDAC40]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label
                htmlFor="mobile"
                className="mb-2 font-medium text-[#EDAC40]"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your number"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#EDAC40] focus:ring-1 focus:ring-[#EDAC40]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 font-medium text-[#EDAC40]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#EDAC40] focus:ring-1 focus:ring-[#EDAC40]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="interest"
              className="mb-2 font-medium text-[#EDAC40]"
            >
              Enquiry Type
            </label>
            <select
              id="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white cursor-pointer focus:outline-none focus:border-[#EDAC40] focus:ring-1 focus:ring-[#EDAC40]"
            >
              <option value="">Select Enquiry Type</option>
              <option value="Cinematography">Cinematography</option>
              <option value="Production">Production</option>
              <option value="Direction">Direction</option>
              <option value="Audio">Audio</option>
              <option value="Equipment">Equipment</option>
              <option value="Editing">Editing</option>
              <option value="VFX">VFX</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-6 px-10 py-4 rounded-full font-semibold bg-[#F6CC74] text-black shadow-md hover:shadow-lg hover:translate-y-[-2px] hover:bg-[#EDAC40] transition-all"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Section - Smaller width */}
      <div className="flex flex-col gap-6 md:w-[30%]">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#EDAC40] to-[#F6CC74] bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-gray-400 text-sm">
            Choose your preferred way to reach us
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
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
    className="flex flex-col items-center justify-center p-5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all"
  >
    <div className="w-12 h-12 flex items-center justify-center mb-3 border-2 border-[#EDAC40]/30 rounded-full hover:border-[#EDAC40] hover:shadow-md transition-all">
      <span className="text-[#EDAC40] text-xl">{icon}</span>
    </div>
    <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
    <p className="text-gray-400 text-xs text-center">{info}</p>
  </div>
);
