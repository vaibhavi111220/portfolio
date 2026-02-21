import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const About: React.FC = () => {
  const titleRef = useScrollAnimation("about", "fadeUp");
  const contentRef = useScrollAnimation("about", "fadeUp");
  const imageRef = useScrollAnimation("about", "fadeRight");

  return (
    <section id="about" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2
              ref={titleRef as React.RefObject<HTMLHeadingElement>}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              About <span className="gradient-text">Me</span>
            </h2>

            <div
              ref={contentRef as React.RefObject<HTMLDivElement>}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I solve one specific problem: Healthcare data is overwhelming. Patients can't understand it. Companies struggle to use it. I build products that fix that.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My current focus is Arogya, an AI-powered health companion that turns complex lab reports into clear, actionable insights. 
                Before that, I led product strategy for a HIPAA-compliant platform that improved data reliability by 95% and cut compliance errors by 30%.

              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                How I work:
                Resilience: I've moved countries, adapted to new cultures, and built products across healthcare, aviation, and finance. I deliver in unfamiliar environments.
                Collaboration: I've never built anything alone—and I wouldn't want to. I partner with engineering, design, and stakeholders to find the best idea, not just mine.
                Execution: I get it done. On time. With quality. No excuses.
                Outside work: I trek (because the best views require effort), I paint (because details matter), and I play badminton (because I believe in winning—but never alone).
                I'm looking for a team that's building something that matters. If that's you, let's talk.
              </p>
              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="glass-effect p-4 text-center">
                  <h3 className="text-2xl font-bold gradient-text">7+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="glass-effect p-4 text-center">
                  <h3 className="text-2xl font-bold gradient-text">3+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>{" "}
              {/* Contact Info */}
              {/* <div className="space-y-3 pt-6">
                <div className="flex items-center space-x-3">
                  <span className="text-primary">🔗</span>
                  <span className="text-gray-300">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="order-1 lg:order-2">
            <div
              ref={imageRef as React.RefObject<HTMLDivElement>}
              className="relative"
            >
              {" "}
              {/* Profile image */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl glass-effect overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"></div>{" "}
                  <img
                    src="/portfolio/assets/profile_pic.jpg"
                    alt="Vaibhavi Satish - Business & Data Analyst | Product Management"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* Overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-full animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-secondary/30 rounded-full animate-float animation-delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

