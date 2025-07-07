import { useState, useEffect, useRef } from "react";
import { runObserver, cn, onSubmit } from "../lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const sectionTitleRef = useRef(null);
  const sectionSubtitleRef = useRef(null);
  const dividerOneRef = useRef(null);
  const dividerTwoRef = useRef(null);
  const contactInfoRef = useRef(null);
  const sendMessageRef = useRef(null);

  useEffect(() => {
    const cleanUp = runObserver(
      sectionTitleRef, sectionSubtitleRef, dividerOneRef, dividerTwoRef,
      contactInfoRef, sendMessageRef
    );
    return () => cleanUp();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          className="section-title hiddenSlideUpEl"
          data-animate="slideY"
          ref={sectionTitleRef}
        >
          Get In <span className="text-primary">Touch</span>

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
          Have a project in mind or want to collaborate? Feel free to reach out. 
          I'm always open to discussing new ideas, projects, or opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div 
            className="space-y-8 bg-foreground text-background rounded-lg border-1 border-[hsl(var(--card))] 
                       shadow-[5px_5px_0_2px_hsl(var(--card))] py-5 hiddenSlideRightEl"
            data-animate="slideX"
            ref={contactInfoRef}
          >
            <h3 className="text-lg xs:text-xl font-poppins font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center px-4 xs:px-10">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-background/10">
                  <Mail className="w-6 h-6" />
                </div>

                <div className="text-start">
                  <h4 className="text-sm font-poppins font-semibold">
                    Email
                  </h4>
                  <a 
                    href="mailto:dikaafty@gmail.com"
                    className="text-sm font-jost" 
                  >
                    dikaafty@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-background/10">
                  <Phone className="w-6 h-6" />
                </div>

                <div className="text-start">
                  <h4 className="text-sm font-poppins font-semibold">
                    Phone
                  </h4>
                  <a 
                    href="tel:+6285640570673"
                    className="text-sm font-jost" 
                  >
                    +6285640570673
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-background/10">
                  <MapPin className="w-6 h-6" />
                </div>

                <div className="text-start">
                  <h4 className="text-sm font-poppins font-semibold">
                    Location
                  </h4>
                  <a className="text-sm font-jost">
                    Sragen, Indonesia
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
           className="space-y-8 bg-card rounded-lg border-1 border-[hsl(var(--foreground))] 
                       shadow-[5px_5px_0_2px_hsl(var(--foreground))] py-5 hiddenSlideLeftEl"
            data-animate="slideX"
            ref={sendMessageRef}
          >
            <h3 className="text-xl xs:text-2xl font-poppins font-bold mb-6">
              Send a Message
            </h3>

            <form 
              onSubmit={(e) => {
                handleSubmit(e);
                onSubmit(e);
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4 px-8"
            >
              <input 
                type="text" 
                name="name" 
                id="name" 
                className={cn(
                  "text-xs font-jost px-2.5 py-3 outline-none rounded-lg transition-all duration-500", 
                  "shadow-[0_0_0_1px_hsl(var(--foreground))] focus:shadow-[0_0_0_1px_hsl(var(--primary))]",
                  "placeholder:text-foreground"
                )}
                placeholder="Your Name"
                required 
              />

              <input 
                type="email" 
                name="email" 
                id="email" 
                className={cn(
                  "text-xs font-jost px-2.5 py-3 outline-none rounded-lg transition-all duration-500",
                  "shadow-[0_0_0_1px_hsl(var(--foreground))] focus:shadow-[0_0_0_1px_hsl(var(--primary))]",
                  "placeholder:text-foreground"
                )}
                placeholder="Your Email"
                required
              />

              <textarea 
                name="message" 
                id="message" 
                className={cn(
                  "md:col-span-2 text-xs font-jost outline-none rounded-lg transition-all duration-500",
                  "pt-3 px-2.5 pb-12.5 shadow-[0_0_0_1px_hsl(var(--foreground))] resize-none",
                  "focus:shadow-[0_0_0_1px_hsl(var(--primary))] placeholder:text-foreground"
                )}
                placeholder="Your Message"
                required
              />

              <button 
                disabled={isSubmitting}
                className="md:col-span-2 bg-primary text-card py-3 text-[10px] font-inter font-medium tracking-[2px] 
                           rounded-lg cursor-pointer transition-all duration-500 hover:bg-card hover:text-foreground
                           hover:shadow-[0_0_0_1px_hsl(var(--primary))]"
              >
                {
                  isSubmitting ? "SENDING..." : "SEND MESSAGE"
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;