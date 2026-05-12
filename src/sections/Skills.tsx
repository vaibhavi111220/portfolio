import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";
import { skills } from "../data/resumeData";
import FlipCard from "../components/FlipCard";

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
        {/* Skills Grid - Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <FlipCard
              key={skill.category}
              category={skill.category}
              skills={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
