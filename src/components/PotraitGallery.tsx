"use client";

import React from "react";

type PortraitGalleryProps = {
  mainImage: string;
  smallImages: string[]; // expects 4 images
};

export const PortraitGallery: React.FC<PortraitGalleryProps> = ({
  mainImage,
  smallImages,
}) => {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-5 max-w-[1200px] w-full h-[70vh] min-h-[500px]">
      {/* Main Portrait */}
      <div className="relative rounded-2xl overflow-hidden max-h-[800px]">
        <img
          src={mainImage}
          alt="Main Portrait"
          loading="lazy"
          className="w-full h-full object-cover filter sepia-20 saturate-120 contrast-[1.1] transition-all duration-500 ease-in-out hover:scale-105 hover:sepia-10 hover:saturate-140 hover:contrast-[1.2]"
        />
      </div>

      {/* Small Portraits Grid */}
      <div className="grid grid-rows-2 gap-3">
        {[0, 1].map((row) => (
          <div key={row} className="grid grid-cols-2 gap-3">
            {[0, 1].map((col) => {
              const idx = row * 2 + col;
              return (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#2a2a3e] to-[#1e1e32] shadow-[0_15px_35px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] cursor-pointer"
                >
                  <img
                    src={smallImages[idx]}
                    alt={`Portrait ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:brightness-[1.1] hover:contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage with 4 small portraits
export default function GalleryPage() {
  const main =
    "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/gallery/main.jpg";
  const smalls = [
    "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/gallery/lt.jpg",
    "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/gallery/lb.jpg",
    "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/gallery/rt.jpg",
    "https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/gallery/rb.jpg",
  ];

  return (
    <div className="flex justify-center items-center p-5 min-h-screen bg-[#010105]">
      <PortraitGallery mainImage={main} smallImages={smalls} />
    </div>
  );
}
