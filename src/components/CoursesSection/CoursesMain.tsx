import React from "react";
import {
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import LeadForm from "../LeadForm";
import CourseFeatures from "./CourseFeatures";
import CurvedGallery from "./CurvedGallery";
import PremiumStats from "./Stats";
import OurCourses from "./OurCourses";
import StudentsSay from "./StudentsSay";
import FAQ from "./Faq";
import LastForm from "./LastForm";

export default function CoursesMain() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center md:pt-[120px] pt-20 pb-16 px-6">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="md:text-5xl text-3xl font-bold text-white leading-tight">
                Join Us & Turn <span className="text-[#FEC447]">Dreams</span>{" "}
                Into Films
              </h2>
              <p className="md:text-base text-sm italic text-white/60 mt-6 leading-relaxed">
                Dive into the world of storytelling through visuals. This course
                covers everything from camera operation and lighting techniques
                to video editing and sound design. Work on real-life projects,
                gain hands-on experience, and learn from industry experts. By
                the end, you&apos;ll have the skills, confidence, and portfolio
                to create captivating content for film, TV, or digital
                platforms.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-8 items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AE06EE]"
              >
                <FaInstagramSquare size={40} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1778F2]"
              >
                <FaFacebook size={40} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007CB4]"
              >
                <FaLinkedin size={40} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FB0000]"
              >
                <FaYoutube size={40} />
              </a>
            </div>

            {/* Get Started Button */}
            <div>
              <a
                href="https://wa.me/919916663357"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#DCBD47] text-black font-semibold rounded-lg hover:bg-[#FEC447] transition-colors shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Column - Lead Form Placeholder */}
          <div className="flex justify-center lg:justify-end">
            {/* Your LeadForm component will go here */}
            <div className="w-full max-w-md text-white/50">
              <LeadForm />
            </div>
          </div>
        </div>
        <CourseFeatures />
        <CurvedGallery />
        <PremiumStats />
        <OurCourses />
        <div className="text-center mt-24 px-6">
          <h2 className="md:text-6xl text-3xl font-bold text-white">
            Why we started the <span className="text-[#FEC447]">Courses</span>
          </h2>
          <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
            We started this course because we realized that many passionate
            learners struggle to find structured, practical, and engaging
            resources that truly prepare them for real-world challenges. Most
            courses out there are either too theoretical or too overwhelming,
            leaving learners confused about where to begin and how to apply
            their knowledge.
          </p>

          <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
            Our goal was simple: to create a learning journey that feels less
            like a classroom and more like a guided experience. We wanted to
            break down complex concepts into simple, digestible lessons,
            supported by hands-on examples and projects. This course was
            designed to bridge the gap between knowledge and application—so that
            by the end, you don&apos;t just know the subject, you can actually
            use it confidently.
          </p>

          <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
            Most importantly, we started this course to build a community of
            learners who can support, inspire, and grow together. Learning
            should not be a lonely path—it should be shared, celebrated, and
            impactful.
          </p>

          <div>
            <a
              href="#leadForm"
              className="inline-block px-8 py-3 mt-6 bg-[#DCBD47] text-black font-semibold rounded-lg hover:bg-[#FEC447] transition-colors shadow-l cursor-pointer"
            >
              Apply Now
            </a>
          </div>
        </div>
        <StudentsSay />
        <FAQ />
        <LastForm />
      </div>
    </div>
  );
}
