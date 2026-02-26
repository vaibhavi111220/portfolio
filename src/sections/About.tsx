import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const About: React.FC = () => {
  const titleRef = useScrollAnimation("about", "fadeUp");
  const contentRef = useScrollAnimation("about", "fadeUp");
  const imageRef = useScrollAnimation("about", "fadeRight");

  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Left */}
          <div>
            <h2
              ref={titleRef as React.RefObject<HTMLHeadingElement>}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 text-text-primary"
            >
              About Me
            </h2>

            <div
              ref={contentRef as React.RefObject<HTMLDivElement>}
              className="space-y-6 text-text-secondary text-lg leading-relaxed"
            >
              <p>
                I solve one specific problem: Healthcare data is overwhelming. Patients can't understand it. Companies struggle to use it. I build products that fix that.
              </p>

              <p>
                My current focus is <span className="font-semibold text-text-primary">Arogya</span>, an AI-powered health companion that turns complex lab reports into clear, actionable insights. Before that, I led product strategy for a HIPAA-compliant platform that improved data reliability by <span className="font-semibold text-accent-coral">95%</span> and cut compliance errors by <span className="font-semibold text-accent-coral">30%</span>.
              </p>

              {/* How I work */}
              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-semibold text-text-primary">How I work:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent-coral font-bold shrink-0">•</span>
                    <div>
                      <span className="font-semibold text-text-primary">Resilience:</span> I've moved countries, adapted to new cultures, and built products across healthcare, aviation, and finance. I deliver in unfamiliar environments.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-coral font-bold shrink-0">•</span>
                    <div>
                      <span className="font-semibold text-text-primary">Collaboration:</span> I've never built anything alone—and I wouldn't want to. I partner with engineering, design, and stakeholders to find the best idea, not just mine.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-coral font-bold shrink-0">•</span>
                    <div>
                      <span className="font-semibold text-text-primary">Execution:</span> I get it done. On time. With quality. No excuses.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Outside work */}
              <div className="space-y-2 pt-2">
                <h3 className="text-xl font-semibold text-text-primary">Outside work:</h3>
                <p>
                  I trek (because the best views require effort), I paint (because details matter), and I play badminton (because I believe in winning—but never alone).
                </p>
              </div>

              {/* Call to action */}
              <p className="text-lg pt-6 border-t border-text-secondary/20">
                I'm looking for a team that's building something that matters. If that's you, <span className="font-semibold text-accent-coral">let's talk</span>.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="p-4 border border-accent-blue/30 rounded-lg">
                  <h3 className="text-3xl font-bold text-accent-coral">7+</h3>
                  <p className="text-text-secondary text-sm mt-2">Projects Completed</p>
                </div>
                <div className="p-4 border border-accent-blue/30 rounded-lg">
                  <h3 className="text-3xl font-bold text-accent-coral">3+</h3>
                  <p className="text-text-secondary text-sm mt-2">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right */}
          <div>
            <div
              ref={imageRef as React.RefObject<HTMLDivElement>}
              className="relative w-full max-w-md mx-auto"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative border-2 border-accent-blue/40 shadow-lg">
                <img
                  src="/portfolio/assets/profile_pic.jpg"
                  alt="Vaibhavi Satish"
                  className="w-full h-full object-cover"
                />
                {/* Soft glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-coral/10"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-accent-coral/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-accent-blue/30 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
