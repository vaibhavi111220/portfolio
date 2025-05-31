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
      className="glass-effect p-6 rounded-xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 group"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Project Image */}
      <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"></div>
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "";
              target.classList.add("flex", "items-center", "justify-center");
              target.parentElement?.classList.add(
                "flex",
                "items-center",
                "justify-center"
              );
              const emoji = document.createTextNode("🚀");
              target.parentElement?.appendChild(emoji);
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl opacity-60">🚀</div>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-secondary text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-800/50 text-primary text-sm rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span>🔗</span>
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <span>🌐</span>
              <span>Live Demo</span>
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
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and showcases different aspects of my development
            skills.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === "all"
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === "featured"
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${personalInfo.github.split("/").pop()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
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
