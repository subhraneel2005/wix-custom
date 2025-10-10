"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutUs" },
    { name: "Courses", href: "/courses" },
    { name: "Events", href: "/events" },
    { name: "Films", href: "/films" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (item: string) => {
    setActive(item);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img src="/akshay.png" alt="Logo" width="80" height="80" />
          </Link>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`px-4 py-2 rounded-[24px] border transition-all duration-200
                ${
                  active === item.name
                    ? "border-[#ffd966]"
                    : "border-transparent"
                } hover:border-[#ffd966]/50`}
            >
              <span
                className={`${
                  active === item.name ? "text-[#ffd966]" : "text-white/90"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-[#ffd966] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ffd966] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ffd966] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 pb-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.name)}
              className={`px-4 py-2 rounded-[24px] border transition-all duration-200
                ${
                  active === item.name
                    ? "border-[#ffd966]"
                    : "border-transparent"
                } hover:border-[#ffd966]/50`}
            >
              <span
                className={`${
                  active === item.name ? "text-[#ffd966]" : "text-white/90"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
