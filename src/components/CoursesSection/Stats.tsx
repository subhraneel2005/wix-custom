import React from "react";

export default function PremiumStats() {
  return (
    <div className=" flex items-center justify-center bg-black py-10 mt-24">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {/* Stat Box 1 */}
          <div className="flex-1 min-w-[260px] max-w-[380px] text-center bg-[rgba(20,20,20,0.8)] border border-[rgba(221,186,117,0.4)] rounded-2xl p-10 shadow-[0_6px_20px_rgba(221,186,117,0.15)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#DDBA75] hover:shadow-[0_10px_28px_rgba(221,186,117,0.3)]">
            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-[#DDBA75] to-[#FFD88C] bg-clip-text text-transparent">
              10+
            </div>
            <p className="text-[#f0f0f0]/85 text-[15px] tracking-[0.5px]">
              Years of Experience
            </p>
          </div>

          {/* Stat Box 2 */}
          <div className="flex-1 min-w-[260px] max-w-[380px] text-center bg-[rgba(20,20,20,0.8)] border border-[rgba(221,186,117,0.4)] rounded-2xl p-10 shadow-[0_6px_20px_rgba(221,186,117,0.15)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#DDBA75] hover:shadow-[0_10px_28px_rgba(221,186,117,0.3)]">
            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-[#DDBA75] to-[#FFD88C] bg-clip-text text-transparent">
              500+
            </div>
            <p className="text-[#f0f0f0]/85 text-[15px] tracking-[0.5px]">
              Students Enrolled
            </p>
          </div>

          {/* Stat Box 3 */}
          <div className="flex-1 min-w-[260px] max-w-[380px] text-center bg-[rgba(20,20,20,0.8)] border border-[rgba(221,186,117,0.4)] rounded-2xl p-10 shadow-[0_6px_20px_rgba(221,186,117,0.15)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#DDBA75] hover:shadow-[0_10px_28px_rgba(221,186,117,0.3)]">
            <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-[#DDBA75] to-[#FFD88C] bg-clip-text text-transparent flex justify-center items-center gap-2">
              5.0
              <span className="text-[#FFD88C] text-4xl drop-shadow-[0_0_8px_rgba(221,186,117,0.6)]">
                &#10038;
              </span>
            </div>
            <p className="text-[#f0f0f0]/85 text-[15px] tracking-[0.5px]">
              Google Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
