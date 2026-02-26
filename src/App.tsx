import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Components
import Navigation from "./components/Navigation";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import SEO from "./components/SEO";
import ThreeBackground from "./components/ThreeBackground";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import OperatingPrinciples from "./sections/OperatingPrinciples";
import Projects from "./sections/Projects";
import LinkedInFeed from "./sections/LinkedInFeed";
import Metrics from "./sections/Metrics";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();

    // Smooth scrolling configuration
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);

    // Add loading animation for the main content
    const tl = gsap.timeline();
    tl.set("body", { visibility: "visible" }).from(".main-content", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }
  return (
    <div className="App">
      {" "}
      {/* SEO */}
      <SEO />
      {/* 3D Background */}
      <ThreeBackground />
      {/* Scroll Progress */}
      <ScrollProgress />
      {/* Navigation */}
      <Navigation />
      {/* Main Content */}{" "}
      <main className="main-content relative z-10">
        <Hero />
        <About />
        <OperatingPrinciples />
        <Projects />
        <LinkedInFeed />
        <Metrics />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      {/* Footer */}
      <footer className="relative z-10 bg-background border-t border-text-secondary/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="py-16 text-center">
            <p className="text-lg italic text-text-secondary mb-6">
              "Currently accepting problems that need 3 parts data, 2 parts empathy, and 1 part creative rebellion."
            </p>
            <div className="border-t border-text-secondary/20 pt-8">
              <p className="text-text-secondary mb-2">
                © 2026 Vaibhavi Satish. All rights reserved.
              </p>
              <p className="text-sm text-text-secondary/70">
                Built with React, Vite, Tailwind CSS, and GSAP
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
