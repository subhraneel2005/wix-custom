import React from "react";

import { ClipboardList, Briefcase, Pen, Layers } from "lucide-react";

const features = [
  {
    icon: <ClipboardList size={18} color="#000" />,
    title: "Real Projects + Portfolio",
    description:
      "Creative storytelling and creative consulting for your projects.",
  },
  {
    icon: <Briefcase size={18} color="#000" />,
    title: "Internship & Freelance",
    description:
      "Creative storytelling and creative consulting for your projects.",
  },
  {
    icon: <Pen size={18} color="#000" />,
    title: "Learn from Professionals",
    description:
      "Creative storytelling and creative consulting for your projects.",
  },
  {
    icon: <Layers size={18} color="#000" />,
    title: "20k+ Free Resources",
    description:
      "Creative storytelling and creative consulting for your projects.",
  },
];

const FeatureCards: React.FC = () => {
  return (
    <div className="flex justify-center p-4 py-10">
      <div className="grid w-full max-w-[1100px] gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#191919] text-white rounded-xl p-6 min-h-[160px] flex flex-col shadow-[0px_4px_12px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="h-[45px] w-[45px] rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-[#e59935] to-[#ffe998]">
              {feature.icon}
            </div>
            <h3 className="text-[1rem] font-semibold mb-2">{feature.title}</h3>
            <p className="text-[0.9rem] text-[#d1d1d1]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
