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
      sectionTitleRef, dividerOneRef, dividerTwoRef, skillsRef
    );
    return () => cleanUp();
  }, [filteredSkills]);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      
    </section>
  )
}

export default SkillsSection;