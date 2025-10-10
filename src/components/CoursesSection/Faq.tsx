"use client";

import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long do I have access to the course materials?",
    answer: (
      <>
        <p>
          You'll have{" "}
          <span className="bg-yellow-400/40 px-1 rounded">lifetime access</span>{" "}
          to all course materials once you enroll. This includes video lectures,
          downloadable resources, assignments, and any future updates to the
          course content.
        </p>
        <p>
          We believe in continuous learning, so you can revisit the materials
          whenever you need a refresher or want to dive deeper into specific
          topics.
        </p>
      </>
    ),
  },
  {
    question: "Do you offer certificates upon completion?",
    answer: (
      <>
        <p>
          Yes! Upon successful completion of the course, you'll receive a{" "}
          <span className="bg-yellow-400/40 px-1 rounded">
            verified certificate
          </span>{" "}
          that you can share on your LinkedIn profile, resume, or portfolio.
        </p>
        <p>
          Our certificates are recognized by industry professionals and include
          verification codes to ensure authenticity.
        </p>
      </>
    ),
  },
  {
    question: "What's your refund policy?",
    answer: (
      <>
        <p>
          We offer a{" "}
          <span className="bg-yellow-400/40 px-1 rounded">
            30-day money-back guarantee
          </span>{" "}
          for all our courses. If you're not completely satisfied with your
          learning experience, you can request a full refund within 30 days of
          purchase.
        </p>
        <p>
          Simply contact our support team with your order details, and we'll
          process your refund within 5-7 business days.
        </p>
      </>
    ),
  },
  {
    question: "Are there any prerequisites for enrolling in courses?",
    answer: (
      <>
        <p>
          Most of our courses are designed for{" "}
          <span className="bg-yellow-400/40 px-1 rounded">
            beginners to intermediate
          </span>{" "}
          learners. Each course page clearly lists any specific prerequisites or
          recommended background knowledge.
        </p>
        <p>
          For advanced courses, we may require completion of foundational
          courses or equivalent experience. Don't worry - we'll guide you to the
          right starting point based on your current skill level.
        </p>
      </>
    ),
  },
  {
    question: "Can I access courses on mobile devices?",
    answer: (
      <>
        <p>
          Absolutely! Our platform is{" "}
          <span className="bg-yellow-400/40 px-1 rounded">
            fully responsive
          </span>{" "}
          and optimized for mobile learning. You can access all course content
          on smartphones, tablets, laptops, and desktop computers.
        </p>
        <p>
          We also offer offline viewing options for video content, so you can
          download lessons and learn on the go, even without an internet
          connection.
        </p>
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-full px-2 py-6 bg-black">
      <div className="max-w-7xl mx-auto bg-[#191919] rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#191919] to-[#2d2d2d] text-white text-center px-10 py-16">
          <div className="relative z-10">
            <FaQuestionCircle className="inline mr-4 text-yellow-400 text-2xl" />
            <h1 className="text-4xl font-bold mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-lg opacity-80 font-light">
              Everything you need to know about our courses
            </p>
          </div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(254,196,71,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>\')',
            }}
          />
        </div>

        {/* FAQ List */}
        <div className="px-10 py-10 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border border-yellow-400 rounded-2xl overflow-hidden transition-all duration-300 transform ${
                  isOpen
                    ? "shadow-lg translate-y-0"
                    : "hover:-translate-y-0.5 hover:shadow-md"
                }`}
              >
                <button
                  className={`flex items-center justify-between w-full px-6 py-5 text-left font-medium transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#191919] font-semibold"
                      : "bg-[#191919] text-white"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`transition-transform duration-400 ${
                      isOpen ? "rotate-180 text-[#191919]" : "text-gray-400"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-gray-400 text-base leading-relaxed border-t border-gray-200">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
