import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useAnimations";
import { projects, personalInfo } from "../data/resumeData";
import ProjectCarousel from "../components/ProjectCarousel";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const titleRef = useScrollAnimation("projects", "fadeUp");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary"
          >
            Featured Work
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            A selection of projects that showcase my expertise in product strategy, data analytics, and AI-driven solutions.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                filter === "all"
                  ? "bg-accent-coral text-white"
                  : "border border-accent-blue/30 text-text-secondary hover:text-accent-coral"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                filter === "featured"
                  ? "bg-accent-coral text-white"
                  : "border border-accent-blue/30 text-text-secondary hover:text-accent-coral"
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Projects Carousel */}
        <ProjectCarousel projects={filteredProjects} />

        {/* View More Button */}
        <div className="text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent-coral text-accent-coral font-semibold rounded-lg hover:bg-accent-coral hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span>View More on GitHub</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
