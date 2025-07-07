import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-8 flex flex-col md:flex-row justify-between items-center max-md:gap-3">
      <div className="flex gap-4">
        <a 
          href="https://github.com/dikaafty"
          target="_blank"
          className="cursor-pointer transition-colors duration-500 hover:text-primary"
        >
          <Github size={21} />
        </a>

        <a 
          href="https://www.linkedin.com/in/agung-ardika-afty/"
          target="_blank"
          className="cursor-pointer transition-colors duration-500 hover:text-primary"
        >
          <Linkedin size={21} />
        </a>

        <a 
          href="https://www.instagram.com/dikaafty_/"
          target="_blank"
          className="cursor-pointer transition-colors duration-500 hover:text-primary"
        >
          <Instagram size={21} />
        </a>
      </div>

      <p className="font-jost font-bold text-xs md:text-sm max-md:mt-1">
        © 2025 <span className="text-primary">AGUNG ARDIKA A</span>. ALL RIGHTS RESERVED
      </p>

      <p className="font-jost font-bold text-xs md:text-sm">
        DEVELOPED BY <span className="text-primary text-glow">DIKA AFTY</span>
      </p>
    </footer>
  )
}

export default Footer;