import ThemeToggle from "../components/ThemeToggle";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

const Homepage = () => {
  return (
    <div>
      <ThemeToggle />

      <Background />

      <Navbar />
    </div>
  )
}

export default Homepage