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
import Projects from "./sections/Projects";
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
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      {/* Footer */}{" "}
      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
        <div className="container-custom">
          <div className="py-8 text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Vaibhavi Satish. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with React, Tailwind CSS, and GSAP
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
