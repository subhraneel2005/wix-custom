import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "Film Production", href: "#film" },
    { name: "Post Production", href: "#post" },
    { name: "Cinematography", href: "#cinematography" },
    { name: "Sound Design", href: "#sound" },
  ];

  const courseLinks = [
    { name: "Photo Editing", href: "#photo" },
    { name: "Video Editing", href: "#video" },
    { name: "Cinematography", href: "#cinematography-course" },
    { name: "After Effects", href: "#effects" },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-5">
            <img
              src="/akshay.png"
              alt="Akshay Entertainment"
              className="h-16 mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Creating cinematic excellence through innovative storytelling and
              professional production services. Follow us on our journey to
              redefine entertainment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:info@akshayentertainment.com"
                  className="hover:text-white transition-colors"
                >
                  info@akshayentertainment.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-base font-semibold mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-base font-semibold mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-base font-semibold mb-5">Courses</h3>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 by Akshay Entertainment. All rights reserved.
          </p>
          <a
            href="#terms"
            className="text-gray-400 hover:text-white transition-colors text-sm underline decoration-gray-600 hover:decoration-white"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
