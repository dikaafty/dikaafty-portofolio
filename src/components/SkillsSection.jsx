import { runObserver, cn } from "@/lib/utils";
import { useState, useEffect, useRef, createRef } from "react";

const skills = [
  // Frontend
  {name: "HTML", category: "frontend", image: "/images/html-icon.svg"},
  {name: "CSS", category: "frontend", image: "/images/css-icon.svg"},
  {name: "Tailwind CSS", category: "frontend", image: "/images/tailwind-icon.svg"},
  {name: "JavaScript", category: "frontend", image: "/images/javascript-icon.svg"},
  {name: "TypeScript", category: "frontend", image: "/images/typescript-icon.svg"},
  {name: "Webpack", category: "frontend", image: "/images/webpack-icon.svg"},
  {name: "React", category: "frontend", image: "/images/reactjs-icon.svg"},
  {name: "Next.js", category: "frontend", image: "/images/nextjs-icon.svg"},
  {name: "Redux", category: "frontend", image: "/images/redux-icon.svg"},
  {name: "Axios", category: "frontend", image: "/images/axios-icon.svg"},
  {name: "React Testing Library", category: "frontend", image: "/images/rtl-icon.svg"},
  {name: "Cypress", category: "frontend", image: "/images/cypress-icon.svg"},
  {name: "GSAP", category: "frontend", image: "/images/gsap-icon.svg"},

  // Tools
  {name: "Jest", category: "tools", image: "/images/jest-icon.svg"},
  {name: "Git", category: "tools", image: "/images/git-icon.svg"},
  {name: "GitHub", category: "tools", image: "/images/github-icon.svg"},
  {name: "Figma", category: "tools", image: "/images/figma-icon.svg"},
  {name: "VS Code", category: "tools", image: "/images/vs-code-icon.svg"},
];

const categories = ["all", "frontend", "tools"];

const SkillsSection = () => {
  const [ activeCategory, setActiveCategory ] = useState("all");
  const sectionTitleRef = useRef(null);
  const dividerOneRef = useRef(null);
  const dividerTwoRef = useRef(null);
  const skillsRef = useRef([]);
  const categoriesRef = useRef([]);

  skillsRef.current = skills.map((_, idx) => skillsRef.current[idx] ?? createRef());
  categoriesRef.current = categories.map((_, idx) => categoriesRef.current[idx] ?? createRef());

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    const cleanUp = runObserver(
      sectionTitleRef, dividerOneRef, dividerTwoRef, skillsRef, categoriesRef
    );
    return () => cleanUp();
  }, [filteredSkills]);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 
          className="section-title hiddenSlideUpEl"
          data-animate="slideY"
          ref={sectionTitleRef}
        >
          My <span className="text-primary">Skills</span>

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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {
            categories.map((category, key) => (
              <button 
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full duration-1000 capitalize cursor-pointer",
                  "font-poppins font-semibold hiddenSlideUpEl",
                  activeCategory === category 
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
                )}
                data-animate="slideY"
                ref={categoriesRef.current[key]}
              >
                {category}
              </button>
            ))
          }
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            filteredSkills.map((skill, key) => (
              <div
                key={key}
                className={
                  cn("bg-card p-6 rounded-lg shadow-xs relative hiddenSlideRightEl",
                  key % 3 === 1 ? "delay-200" : key % 3 === 2 ? "delay-400" : "delay-0")
                }
                data-animate="slideX"
                ref={skillsRef.current[key]}
              >
                <div className="flex justify-center items-center mb-4">
                  <img 
                    src={skill.image} 
                    alt={`${skill.name} Icon`} 
                    className="size-20 object-contain"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-jost font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;