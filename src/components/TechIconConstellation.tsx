import React, { useEffect, useRef, useState } from 'react';

interface Icon {
  id: string;
  emoji: string;
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const TechIconConstellation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [icons, setIcons] = useState<Icon[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const techStack = [
    { emoji: '🐍', label: 'Python' },
    { emoji: '📊', label: 'Tableau' },
    { emoji: '💾', label: 'SQL' },
    { emoji: '⚡', label: 'Databricks' },
    { emoji: '📈', label: 'Power BI' },
    { emoji: '🎨', label: 'Figma' },
    { emoji: '🔧', label: 'JIRA' },
    { emoji: '🧠', label: 'TensorFlow' },
    { emoji: '📋', label: 'Smartsheet' },
    { emoji: '🔬', label: 'scikit-learn' },
  ];

  useEffect(() => {
    // Initialize icons
    const newIcons = techStack.map((tech, index) => ({
      id: `icon-${index}`,
      emoji: tech.emoji,
      label: tech.label,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.6,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setIcons(newIcons);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animationFrame = setInterval(() => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let { x, y, vx, vy } = icon;

          // Update position
          x += vx;
          y += vy;

          // Boundary bounce
          if (x < 0 || x > window.innerWidth) vx *= -1;
          if (y < 0 || y > window.innerHeight * 0.6) vy *= -1;

          // Keep in bounds
          x = Math.max(0, Math.min(window.innerWidth, x));
          y = Math.max(0, Math.min(window.innerHeight * 0.6, y));

          // Subtle mouse interaction
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const angle = Math.atan2(dy, dx);
            vx += Math.cos(angle) * 0.1;
            vy += Math.sin(angle) * 0.1;
          }

          // Damping
          vx *= 0.99;
          vy *= 0.99;

          return { ...icon, x, y, vx, vy };
        })
      );
    }, 30);

    return () => clearInterval(animationFrame);
  }, [mousePos]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '60vh',
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.id}
          style={{
            position: 'absolute',
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            fontSize: '2rem',
            opacity: 0.6,
            transform: 'translate(-50%, -50%)',
            filter: 'drop-shadow(0 0 8px rgba(255, 138, 122, 0.4))',
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
          }}
          title={icon.label}
        >
          {icon.emoji}
        </div>
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(-50%); }
          50% { transform: translateY(-20px) translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TechIconConstellation;
