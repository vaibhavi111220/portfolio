import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

interface Metric {
  id: number;
  icon: string;
  number: string;
  description: string;
}

const Metrics: React.FC = () => {
  const titleRef = useScrollAnimation("metrics", "fadeUp");

  const metrics: Metric[] = [
    {
      id: 1,
      icon: "📊",
      number: "95%",
      description: "Data reliability increase",
    },
    {
      id: 2,
      icon: "⚡",
      number: "40%",
      description: "Faster workflows (LLM automation)",
    },
    {
      id: 3,
      icon: "❤️",
      number: "20%",
      description: "Readmission reduction",
    },
    {
      id: 4,
      icon: "📅",
      number: "3+",
      description: "Years of impact",
    },
  ];

  return (
    <section id="metrics" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-text-primary"
        >
          By the Numbers
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="p-6 rounded-xl border border-accent-blue/30 bg-white/40 backdrop-blur-sm hover:border-accent-coral/50 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{metric.icon}</div>
              <h3 className="text-4xl sm:text-5xl font-bold text-accent-coral mb-2">
                {metric.number}
              </h3>
              <p className="text-text-secondary text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
