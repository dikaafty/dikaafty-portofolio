import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
];

const Navbar = () => {
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ isMenuOpen, setIsMenuOpen ] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 sm:py-5 bg-background/80 backdrop-blur-md shadow-xs" : "py-5 sm:py-6.5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          className="text-xl font-poppins font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Dika </span>{" "}
            Afty
          </span>
        </a>

        {/* Desktop Nav */}

        <div className="hidden md:flex space-x-8">
          {
            navItems.map((item, key) => (
              <a 
                key={key}
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary font-inter transition-colors duration-500",
                  "text-xs tracking-[1px] relative after:content-[''] after:w-0 after:h-0.5",
                  "hover:after:w-full after:transition-all after:duration-300 after:bg-primary after:absolute", 
                  "after:bottom-[-3px] after:left-1/2 after:transform after:-translate-1/2"
                )}
              >
                {item.name.toUpperCase()}
              </a>
            ))
          }
        </div>

        {/* Mobile Nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8">
            {
              navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "text-foreground/80 hover:text-primary font-inter transition-colors duration-300",
                    "text-xl tracking-[1px]"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name.toUpperCase()}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;