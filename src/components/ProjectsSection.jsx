import { useRef, createRef } from "react";
import { ExternalLinkIcon, Github } from "lucide-react";
import { runObserver } from "@/lib/utils";
import CosmicButton from "./CosmicButton";

const projects = [
  {
    id: 1,
    title: "EAT.",
    description: "A simple, clean, and minimalistic restaurant website built using HTML, CSS, JavaScript and Webpack. This project is part of The Odin Project.",
    image: "/images/project-one.png",
    demoUrl: "https://dikaafty.github.io/odin-restaurant-page/",
    githubUrl: "https://github.com/dikaafty/odin-restaurant-page"
  },
  {
    id: 2,
    title: "VideoBelajar",
    description: "A simple and responsive web-based video learning platform designed to help users access educational content anytime, anywhere.",
    image: "/images/project-two.png",
    demoUrl: "https://videobelajar-api-redux.netlify.app/",
    githubUrl: "https://github.com/dikaafty/videobelajar-api-redux"
  },
  {
    id: 3,
    title: "Uno.do",
    description: "A clean and interactive Todo List application to manage your daily tasks efficiently. Designed with simplicity and productivity in mind.",
    image: "/images/project-three.png",
    demoUrl: "https://dikaafty.github.io/todo-list/",
    githubUrl: "https://github.com/dikaafty/todo-list"
  }
];

const ProjectsSection = () => {
  const sectionTitleRef = useRef(null);
  const sectionSubtitleRef = useRef(null);
  const dividerOneRef = useRef(null);
  const dividerTwoRef = useRef(null);
  const cosmicButtonRef = useRef(null);
  const projectsRef = useRef([]);

  projectsRef.current = projects.map((_, idx) => projectsRef.current[idx] ?? createRef());

  return (
    <section 
      id="projects"
      className="py-24 px-4 relative"
    >
      
    </section>
  )
}

export default ProjectsSection;