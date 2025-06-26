import { useState } from "react";

const ThemeToggle = () => {
  const [ isDarkMode, setIsDarkMode ] = useState(false);

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