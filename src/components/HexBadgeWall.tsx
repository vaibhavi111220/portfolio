import React, { useEffect, useRef, useState } from 'react';

interface BadgeData {
  name: string;
  issuer: string;
  date: string;
  url: string;
  index: number;
}

interface HexBadgeWallProps {
  badges: BadgeData[];
}

const HexBadgeWall: React.FC<HexBadgeWallProps> = ({ badges }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full py-12"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '24px',
        maxWidth: '100%',
      }}
    >
      {badges.map((badge, index) => (
        <a
          key={index}
          href={badge.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative h-48 flex items-center justify-center"
          style={{
            animation: isVisible
              ? `popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 50}ms both`
              : 'none',
          }}
        >
          {/* Hexagon container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 230"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Hexagon background */}
              <polygon
                points="100,20 170,60 170,140 100,180 30,140 30,60"
                fill="url(#hexGradient)"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent-blue/50 transition-all group-hover:text-accent-coral/80 group-hover:drop-shadow-lg"
              />

              {/* Shimmer effect on hover */}
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(168, 213, 229, 0.2)" />
                  <stop offset="100%" stopColor="rgba(255, 138, 122, 0.1)" />
                </linearGradient>
              </defs>

              {/* Text background for readability */}
              <polygon
                points="100,20 170,60 170,140 100,180 30,140 30,60"
                fill="rgba(255, 255, 255, 0.02)"
                className="group-hover:fill-accent-coral/5 transition-all"
              />
            </svg>

            {/* Badge content - centered inside hex */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8 group-hover:scale-110 transition-transform duration-300">
              <p className="text-xs font-semibold text-text-primary mb-2 leading-tight">
                {badge.name}
              </p>
              <p className="text-xs text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-6">
                {badge.issuer}
              </p>
              <p className="text-xs text-accent-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-3">
                Verify ↗
              </p>
            </div>
          </div>
        </a>
      ))}

      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotateZ(-15deg);
          }
          50% {
            transform: rotateZ(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateZ(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HexBadgeWall;
