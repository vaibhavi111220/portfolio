import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useAnimations";
import { projects, Project, personalInfo } from "../data/resumeData";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const cardRef = useScrollAnimation("projects", "fadeUp");
  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="p-6 rounded-xl border border-accent-blue/30 bg-white/40 backdrop-blur-sm hover:border-accent-coral/50 hover:shadow-lg transition-all duration-300 group"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Project Image */}
      <div className="w-full h-48 bg-gradient-coral-cream rounded-lg mb-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/10 via-accent-blue/10 to-transparent"></div>
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "";
              target.classList.add("flex", "items-center", "justify-center");
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl opacity-40">🚀</div>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-accent-coral text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-coral transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-accent-blue/20 text-text-primary text-xs rounded-full border border-accent-blue/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-coral transition-colors duration-300 text-sm font-medium"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-coral transition-colors duration-300 text-sm font-medium"
            >
              Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

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
