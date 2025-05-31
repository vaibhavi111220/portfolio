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
      className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl font-bold text-white mb-4 gradient-text">
        {skill.category}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {skill.items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="bg-gray-800/50 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 text-center border border-gray-700/50 hover:border-primary/30"
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
    <section id="skills" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I work with a diverse set of technologies and tools to bring ideas
            to life. Here's an overview of my technical expertise across
            different domains.
          </p>
        </div>{" "}
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
