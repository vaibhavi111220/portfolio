import React, { useState } from 'react';

interface FlipCardProps {
  category: string;
  icon?: string;
  skills: string[];
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ category, icon, skills, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const icons: Record<string, string> = {
    'Project Management': '📋',
    'Technical Skills': '💻',
    'Data Science & Analytics': '📊',
    'Business Skills': '💼',
    'Tools & Software': '🔧',
    'Domain Knowledge': '🌍',
  };

  const displayIcon = icon || icons[category] || '⭐';

  return (
    <div
      className="h-80 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: '1000px',
        animation: `slideUp 0.6s ease-out ${index * 100}ms both`,
      }}
    >
      <div
        style={{
          transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {/* Front */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className="p-6 rounded-xl border border-accent-blue/30 bg-white/40 backdrop-blur-sm hover:border-accent-coral/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
        >
          <div className="text-6xl mb-4">{displayIcon}</div>
          <h3 className="text-xl font-bold text-text-primary text-center">
            {category}
          </h3>
          <p className="text-sm text-text-secondary mt-4 text-center">
            Click to reveal skills →
          </p>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            inset: 0,
          }}
          className="p-6 rounded-xl border border-accent-coral/30 bg-gradient-to-br from-accent-coral/10 to-accent-blue/10 backdrop-blur-sm flex flex-col"
        >
          <h3 className="text-lg font-bold text-text-primary mb-4 text-center">
            {category}
          </h3>
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-accent-blue/30 text-text-primary text-xs rounded-full border border-accent-blue/50 hover:bg-accent-coral/30 hover:border-accent-coral/50 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-text-secondary text-center mt-4">
            Click to flip back
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FlipCard;
