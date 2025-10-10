"use client";
import React, { useState } from "react";

const categories = {
  portrait:
    "https://raw.githubusercontent.com/ServiceStack/images/master/hero/photo-1429552054921-018e433d7d34.jpg",
  product:
    "https://raw.githubusercontent.com/ServiceStack/images/master/hero/photo-1453090927415-5f45085b65c0.jpg",
  wedding:
    "https://raw.githubusercontent.com/ServiceStack/images/master/hero/photo-1493704074932-e1c9d6ccd131.jpg",
  creative:
    "https://raw.githubusercontent.com/ServiceStack/images/master/hero/photo-1509664158680-07c5032b51e5.jpg",
};

export default function TabbedImageGallery() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof categories>("portrait");
  const [fade, setFade] = useState(false);

  const handleTabClick = (category: keyof typeof categories) => {
    if (category === activeTab) return;
    setFade(true);
    setTimeout(() => {
      setActiveTab(category);
      setFade(false);
    }, 300);
  };

  return (
    <section className="text-white text-center py-10 px-6">
      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-6 mb-6">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            onClick={() => handleTabClick(key as keyof typeof categories)}
            className={`px-4 py-1 rounded-full border transition-all duration-300 font-medium ${
              activeTab === key
                ? "border-[#e59935] text-[#ffe998] bg-transparent"
                : "border-transparent text-white hover:text-[#ffe998]"
            }`}
          >
            {key === "portrait"
              ? "Portrait"
              : key === "product"
              ? "Product"
              : key === "wedding"
              ? "Wedding"
              : "Creative Posters"}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="max-w-[900px] mx-auto">
        <img
          src={categories[activeTab]}
          alt={`${activeTab} gallery`}
          className={`w-full border border-[#e59935] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] object-cover transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          } h-[500px] md:h-[500px] sm:h-[300px]`}
        />
      </div>
    </section>
  );
}
