import React from 'react';

interface ParticleFieldProps {
  count?: number;
  opacity?: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ count = 40, opacity = 0.08 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 15 + Math.random() * 10,
    size: 3 + Math.random() * 2,
  }));

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-accent-turquoise"
          style={{
            left: `${particle.left}%`,
            bottom: '-10px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: opacity,
            animation: `floatUp ${particle.duration}s linear ${particle.delay}s infinite`,
            filter: 'drop-shadow(0 0 4px rgba(0, 212, 200, 0.4))',
          }}
        />
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: ${opacity};
          }
          90% {
            opacity: ${opacity};
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? 100 : -100}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ParticleField;
