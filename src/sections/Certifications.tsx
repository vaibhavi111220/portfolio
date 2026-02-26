import React from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';
import { certifications } from '../data/resumeData';

const Certifications: React.FC = () => {
  const titleRef = useScrollAnimation('certifications', 'fadeUp');

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary"
          >
            Certifications
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise in product management,
            data analytics, and strategic leadership.
          </p>
        </div>

        {/* Certifications List */}
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group p-6 mb-6 border border-accent-blue/30 bg-white/40 backdrop-blur-sm rounded-xl hover:border-accent-coral/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-coral transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-text-secondary mt-2">
                    {cert.issuer} • <span className="text-accent-coral">{cert.date}</span>
                  </p>
                </div>
                <div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-accent-coral text-accent-coral rounded-lg hover:bg-accent-coral hover:text-white transition-all duration-300 font-medium text-sm"
                  >
                    <span>Verify</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
