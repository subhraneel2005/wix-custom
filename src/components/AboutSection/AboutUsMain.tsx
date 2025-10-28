import React from "react";
import StudentsSay from "../CoursesSection/StudentsSay";

export default function AboutUsMain() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/aboutUs-bg.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Header Section */}
      <div className="text-center pt-20 md:pt-32 pb-8 px-6">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          The <span className="text-[#FEC447]">Vision</span> Behind the Lens
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[900px] mt-4 mx-auto leading-relaxed">
          Our vision is clear—blend creativity with excellence while positioning
          Karnataka as a world-class filming destination. From its breathtaking
          landscapes to its rich heritage, we showcase the state&apos;s
          cinematic charm to global audiences and international filmmakers.
        </p>
      </div>

      {/* Tilted Image Cards Section */}
      <div className="relative h-[200px] md:h-[280px] mb-12 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="w-32 h-44 md:w-44 md:h-60 rounded-2xl overflow-hidden shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
            <img
              src="https://picsum.photos/seed/film1/400/600"
              alt="Cinema 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="w-32 h-44 md:w-44 md:h-60 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <img
              src="https://picsum.photos/seed/film2/400/600"
              alt="Cinema 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="w-32 h-44 md:w-44 md:h-60 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <img
              src="https://picsum.photos/seed/film3/400/600"
              alt="Cinema 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 4 */}
          <div className="w-32 h-44 md:w-44 md:h-60 rounded-2xl overflow-hidden shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <img
              src="https://picsum.photos/seed/film4/400/600"
              alt="Cinema 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 pb-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - About Us Section */}
          <div className="relative">
            {/* Large "01" Background Number */}
            <div className="absolute -top-40 -left-4 md:-left-8 text-[120px] md:text-[300px] font-bold text-white/5 leading-none pointer-events-none">
              01
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl text-white mb-4">About Us</h3>
              <div className="text-white/80 text-sm md:text-xl leading-relaxed">
                <p>
                  <span className="font-semibold text-[#FEC447]">
                    Akshay Entertainment
                  </span>{" "}
                  is a film production company, run by a Akshay Chandrashekhar
                  who is an Actor, creative and talented individual and
                  committed to producing, financing and distributing high
                  quality entertainment. Here, we are working hard to uncover
                  better ways to working with films and have them shine in
                  Kannada film Industry. Our soul aim is to promote Karnataka as
                  an exciting and dynamic filming destination to the
                  international filmmakers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Our Story Section */}
          <div className="relative">
            {/* Large "02" Background Number */}
            <div className="absolute -top-40 -right-4 md:-right-8 text-[120px] md:text-[300px] font-bold text-white/5 leading-none pointer-events-none">
              02
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl text-white mb-4">
                Our Story
              </h3>
              <div className="text-white/80 text-sm md:text-base leading-relaxed space-y-3">
                <p>
                  <span className="font-semibold text-white">Started</span> In
                  The Year 2018, Produced its 1st Short Film in Kannada and
                  bagged as many as 21 National & International Awards, Which is
                  a record in it self in kannada Industry.
                </p>
                <p>
                  We provide film and video line production services in
                  Karnataka for agencies, brands, artists, TV networks and
                  overseas production houses. Our full spectrum of services
                  include coordinating your local production in Karnataka,
                  filming content on your behalf, delivering raw or edited
                  footage in any format you request.
                </p>
                <p>
                  Akshay Entertainment provides a full spectrum of production
                  services of the highest standards for international and local
                  feature films, commercials, documentaries, tv productions...
                </p>
                <p>
                  We provide creative solutions to your filming needs as well as
                  a full range of production services. Our services include
                  getting permits for filming, production consultation, location
                  scouting, crew management, equipment rental, transportation
                  solutions, casting and accommodation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Quote */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="text-5xl md:text-6xl text-[#FEC447] font-serif mb-3">
                &quot;
              </div>
              <p className="text-white/90 text-base md:text-xl italic leading-relaxed">
                <span className="font-medium">Through the lens of cinema</span>,
                we capture not just moments, but{" "}
                <span className="font-semibold text-white">
                  emotions, cultures, and the untold stories
                </span>{" "}
                that shape our world. We turn imagination into moving reality—
                <span className="font-bold text-[#FEC447]">
                  one frame at a time
                </span>
                .
              </p>
            </div>

            {/* Courses Button */}
            <button className="mt-6 md:mt-8 px-10 py-2.5 border-2 border-[#FEC447] text-[#FEC447] rounded-full hover:bg-[#FEC447] hover:text-black transition-all duration-300 font-medium text-sm md:text-base">
              Courses
            </button>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/man.png"
                alt="Cinematographer"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center px-6">
        <h2 className="md:text-6xl text-3xl font-bold text-white">
          Why we started the <span className="text-[#FEC447]">Courses</span>
        </h2>
        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          We started this course because we realized that many passionate
          learners struggle to find structured, practical, and engaging
          resources that truly prepare them for real-world challenges. Most
          courses out there are either too theoretical or too overwhelming,
          leaving learners confused about where to begin and how to apply their
          knowledge.
        </p>

        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          Our goal was simple: to create a learning journey that feels less like
          a classroom and more like a guided experience. We wanted to break down
          complex concepts into simple, digestible lessons, supported by
          hands-on examples and projects. This course was designed to bridge the
          gap between knowledge and application—so that by the end, you
          don&apos;t just know the subject, you can actually use it confidently.
        </p>

        <p className="md:text-lg text-sm italic text-white/60 max-w-[1100px] mt-4 mx-auto leading-relaxed">
          Most importantly, we started this course to build a community of
          learners who can support, inspire, and grow together. Learning should
          not be a lonely path—it should be shared, celebrated, and impactful.
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
    </div>
  );
}
