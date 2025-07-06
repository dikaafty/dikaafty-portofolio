import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [ isDarkMode, setIsDarkMode ] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if(storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if(isDarkMode) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }

  return (
    <button 
      onClick={toggleTheme} 
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {
        isDarkMode ? (
          <Sun />
        ) : (
          <Moon />
        )
      }
    </button>
  )
}

export default ThemeToggle;