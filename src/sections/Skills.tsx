import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";
import { skills } from "../data/resumeData";

const SkillCategory: React.FC<{ skill: (typeof skills)[0]; index: number }> = ({
  skill,
  index,
}) => {
  const cardRef = useScrollAnimation("skills", "fadeUp");

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="p-6 rounded-xl border border-accent-blue/30 bg-white/40 backdrop-blur-sm hover:border-accent-coral/50 hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl font-bold text-text-primary mb-4">
        {skill.category}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {skill.items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-accent-coral hover:bg-accent-blue/10 transition-all duration-300 text-center border border-accent-blue/20 hover:border-accent-coral/40"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const titleRef = useScrollAnimation("skills", "fadeUp");

  return (
    <section id="skills" className="py-20 sm:py-28 bg-white/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary"
          >
            Technical & Strategic Toolkit
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my expertise across product strategy, data analytics, AI/ML, and domain-specific knowledge.
          </p>
        </div>
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCategory key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
