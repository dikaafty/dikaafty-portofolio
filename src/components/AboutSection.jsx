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
        <h2 className="section-title hiddenSlideUpEl" ref={sectionTitleRef} data-animate="slideY">
          About <span className="text-primary">Me</span>
          <div className="dividerOne" data-animate="fixDividerWidth" ref={dividerOneRef} />
          <div className="dividerTwo" data-animate="fixDividerWidth" ref={dividerTwoRef} />
        </h2>

        <div 
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20">
          <div
            className="bio-section hiddenSlideRightEl"
            data-animate="slideX"
            ref={bioSectionRef}
          > 
            I’m Agung Ardika Aftriyansyah, also known as Dika Afty — a passionate Front-End Developer focused on 
            building clean, responsive, and interactive web interfaces. I specialize in HTML, CSS, JavaScript, 
            and React, and I’m on a mission to become an elite developer with discipline, energy, and ambition in 
            every line of code.
          </div>

          <img
            src={photoProfile}
            alt="Photo Profile"
            className="photo-profile hiddenSlideLeftEl"
            data-animate="slideX"
            ref={photoProfileRef}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection;