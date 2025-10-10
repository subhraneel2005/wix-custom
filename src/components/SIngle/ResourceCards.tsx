import React from "react";

const resources = [
  {
    title: "Top Designers Font Bundle",
    desc: "Creative storytelling and consulting for your projects",
    price: "Worth ₹4,000",
  },
  {
    title: "Free Movie Poster Template",
    desc: "Creative storytelling and consulting for your projects",
    price: "Worth ₹4,500",
  },
  {
    title: "Free Template Pack",
    desc: "Creative storytelling and consulting for your projects",
    price: "Worth ₹4,000",
  },
  {
    title: "Important Resource Kit",
    desc: "Creative storytelling and consulting for your projects",
    price: "Worth ₹2,000",
  },
  {
    title: "Editing Presets & Brushes",
    desc: "Creative storytelling and consulting for your projects",
    price: "Worth ₹2,499",
  },
  {
    title: "Portfolio Session & Raw Files for Practice",
    desc: "Creative storytelling and consulting for your projects",
    price: "Worth ₹3,000",
  },
  {
    title: "Internship Opportunities",
    desc: "Creative storytelling and consulting for your projects",
  },
  {
    title: "Certificate of Completion",
    desc: "Creative storytelling and consulting for your projects",
  },
  {
    title: "Student Community Access",
    desc: "Creative storytelling and consulting for your projects",
  },
];

export default function ResourceCards() {
  return (
    <section className="flex justify-center px-6 py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[900px] w-full">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-[#191919] border border-[#333] rounded-md p-4 min-h-[100px] flex flex-col text-[#ccc]"
          >
            <h3 className="text-[#eee] text-[1rem] font-semibold mb-1">
              {item.title}
            </h3>
            <p className="text-[#aaa] text-[0.85rem] mb-2">{item.desc}</p>
            {item.price && (
              <div className="text-[#bbb] font-semibold text-[0.9rem]">
                {item.price}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
