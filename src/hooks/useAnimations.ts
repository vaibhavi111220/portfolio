import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (
  trigger: string,
  animation: string = "fadeUp"
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Set initial state with less dramatic effects
    gsap.set(element, {
      opacity: 0,
      y: animation === "fadeUp" ? 20 : 0, // Reduced movement
      x: animation === "fadeLeft" ? -20 : animation === "fadeRight" ? 20 : 0, // Reduced movement
      scale: animation === "scale" ? 0.95 : 1, // Less scaling
    });

    // Simpler animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none", // Simplified
      },
    });

    tl.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: 0.5, // Faster animation
      ease: "power2.out", // Simpler easing
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animation]);

  return ref;
};

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return ref;
};

export const useTypewriter = (text: string, speed: number = 50) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    element.textContent = "";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    text.split("").forEach((char, index) => {
      tl.to(
        element,
        {
          duration: speed / 1000,
          onComplete: () => {
            element.textContent += char;
          },
        },
        index * (speed / 1000)
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text, speed]);

  return ref;
};
