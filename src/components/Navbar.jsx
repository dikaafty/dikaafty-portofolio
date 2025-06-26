import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
];

const Navbar = () => {
  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    }
  }, []);

  return (
    <nav>
      
    </nav>
  )
}

export default Navbar;