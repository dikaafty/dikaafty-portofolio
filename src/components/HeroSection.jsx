import CosmicButton from "./CosmicButton";

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4"
    >
      <div 
        className="container flex flex-col justify-center items-center max-w-4xl mx-auto text-center z-10"
      >
        <h1
          className="font-poppins text-3xl md:text-5xl font-bold leading-[1.1]"
        >
          <span className="opacity-0 animate-fade-in">Hi, I'm </span>
          <span className="text-glow"> 
            <span className="opacity-0 animate-fade-in-delay-1"> Dika </span> 
            <span className="opacity-0 animate-fade-in-delay-2"> Afty</span>
          </span>
        </h1>

        <div className="w-fit relative">
          <h3 className="profession-text">Frontend Developer</h3>
        </div>

        <p 
          className="font-poppins text-xs lg:text-base my-1.5 md:my-3 lg:my-4 opacity-0 animate-fade-in-delay-3"
        >I build responsive and interactive web interfaces using modern technologies like React and 
        JavaScript. Passionate about turning ideas into elegant digital experiences. 
        Let's build something impactful together.
        </p>

        <CosmicButton />
      </div>

      <a href="#about" className="scroll-down-button">
        <span className="scroll-down-button-span"></span>
      </a>
    </section>
  )
}

export default HeroSection;