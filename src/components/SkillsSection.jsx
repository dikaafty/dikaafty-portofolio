import { runObserver, cn } from "@/lib/utils";
import { useState, useEffect, useRef, createRef } from "react";

const skills = [
  // Frontend
  {name: "HTML", level: 85, category: "frontend"},
  {name: "CSS", level: 85, category: "frontend"},
  {name: "Tailwind CSS", level: 85, category: "frontend"},
  {name: "JavaScript", level: 80, category: "frontend"},
  {name: "TypeScript", level: 50, category: "frontend"},
  {name: "Webpack", level: 50, category: "frontend"},
  {name: "React", level: 80, category: "frontend"},

  // Tools
  {name: "Git", level: 80, category: "tools"},
  {name: "GitHub", level: 80, category: "tools"},
  {name: "Figma", level: 50, category: "tools"},
  {name: "VS Code", level: 90, category: "tools"},
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

  useEffect(() => {
    const cleanUp = runObserver(
      sectionTitleRef, dividerOneRef, dividerTwoRef, skillsRef, categoriesRef
    );
    return () => cleanUp();
  }, [filteredSkills]);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
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
                className="bg-card p-6 rounded-lg shadow-xs card-hover relative card-after hiddenSlideRightEl skill"
                data-animate="slideX"
                ref={skillsRef.current[key]}
              >
                <div className="text-left mb-4">
                  <h3 className="font-poppins font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out]" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                <div className="mt-1 text-right">
                  <span className="text-sm text-muted-foreground font-poppins font-semibold">
                    {skill.level + "%"}
                  </span>
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