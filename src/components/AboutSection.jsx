import photoProfile from "@/assets/images/photo-profile.png";
import { runObserver } from "@/lib/utils";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionTitleRef = useRef(null);
  const bioSectionRef = useRef(null);
  const photoProfileRef = useRef(null);
  const dividerOneRef = useRef(null);
  const dividerTwoRef = useRef(null);

  useEffect(() => {
    const cleanUp = runObserver(sectionTitleRef, bioSectionRef, photoProfileRef, dividerOneRef, dividerTwoRef);
    return () => cleanUp();
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        
      </div>
    </section>
  )
}

export default AboutSection;