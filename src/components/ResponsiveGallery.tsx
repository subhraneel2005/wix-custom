"use client";

import { useState, useEffect } from "react";

type Category =
  | "all"
  | "production"
  | "direction"
  | "cinematography"
  | "audio"
  | "equipment"
  | "editing"
  | "vfx";

interface ImageCategories {
  [key: string]: string[];
}

const imageCategories: ImageCategories = {
  all: [
    "https://picsum.photos/400/600?random=1",
    "https://picsum.photos/500/400?random=2",
    "https://picsum.photos/400/800?random=3",
    "https://picsum.photos/500/400?random=4",
    "https://picsum.photos/500/300?random=5",
    "https://picsum.photos/500/300?random=6",
    "https://picsum.photos/300/800?random=7",
  ],
  production: [
    "https://picsum.photos/400/600?random=10",
    "https://picsum.photos/500/400?random=11",
    "https://picsum.photos/400/800?random=12",
    "https://picsum.photos/500/400?random=13",
    "https://picsum.photos/500/300?random=14",
    "https://picsum.photos/500/300?random=15",
    "https://picsum.photos/300/800?random=16",
  ],
  direction: [
    "https://picsum.photos/400/600?random=20",
    "https://picsum.photos/500/400?random=21",
    "https://picsum.photos/400/800?random=22",
    "https://picsum.photos/500/400?random=23",
    "https://picsum.photos/500/300?random=24",
    "https://picsum.photos/500/300?random=25",
    "https://picsum.photos/300/800?random=26",
  ],
  cinematography: [
    "https://picsum.photos/400/600?random=30",
    "https://picsum.photos/500/400?random=31",
    "https://picsum.photos/400/800?random=32",
    "https://picsum.photos/500/400?random=33",
    "https://picsum.photos/500/300?random=34",
    "https://picsum.photos/500/300?random=35",
    "https://picsum.photos/300/800?random=36",
  ],
  audio: [
    "https://picsum.photos/400/600?random=40",
    "https://picsum.photos/500/400?random=41",
    "https://picsum.photos/400/800?random=42",
    "https://picsum.photos/500/400?random=43",
    "https://picsum.photos/500/300?random=44",
    "https://picsum.photos/500/300?random=45",
    "https://picsum.photos/300/800?random=46",
  ],
  equipment: [
    "https://picsum.photos/400/600?random=50",
    "https://picsum.photos/500/400?random=51",
    "https://picsum.photos/400/800?random=52",
    "https://picsum.photos/500/400?random=53",
    "https://picsum.photos/500/300?random=54",
    "https://picsum.photos/500/300?random=55",
    "https://picsum.photos/300/800?random=56",
  ],
  editing: [
    "https://picsum.photos/400/600?random=60",
    "https://picsum.photos/500/400?random=61",
    "https://picsum.photos/400/800?random=62",
    "https://picsum.photos/500/400?random=63",
    "https://picsum.photos/500/300?random=64",
    "https://picsum.photos/500/300?random=65",
    "https://picsum.photos/300/800?random=66",
  ],
  vfx: [
    "https://picsum.photos/400/600?random=70",
    "https://picsum.photos/500/400?random=71",
    "https://picsum.photos/400/800?random=72",
    "https://picsum.photos/500/400?random=73",
    "https://picsum.photos/500/300?random=74",
    "https://picsum.photos/500/300?random=75",
    "https://picsum.photos/300/800?random=76",
  ],
};

interface Tab {
  id: Category;
  label: string;
}

const tabs: Tab[] = [
  { id: "all", label: "All" },
  { id: "production", label: "Production" },
  { id: "direction", label: "Direction" },
  { id: "cinematography", label: "Cinematography" },
  { id: "audio", label: "Audio" },
  { id: "equipment", label: "Equipment" },
  { id: "editing", label: "Editing" },
  { id: "vfx", label: "VFX" },
];

