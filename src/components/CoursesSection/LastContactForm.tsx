"use client";

import React from "react";

export default function LastContactForm() {
  return (
    <div className="px-4 py-6 mt-12">
      <form className="grid gap-6 max-w-4xl mx-auto rounded-2xl">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="bg-[#191919] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="bg-[#191919] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter your number"
              className="bg-[#191919] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#191919] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Enquiry Type</label>
            <input
              type="text"
              placeholder="Enter enquiry type"
              className="bg-[#191919] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              className="bg-[#191919] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="cursor-pointer bg-gradient-to-tr from-[#e59935] via-[#ffe998] to-[#e59935] text-[#1a1a1a] rounded-full px-10 py-3 font-semibold shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
