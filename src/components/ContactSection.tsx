"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    enquiryType: "",
    city: "",
  });

  const [success, setSuccess] = useState(false);

  const phoneNumber = "919916663357";
  const emailAddress = "abcdefvc@gmail.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, enquiryType, city } = formData;

    if (!firstName || !lastName || !email || !enquiryType || !city) {
      alert(
        "Please fill in all required fields (First name, Last name, Email, Enquiry Type, and City)"
      );
      return;
    }

    setSuccess(true);

    const whatsappMessage = `Hello! I'm reaching out through your website contact form.

*Contact Details:*
Name: ${firstName} ${lastName}
Email: ${email}
Enquiry Type: ${enquiryType}
City: ${city}

I look forward to hearing from you soon!`;

    setTimeout(() => {
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          enquiryType: "",
          city: "",
        });
        setSuccess(false);
      }, 2000);
    }, 1000);
  };

  const handleEmailClick = () => {
    const subject = "Inquiry from Website";
    const body =
      "Hello,\n\nI'm interested in learning more about your services.\n\nBest regards,";
    window.open(
      `mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_self"
    );
  };

  const handleCallClick = () => {
    window.open(`tel:+${phoneNumber}`, "_self");
  };

  const handleMapClick = () => {
    const mapURL =
      "https://www.google.com/maps/place/Akshay+Entertainment/@22.7529374,75.8577259,15z/data=!4m5!3m4!1s0x396302b52f307ef7:0x61d42e2f1ffba07c!8m2!3d22.7529374!4d75.8577259";
    window.open(mapURL, "_blank");
  };

  return (
    <div className="flex flex-col space-y-6 p-5 text-white py-12 mt-14">
      {/* Form + Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Contact Form */}
        <div className="bg-[#111] p-6 rounded-xl border border-white/10 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FEC447]">
            Get in touch <span className="italic">with us</span>
          </h2>
          <p className="text-sm text-gray-400 mb-6 mt-2">
            We're here to help with any questions or feedback
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="flex-1 p-3 rounded-md bg-gray-800/50 border border-gray-600 text-white focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 transition-transform duration-200"
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="flex-1 p-3 rounded-md bg-gray-800/50 border border-gray-600 text-white focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 transition-transform duration-200"
              />
            </div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-800/50 border border-gray-600 text-white focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 transition-transform duration-200"
            />
            <input
              type="text"
              id="enquiryType"
              placeholder="Enquiry Type"
              value={formData.enquiryType}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-800/50 border border-gray-600 text-white focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 transition-transform duration-200"
            />
            <input
              type="text"
              id="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-800/50 border border-gray-600 text-white focus:outline-none focus:border-[#FEC447] focus:ring-1 focus:ring-[#FEC447] transition-transform duration-200"
            />
            <button
              type="submit"
              className="mt-3 px-6 py-3 bg-[#FEC447] cursor-pointer text-black font-semibold rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200 self-start"
            >
              Send Message
            </button>
            {success && (
              <div className="mt-2 p-3 border border-green-500 bg-green-100 text-green-700 rounded-md text-sm flex items-center gap-2">
                <i className="fas fa-check-circle"></i> Message sent
                successfully! Redirecting to WhatsApp...
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-5">
          <div
            className="h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={handleMapClick}
          >
            <img
              src="https://img.freepik.com/free-photo/empty-online-radio-studio-broadcasting-room-with-professional-microphone-video-light-used-podcast-transmission-video-podcasting-setup-with-digital-mixer-console-laptop-computer_482257-33423.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Studio"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div
              className="flex-1 bg-[#111] p-4 rounded-xl flex items-center gap-3 border border-white/10 hover:border-[#FEC447] hover:shadow-lg cursor-pointer transition-all"
              onClick={handleEmailClick}
            >
              <i className="fas fa-envelope text-[#FEC447] text-xl"></i>
              <div className="text-sm text-gray-300">
                <strong className="text-white block">Email</strong>
                Office: {emailAddress}
              </div>
            </div>
            <div
              className="flex-1 bg-[#111] p-4 rounded-xl flex items-center gap-3 border border-white/10 hover:border-[#FEC447] hover:shadow-lg cursor-pointer transition-all"
              onClick={handleCallClick}
            >
              <i className="fas fa-phone text-[#FEC447] text-xl"></i>
              <div className="text-sm text-gray-300">
                <strong className="text-white block">Phone</strong>
                Office: +91 9051819976
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div
        className="h-72 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
        onClick={handleMapClick}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.257285261754!2d75.85772591491903!3d22.752937385088365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302b52f307ef7%3A0x61d42e2f1ffba07c!2sAkshay%20Entertainment!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
