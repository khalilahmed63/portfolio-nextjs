/* eslint-disable react/no-unescaped-entities */
import ExperienceEducation from "../components/ExperienceEducation";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import ContactMe from "../components/ContactMe";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#272829]">
      <Hero />
      <About />
      <Skills />
      <ExperienceEducation />
      <Portfolio />
      <ContactMe />
    </main>
  );
}
