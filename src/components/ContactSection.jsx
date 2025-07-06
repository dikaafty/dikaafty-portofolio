import { useState, useEffect, useRef, createRef } from "react";
import { runObserver, cn } from "../lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";
import CosmicButton from "./CosmicButton";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  return (
    <section
      id="contact"
      className="py-24 px-4 relative"
    >
      
    </section>
  )
}

export default ContactSection;