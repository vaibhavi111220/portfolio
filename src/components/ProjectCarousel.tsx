import React, { useRef, useState } from 'react';
import { Project } from '../data/resumeData';

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePos({ x, y });
    setHoveredIndex(index);
  };

  React.useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <div className="w-full">
      {/* Scroll Controls */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Scroll to explore →</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="p-2 rounded-lg border border-accent-blue/30 text-accent-blue hover:border-accent-coral/50 hover:text-accent-coral disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            ← Prev
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="p-2 rounded-lg border border-accent-blue/30 text-accent-blue hover:border-accent-coral/50 hover:text-accent-coral disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex-shrink-0 w-96 snap-start"
            style={{
              perspective: '1200px',
              transform:
                hoveredIndex === index
                  ? `rotateX(${(mousePos.y - 0.5) * 10}deg) rotateY(${(mousePos.x - 0.5) * -10}deg) scale(1.02)`
                  : 'none',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <div className="p-6 rounded-xl border border-accent-blue/30 bg-white/40 backdrop-blur-sm hover:border-accent-coral/50 hover:shadow-2xl transition-all duration-300 h-full">
              {/* Project Image */}
              <div className="w-full h-48 bg-gradient-coral-cream rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/10 via-accent-blue/10 to-transparent"></div>
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-40">
                    🚀
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-accent-coral text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-coral transition-colors">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-accent-blue/20 text-text-primary text-xs rounded-full border border-accent-blue/40"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 bg-accent-blue/20 text-text-primary text-xs rounded-full border border-accent-blue/40">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-coral transition-colors text-sm font-medium"
                  >
                    GitHub →
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-coral transition-colors text-sm font-medium"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
