import { useEffect, useRef, createRef } from "react";
import { ExternalLinkIcon, Github, Sparkle, Flame } from "lucide-react";
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
  },
  {
    id: 4,
    title: "Blue Lock TicTacToe",
    description: "A stylish Blue Lock–themed Tic-Tac-Toe game built with HTML, CSS, and JavaScript. A simple and fun 2-player game inspired by the Blue Lock anime.",
    image: "/images/project-four.png",
    demoUrl: "https://dikaafty.github.io/blue-lock-tictactoe/",
    githubUrl: "https://github.com/dikaafty/blue-lock-tictactoe"
  },
  {
    id: 5,
    title: "JOBKER.",
    description: "A clean and simple job tracking application built for developers, freelancers, and job seekers who want clarity, structure, and focus during their job search.",
    image: "/images/project-five.png",
    demoUrl: "https://jobker.vercel.app/",
    githubUrl: "https://github.com/dikaafty/jobker"
  },
  {
    id: 6,
    title: "MOJITO",
    description: "MOJITO is a modern cocktail-themed landing page that captures the premium atmosphere of an upscale cocktail lounge through stunning animations and sleek design.",
    image: "/images/project-six.png",
    demoUrl: "https://mojito-tail.vercel.app/",
    githubUrl: "https://github.com/dikaafty/mojito"
  },
];

const ProjectsSection = () => {
  const sectionTitleRef = useRef(null);
  const sectionSubtitleRef = useRef(null);
  const dividerOneRef = useRef(null);
  const dividerTwoRef = useRef(null);
  const cosmicButtonRef = useRef(null);
  const projectsRef = useRef([]);

  projectsRef.current = projects.map((_, idx) => projectsRef.current[idx] ?? createRef());

  useEffect(() => {
    const cleanUp = runObserver(
      sectionTitleRef, sectionSubtitleRef, dividerOneRef, dividerTwoRef,
      projectsRef, cosmicButtonRef
    );

    return () => cleanUp();
  }, []);

  return (
    <section 
      id="projects"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 
          className="section-title hiddenSlideUpEl"
          data-animate="slideY"
          ref={sectionTitleRef}
        >
          My <span className="text-primary">Projects</span>

          <div 
            className="dividerOne" 
            data-animate="fixDividerWidth" 
            ref={dividerOneRef}
          />

          <div 
            className="dividerTwo" 
            data-animate="fixDividerWidth" 
            ref={dividerTwoRef}
          />
        </h2>

        <p 
          className="font-jost text-base md:text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto 
                     hiddenSlideUpEl"
          data-animate="slideY"
          ref={sectionSubtitleRef}
        >
          Here are some of my projects that I have worked on. Feel free to explore them!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            projects.map((project, idx) => (
              <div
                key={project.id}
                className="group project bg-card rounded-lg overflow-hidden p-6 hiddenSlideRightEl
                           border-1 border-[hsl(var(--foreground))] shadow-[5px_5px_0_2px_hsl(var(--foreground))]"
                data-animate="slideX"
                ref={projectsRef.current[idx]}
              >
                <div className="h-fit rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500
                               select-none group-hover:scale-110"
                  />
                </div>

                <div className="flex gap-3 items-center">
                  <h3 className="font-poppins text-xl text-left font-semibold mt-4 mb-1.5">
                    {project.title}
                  </h3>

                  {
                    project.id === projects.length && (
                      <div className="bg-primary px-3 py-0.5 mt-2 flex rounded-full justify-center items-center gap-1.5">
                        <p className="text-sm font-jost font-medium">
                          LATEST
                        </p>

                        <Sparkle size={14} />
                      </div>
                    )
                  }
                </div>

                <p className="font-jost text-muted-foreground text-base text-left mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-all duration-300"
                    >
                      <ExternalLinkIcon size={22} />
                    </a>

                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-all duration-300"
                    >
                      <Github size={22} />
                    </a>
                  </div>
                </div>

                <Sparkle className="absolute top-1 right-1" />
              </div>
            ))
          }
        </div>

        <div className="text-center mt-12">
          <CosmicButton 
            textContent="Check My Github" 
            href="https://github.com/dikaafty" 
            target="_blank" 
            dataAnimate="slideY"
            ref={cosmicButtonRef}
            hiddenAnimate={true}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;