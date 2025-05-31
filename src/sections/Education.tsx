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
      className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
          <p className="text-secondary font-semibold mb-1">{edu.institution}</p>
          <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
          {edu.gpa && <p className="text-accent font-medium">GPA: {edu.gpa}</p>}
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-4">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary text-sm rounded-full border border-secondary/30">
            {edu.startDate} - {edu.endDate}
          </span>
        </div>
      </div>

      {/* Achievements */}
      {edu.achievements && edu.achievements.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">
            Achievements:
          </h4>
          <div className="space-y-1">
            {edu.achievements.map((achievement, achievementIndex) => (
              <p
                key={achievementIndex}
                className="text-gray-400 text-sm flex items-start"
              >
                <span className="text-secondary mr-2 mt-0.5 text-xs">★</span>
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
    <section id="education" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic background and the foundation that has shaped my
            technical expertise and problem-solving abilities in software
            development.
          </p>
        </div>
        {/* Education Grid */}
        <div className="max-w-4xl mx-auto">
          {" "}
          {education.length > 0 ? (
            <div className="grid gap-8">
              {education.map((edu, index) => (
                <EducationCard key={edu.id} edu={edu} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="glass-effect p-8 rounded-xl max-w-md mx-auto">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <p className="text-gray-400">
                  Education details will be displayed here.
                </p>
              </div>
            </div>
          )}
        </div>{" "}
        {/* Certifications are moved to their own section */}
      </div>
    </section>
  );
};

export default Education;
