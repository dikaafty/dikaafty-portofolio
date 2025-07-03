import { runObserver } from "@/lib/utils";
import { useEffect, useRef, createRef } from "react";

const skills = [
  // Frontend
  {name: "HTML", level: 85, category: "Frontend"},
  {name: "CSS", level: 85, category: "Frontend"},
  {name: "Tailwind CSS", level: 85, category: "Frontend"},
  {name: "JavaScript", level: 80, category: "Frontend"},
  {name: "TypeScript", level: 50, category: "Frontend"},
  {name: "Webpack", level: 50, category: "Frontend"},
  {name: "React", level: 80, category: "Frontend"},

  // Tools
  {name: "Git", level: 80, category: "Frontend"},
  {name: "GitHub", level: 80, category: "Frontend"},
  {name: "Figma", level: 50, category: "Frontend"},
  {name: "VS Code", level: 90, category: "Frontend"},
];

const SkillsSection = () => {
  const sectionTitleRef = useRef(null);
  const dividerOneRef = useRef(null);
  const dividerTwoRef = useRef(null);
  const skillsRef = useRef([]);

  skillsRef.current = skills.map((_, idx) => skillsRef.current[idx] ?? createRef());

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      
    </section>
  )
}

export default SkillsSection;