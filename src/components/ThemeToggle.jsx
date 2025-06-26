import { useState, useEffect } from "react";
import { Sun } from "lucide-react";

const ThemeToggle = () => {
  const [ isDarkMode, setIsDarkMode ] = useState(false);

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
    
  )
}

export default ThemeToggle;