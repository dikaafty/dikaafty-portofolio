import ThemeToggle from "../components/ThemeToggle";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const Homepage = () => {
  return (
    <div>
      <ThemeToggle />

      <Background />

      <Navbar />


      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </div>
  )
}

export default Homepage