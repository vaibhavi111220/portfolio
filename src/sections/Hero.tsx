import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate title
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      // Animate subtitle
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      // Animate CTA buttons
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);
  const handleDownloadResume = () => {
    // Download the actual resume file from the public assets folder
    const link = document.createElement("a");
    link.href = "/portfolio/assets/Resume 2025_Vaibhavi_Satish_.pdf";
    link.download = "Vaibhavi_Satish_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="container-custom text-center z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-text-primary opacity-0"
          >
            Vaibhavi Satish
          </h1>

          {/* Main Subtitle */}
          <p
            ref={subtitleRef}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent-coral mb-4 opacity-0"
          >
            I build AI products that make healthcare human.
          </p>

          {/* Role Description */}
          <p className="text-lg sm:text-xl text-text-secondary mb-8 opacity-0">
            Product Strategist · Data Analytics Leader · AI Innovator
          </p>

          {/* Metrics */}
          <div className="text-text-secondary text-sm sm:text-base mb-12 opacity-0">
            <p>
              <span className="font-semibold text-accent-coral">95%</span> data
              reliability · <span className="font-semibold text-accent-coral">40%</span> faster workflows ·{" "}
              <span className="font-semibold text-accent-coral">20%</span> readmission
              reduction
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-3 bg-accent-coral text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-coral/30 transform hover:scale-105 transition-all duration-300"
            >
              View Work
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 border-2 border-accent-coral text-accent-coral font-semibold rounded-lg hover:bg-accent-coral hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg hover:bg-accent-blue hover:text-text-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-text-secondary rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-sm text-text-secondary mt-2">Scroll Down</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent-coral/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-accent-blue/20 rounded-full animate-float animation-delay-200"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-accent-coral/20 rounded-full animate-float animation-delay-400"></div>
    </section>
  );
};

export default Hero;
