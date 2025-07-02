import ThemeToggle from "../components/ThemeToggle";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";

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
      </main>
    </div>
  )
}

export default Homepage