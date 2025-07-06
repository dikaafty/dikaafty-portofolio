import { useState, useEffect, useRef, createRef } from "react";
import { runObserver, cn } from "../lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";
import CosmicButton from "./CosmicButton";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const sectionTitleRef = useRef(null);
  const sectionSubtitleRef = useRef(null);
  const dividerOneRef = useRef(null);
  const dividerTwoRef = useRef(null);
  const contactInfoRef = useRef(null);

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
      
    </section>
  )
}

export default ContactSection;