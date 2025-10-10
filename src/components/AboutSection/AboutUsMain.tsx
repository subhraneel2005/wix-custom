import React from "react";

export default function AboutUsMain() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/aboutUs-bg.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Header Section */}
      <div className="text-center md:pt-[200px] pt-28 pb-16 px-6">
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

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 pb-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - About Us Section */}
          <div className="relative">
            {/* Large "01" Background Number */}
            <div className="absolute -top-12 -left-8 text-[200px] font-bold text-white/5 leading-none pointer-events-none">
              01
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl  text-white mb-6">
                About Us
              </h3>
              <div className="text-white/80 text-base leading-relaxed space-y-4">
                <p>
                  <span className="font-semibold text-[#FEC447]">
                    Akshay Entertainment
                  </span>
                  is a film production company, run by a Akshay Chandrashekhar
                  who is an Actor, creative and talented individual and
                  committed to producing, financing and distributing high
                  quality entertainment. Here, we are working hard to uncover
                  better ways to working with films and have them shine in
                  Kannada film Industry.Our soul aim is to promote Karnataka as
                  an exciting and dynamic filming destination to the
                  international filmmakers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Section */}
          <div className="relative">
            {/* Large "02" Background Number */}
            <div className="absolute -top-12 -right-8 text-[200px] font-bold text-white/5 leading-none pointer-events-none">
              02
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl  text-white mb-6">
                Our Story
              </h3>
              <div className="text-white/80 text-base leading-relaxed space-y-4">
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
                  footage in any format you request. We work with the best local
                  film crews to meet international industry standards.
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
                  solutions, casting and accommodation. You name it, if it is
                  related to filmed entertainment, we help you create your
                  masterpiece!
                </p>
                <p>
                  Not only do we help local and international film companies
                  create amazing material on film, we even produce some of our
                  own content. Yes! we plan to to grow and improve the film
                  industry in Karnataka. We pride ourselves on bringing new
                  professionals in to the industry and fostering young talent to
                  grow locally as well as internationally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Quote */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="text-6xl text-[#FEC447] font-serif mb-4">
                &quot;
              </div>
              <p className="text-white/90 text-lg md:text-xl italic leading-relaxed">
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
            <button className="mt-10 px-12 py-3 border-2 border-[#FEC447] text-[#FEC447] rounded-full hover:bg-[#FEC447] hover:text-black transition-all duration-300 font-medium">
              Courses
            </button>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/man.png"
                alt="Cinematographer"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
