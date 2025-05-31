import React from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';
import { experiences } from '../data/resumeData';

const ExperienceCard: React.FC<{ experience: typeof experiences[0]; index: number }> = ({ 
  experience, 
  index 
}) => {
  const cardRef = useScrollAnimation('experience', 'fadeUp');

  return (
    <div 
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="relative pl-8 pb-12 last:pb-0"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-dark"></div>
      
      {/* Timeline line */}
      <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>

      {/* Content */}
      <div className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {experience.title}
            </h3>
            <p className="text-primary font-semibold">
              {experience.company}
            </p>
            <p className="text-gray-400 text-sm">
              {experience.location}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-sm rounded-full border border-primary/30">
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 mb-4">
          {experience.description.map((desc, descIndex) => (
            <p key={descIndex} className="text-gray-300 leading-relaxed flex items-start">
              <span className="text-primary mr-2 mt-1 text-sm">▸</span>
              {desc}
            </p>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const titleRef = useScrollAnimation('experience', 'fadeUp');

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development, showcasing the roles and 
            responsibilities that have shaped my expertise and technical skills.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.length > 0 ? (
            experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index} 
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="glass-effect p-8 rounded-xl max-w-md mx-auto">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready for New Opportunities
                </h3>
                <p className="text-gray-400">
                  I'm actively seeking new challenges and opportunities to grow my career 
                  in software development. Let's connect and discuss how I can contribute 
                  to your team.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Interested in working together?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
          >
            <span>Get In Touch</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
