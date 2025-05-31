import React from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';
import { certifications } from '../data/resumeData';

const Certifications: React.FC = () => {
  const titleRef = useScrollAnimation('certifications', 'fadeUp');

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise in data analysis
            and business intelligence.
          </p>
        </div>

        {/* Certifications List */}
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group p-6 mb-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {cert.issuer} • <span className="text-primary">{cert.date}</span>
                  </p>
                </div>
                <div>
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-primary transition-all duration-300"
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
