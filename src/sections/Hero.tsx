import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { personalInfo } from '../data/resumeData';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate title
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    // Animate subtitle
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    // Animate CTA buttons
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    );

    return () => {
      tl.kill();
    };
  }, []);
  const handleDownloadResume = () => {
    // Download the actual resume file from the public assets folder
    const link = document.createElement('a');
    link.href = '/assets/Resume 2025_Vaibhavi_Satish_.pdf';
    link.download = 'Vaibhavi_Satish_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 opacity-0"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              {personalInfo.name.split(' ')[0]}
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 opacity-0"
          >
            {personalInfo.title}
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>

          {/* CTA Buttons */}
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">Scroll Down</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-secondary/30 rounded-full animate-float animation-delay-200"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-accent/30 rounded-full animate-float animation-delay-400"></div>
    </section>
  );
};

export default Hero;
