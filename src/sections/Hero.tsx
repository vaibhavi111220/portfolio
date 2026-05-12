import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useTypewriter } from "../hooks/useTypewriter";
import ParticleField from "../components/ParticleField";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollToSection } = useSmoothScroll();

  const typewriterTexts = [
    "Data & AI Analytics Professional",
    "Product Thinker. Roadmap Builder.",
    "From Bangalore to Dallas, Carolina — and back.",
  ];

  const displayedText = useTypewriter(typewriterTexts, 50, 30, 2000);

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
    link.href = "/portfolio/assets/Vaibhavi_Satish_Resume.pdf";
    link.download = "Vaibhavi_Satish_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Bangalore Sketch Background - Enhanced Visibility */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F6a70318aa84d479f92752cf1ddfd6ba1%2Fad6f662f253f4a3fb01202df948facad?format=webp&width=1200')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.25,
          filter: 'hue-rotate(180deg) brightness(0.7) contrast(1.1)',
        }}
      />
      {/* Radial Gradient - Cinematic Lighting */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 212, 200, 0.1) 0%, rgba(8, 14, 26, 0.7) 100%)',
        }}
      />
      {/* Soft Cyan Glow from Top */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-full h-1/2"
        style={{
          background: 'radial-gradient(ellipse 800px 600px at center top, rgba(0, 212, 200, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Particle Field */}
      <ParticleField count={60} opacity={0.12} />

      {/* Soft Cyan Glow Accent Container */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{
          background: 'radial-gradient(circle 600px at center, rgba(0, 212, 200, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom text-center z-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-text-primary opacity-0"
          >
            Vaibhavi Satish
          </h1>

          {/* Main Subtitle - Typewriter Effect */}
          <p
            ref={subtitleRef}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent-turquoise mb-4 opacity-0 h-16 flex items-center justify-center"
          >
            <span className="inline-block">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </p>

          {/* Role Description */}
          <p className="text-lg sm:text-xl text-text-body mb-8 opacity-0">
            I build AI products that make healthcare human.
          </p>

          {/* Metrics */}
          <div className="text-text-body text-sm sm:text-base mb-12 opacity-0">
            <p>
              <span className="font-semibold text-accent-gold">95%</span> Data
              Reliability · <span className="font-semibold text-accent-gold">40%</span> Faster Workflows ·{" "}
              <span className="font-semibold text-accent-gold">20%</span> Readmission
              Reduction
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-3 bg-gradient-cta text-bg-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-gold/30 transform hover:scale-105 transition-all duration-300"
            >
              View Work →
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 border-2 border-accent-turquoise text-accent-turquoise font-semibold rounded-lg hover:bg-accent-turquoise hover:text-bg-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 text-text-muted font-semibold rounded-lg hover:text-accent-turquoise hover:underline transform hover:scale-105 transition-all duration-300"
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
