import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const OperatingPrinciples: React.FC = () => {
  const titleRef = useScrollAnimation("principles", "fadeUp");

  const principles = [
    {
      id: 1,
      icon: "⛰️",
      title: "I climb toward the problem.",
      description:
        "Like trekking, the hardest conversations are the most rewarding. I don't avoid difficult stakeholders or messy data—I go toward them.",
    },
    {
      id: 2,
      icon: "🎨",
      title: "I paint the whole picture.",
      description:
        "I care about the API integration and the user's emotional response. The best products get both right.",
    },
    {
      id: 3,
      icon: "🏸",
      title: "I play to win—as a team.",
      description:
        "Individual brilliance doesn't win matches. Trust does. I bring that same belief to every product team I join.",
    },
  ];

  return (
    <section id="principles" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-text-primary"
        >
          My Operating Principles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="p-8 rounded-xl border border-accent-blue/30 bg-white/50 backdrop-blur-sm hover:border-accent-coral/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {principle.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
