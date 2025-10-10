import ContactForm from "@/components/ContactForm";
import About from "@/components/HeroSection/About";
import BehindTheScenes from "@/components/HeroSection/BehindTheScenes";
import Courses from "@/components/HeroSection/Courses";
import Hero from "@/components/HeroSection/Hero";
import ImageCarousel from "@/components/HeroSection/ImageCarousel";
import InstructorCards from "@/components/HeroSection/InstructorCards";
import LetsTalk from "@/components/HeroSection/LetsTalk";
import OurFilms from "@/components/HeroSection/OurFIlms";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImageCarousel />
      <About />
      <OurFilms />
      <Courses />
      <InstructorCards />
      <BehindTheScenes />
      <LetsTalk />
      <ContactForm />
    </div>
  );
}
