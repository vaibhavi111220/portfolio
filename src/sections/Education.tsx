import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";
import { education } from "../data/resumeData";

const EducationCard: React.FC<{
  edu: (typeof education)[0];
  index: number;
}> = ({ edu, index }) => {
  const cardRef = useScrollAnimation("education", "fadeUp");

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="p-6 rounded-xl border border-accent-blue/30 bg-white/40 backdrop-blur-sm hover:border-accent-coral/50 hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-text-primary mb-2">{edu.degree}</h3>
          <p className="text-accent-coral font-semibold mb-1">{edu.institution}</p>
          <p className="text-text-secondary text-sm mb-2">{edu.location}</p>
          {edu.gpa && <p className="text-accent-coral font-medium">GPA: {edu.gpa}</p>}
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-4">
          <span className="inline-block px-3 py-1 bg-accent-blue/20 text-accent-coral text-sm rounded-full border border-accent-blue/40">
            {edu.startDate} - {edu.endDate}
          </span>
        </div>
      </div>

      {/* Achievements */}
      {edu.achievements && edu.achievements.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            Achievements:
          </h4>
          <div className="space-y-1">
            {edu.achievements.map((achievement, achievementIndex) => (
              <p
                key={achievementIndex}
                className="text-text-secondary text-sm flex items-start"
              >
                <span className="text-accent-coral mr-2 mt-0.5 text-xs">★</span>
                {achievement}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Education: React.FC = () => {
  const titleRef = useScrollAnimation("education", "fadeUp");

  return (
    <section id="education" className="py-20 sm:py-28 bg-white/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary"
          >
            Education
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My academic background across business analytics and computer science,
            providing the foundation for my technical expertise and strategic thinking.
          </p>
        </div>
        {/* Education Grid */}
        <div className="max-w-4xl mx-auto">
          {education.length > 0 ? (
            <div className="grid gap-8">
              {education.map((edu, index) => (
                <EducationCard key={edu.id} edu={edu} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="p-8 rounded-xl max-w-md mx-auto border border-accent-blue/30">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Education</h3>
                <p className="text-text-secondary">
                  Education details will be displayed here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
