import { useCallback } from "react";
import { gsap } from "gsap";

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 0.8, // Faster scroll
        scrollTo: {
          y: element.offsetTop - 80, // Account for fixed header
          autoKill: false,
        },
        ease: "power2.out", // Simpler easing
      });
    }
  }, []);

  return { scrollToSection };
};
