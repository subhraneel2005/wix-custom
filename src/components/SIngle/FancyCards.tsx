import React from "react";
import { FaLeaf, FaPen, FaWandMagicSparkles } from "react-icons/fa6";

interface CardData {
  icon: string;
  title: string;
  items: string[];
}

interface FancyCardsProps {
  cards: CardData[];
}

// Icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  FaLeaf: <FaLeaf className="text-black text-[22px]" />,
  FaPen: <FaPen className="text-black text-[22px]" />,
  FaWandMagicSparkles: (
    <FaWandMagicSparkles className="text-black text-[22px]" />
  ),
};

export default function FancyCards({ cards }: FancyCardsProps) {
  return (
    <div className="h-full flex flex-wrap justify-center items-center gap-8 py-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative bg-[rgba(25,25,25,0.85)] backdrop-blur-xl text-white rounded-2xl p-6 w-[300px] min-h-[250px] flex flex-col border border-[rgba(255,215,0,0.3)] shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(255,215,0,0.4)] overflow-hidden"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none border border-[#ffd700]" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="h-[60px] w-[60px] rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#ffd700] to-[#ffb347] shadow-[0_0_20px_rgba(255,215,0,0.4)] mb-4">
              {iconMap[card.icon] || iconMap.FaLeaf}
            </div>

            {/* Title */}
            <h3 className="text-[1.4rem] font-semibold bg-gradient-to-tr from-white to-[#ffd700] bg-clip-text text-transparent">
              {card.title}
            </h3>

            {/* List */}
            <ul className="mt-4 space-y-2">
              {card.items.map((item, i) => (
                <li
                  key={i}
                  className="text-[#d9d9d9] text-[1rem] relative pl-5 before:content-['★'] before:text-[#ffd700] before:absolute before:left-0 before:text-[0.9rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
