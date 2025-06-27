import ThemeToggle from "../components/ThemeToggle";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Homepage = () => {
  return (
    <div>
      <ThemeToggle />

      <Background />

      <Navbar />


      <main>
        <HeroSection />
      </main>
    </div>
  )
}

export default Homepage