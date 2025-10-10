"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/heroImg.jpeg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Hero Content */}
      <div className="text-center mt-20 container">
        <h1 className="md:text-7xl text-4xl font-bold text-white">
          Lights. Camera. <span className="text-[#FEC447]">Excellence</span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            className="bg-[#FFD966] text-black rounded-[24px] px-6 py-2 font-semibold hover:bg-[#ffea8f] transition-all duration-200 cursor-pointer"
            onClick={() =>
              router.push("https://www.akshayentertainment.com/watch-movie")
            }
          >
            Watch Trailer
          </button>

          <button
            onClick={() =>
              router.push("https://www.akshayentertainment.com/watch-movie")
            }
            className="border border-[#E59935] text-[#FFE998] rounded-[24px] px-6 py-2 font-semibold bg-transparent hover:bg-[#e59935]/20 transition-all duration-200 cursor-pointer"
          >
            Rent ₹30
          </button>
        </div>
      </div>
    </div>
  );
}