export default function ResponsiveGallery() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [height, setHeight] = useState("400px");
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    const images = imageCategories[activeTab];
    const newLoadedImages = {};
    const newImageErrors = {};

    images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
      };
      img.onerror = () => {
        setImageErrors((prev) => ({ ...prev, [index]: true }));
      };
      img.src = src;
    });
  }, [activeTab]);

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width >= 769 && width <= 1024) {
        setHeight("350px");
      } else {
        setHeight("400px");
      }
    };

    updateHeight(); // initial check
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleTabClick = (tabId: Category) => {
    setActiveTab(tabId);
    setLoadedImages({});
    setImageErrors({});
  };

  const images = imageCategories[activeTab];

  return (
    <div className="max-w-[1000px] mx-auto">
      <style>{`
        
       
        .gallery-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          z-index: 10;
        }
        
        @media (max-width: 768px) {
          .gallery-item:hover {
            transform: scale(1.02);
          }
        }
        
        /* Desktop positioning */
        @media (min-width: 769px) {
          .item-1 {
            left: 0;
            top: 25%;
            width: 12%;
            height: 50%;
          }
          
          .item-2 {
            left: 15%;
            top: 0;
            width: 20%;
            height: 47%;
          }
          
          .item-3 {
            left: 38%;
            top: 0;
            width: 24%;
            height: 100%;
          }
          
          .item-4 {
            left: 65%;
            top: 0;
            width: 20%;
            height: 47%;
          }
          
          .item-5 {
            left: 15%;
            top: 53%;
            width: 20%;
            height: 47%;
          }
          
          .item-6 {
            left: 65%;
            top: 53%;
            width: 20%;
            height: 47%;
          }
          
          .item-7 {
            right: 0;
            top: 25%;
            width: 12%;
            height: 50%;
          }
        }
        
        /* Tablet adjustments */
        @media (min-width: 769px) and (max-width: 1024px) {
          .item-1 {
            width: 14%;
            height: 55%;
            top: 22.5%;
          }
          
          .item-7 {
            width: 14%;
            height: 55%;
            top: 22.5%;
          }
          
          .item-2, .item-4, .item-5, .item-6 {
            width: 18%;
          }
          
          .item-2 {
            left: 17%;
          }
          
          .item-4 {
            left: 63%;
          }
          
          .item-5 {
            left: 17%;
          }
          
          .item-6 {
            left: 63%;
          }
        }
        
        /* Large desktop */
        @media (min-width: 1200px) {
          .gallery-container {
            max-width: 1200px;
          }
          
          .gallery-grid-desktop {
            height: 450px;
          }
        }
      `}</style>

      {/* Tabs */}
      <div className="flex justify-center mb-10 md:mb-10 flex-wrap gap-2 overflow-x-auto pb-1 md:pb-0 px-[15px] md:px-0 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              bg-transparent border rounded-full px-4 md:px-5 py-2 md:py-2
              text-xs md:text-sm whitespace-nowrap flex-shrink-0
              transition-all duration-300 ease-in-out
              ${
                activeTab === tab.id
                  ? "border-[#e59935] text-[#e59935] font-semibold"
                  : "border-[#333] text-[#999] hover:border-[#555] hover:text-[#ccc]"
              }
            `}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile Grid (visible on mobile only) */}
      <div
        className="md:hidden grid grid-cols-2 gap-[10px] h-[600px] px-[15px]"
        style={{ gridTemplateRows: "repeat(6, 1fr)" }}
      >
        {images.map((src, index) => {
          const gridStyles: { [key: number]: string } = {
            0: "col-start-1 row-start-1 row-span-2",
            1: "col-start-2 row-start-1",
            2: "col-span-2 row-start-3 row-span-2",
            3: "col-start-2 row-start-2",
            4: "col-start-1 row-start-5",
            5: "col-start-2 row-start-5",
            6: "col-span-2 row-start-6",
          };

          return (
            <div
              key={index}
              className={`rounded-[15px] overflow-hidden cursor-pointer gallery-item ${gridStyles[index]}`}
            >
              {!loadedImages[index] && !imageErrors[index] && (
                <div
                  className="w-full h-full flex items-center justify-center bg-[#1a1a1a] text-[#666] text-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Loading...
                </div>
              )}
              {imageErrors[index] && (
                <div
                  className="w-full h-full flex items-center justify-center bg-[#1a1a1a] text-[#666] text-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Error loading
                </div>
              )}
              {loadedImages[index] && (
                <img
                  src={src}
                  alt={`${activeTab} image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop Grid (visible on desktop only) */}
      <div
        className="hidden md:block relative w-full h-[400px] mx-auto gallery-grid-desktop"
        style={{ height }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute rounded-[20px] overflow-hidden cursor-pointer gallery-item item-${
              index + 1
            }`}
          >
            {!loadedImages[index] && !imageErrors[index] && (
              <div
                className="w-full h-full flex items-center justify-center bg-[#1a1a1a] text-[#666] text-sm"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Loading...
              </div>
            )}
            {imageErrors[index] && (
              <div
                className="w-full h-full flex items-center justify-center bg-[#1a1a1a] text-[#666] text-sm"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Error loading
              </div>
            )}
            {loadedImages[index] && (
              <img
                src={src}
                alt={`${activeTab} image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
