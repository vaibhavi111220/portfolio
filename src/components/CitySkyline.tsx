import React from 'react';

interface CitySkylineProps {
  city: 'bangalore' | 'dallas' | 'carolina';
  scrollY?: number;
  opacity?: number;
}

const CitySkyline: React.FC<CitySkylineProps> = ({
  city,
  scrollY = 0,
  opacity = 1,
}) => {
  // Detect if on mobile for performance optimization
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const getColors = () => {
    switch (city) {
      case 'bangalore':
        return {
          sky: 'from-amber-200 via-orange-100 to-rose-100',
          building: '#E8944A',
          light: '#FFD4A3',
        };
      case 'dallas':
        return {
          sky: 'from-slate-700 via-blue-900 to-indigo-900',
          building: '#1E3A8A',
          light: '#3B82F6',
        };
      case 'carolina':
        return {
          sky: 'from-teal-200 via-cyan-100 to-emerald-100',
          building: '#059669',
          light: '#A7F3D0',
        };
    }
  };

  const colors = getColors();
  // Reduce parallax effect on mobile for better performance
  const parallaxOffset = isMobile ? scrollY * 0.1 : scrollY * 0.5;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity,
        overflow: 'hidden',
      }}
    >
      {/* Sky gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${colors.sky}`}
        style={{
          transform: `translateY(${parallaxOffset * 0.2}px)`,
        }}
      />

      {/* Clouds / midground */}
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: 0,
          width: '100%',
          height: '30%',
          background: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.1), transparent 50%)',
          transform: `translateY(${parallaxOffset * 0.3}px)`,
        }}
      />

      {/* Buildings - SVG Skyline */}
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          transform: `translateY(${parallaxOffset * 0.4}px)`,
        }}
      >
        {/* City-specific buildings */}
        {city === 'bangalore' && (
          <>
            {/* Warm marigold buildings */}
            <rect x="0" y="200" width="120" height="200" fill={colors.building} />
            <rect x="130" y="150" width="100" height="250" fill="#D97706" />
            <rect x="250" y="180" width="90" height="220" fill={colors.building} />
            <rect x="360" y="120" width="140" height="280" fill="#EA580C" />
            <rect x="520" y="160" width="110" height="240" fill={colors.building} />
            <rect x="650" y="100" width="130" height="300" fill="#D97706" />
            <rect x="800" y="140" width="120" height="260" fill={colors.building} />
            <rect x="940" y="180" width="100" height="220" fill="#EA580C" />
            <rect x="1060" y="150" width="140" height="250" fill={colors.building} />

            {/* Windows */}
            {[0, 130, 250, 360, 520, 650, 800, 940, 1060].map((x, i) => (
              <g key={`windows-${i}`}>
                {[0, 30, 60, 90, 120, 150, 180, 210].map((y, j) => (
                  <circle
                    key={`window-${i}-${j}`}
                    cx={x + 15}
                    cy={220 + y}
                    r="3"
                    fill={colors.light}
                    opacity="0.8"
                  />
                ))}
              </g>
            ))}
          </>
        )}

        {city === 'dallas' && (
          <>
            {/* Deep navy modern buildings */}
            <rect x="0" y="180" width="130" height="220" fill={colors.building} />
            <rect x="150" y="100" width="120" height="300" fill="#1E40AF" />
            <rect x="290" y="140" width="100" height="260" fill={colors.building} />
            <rect x="410" y="80" width="150" height="320" fill="#1E40AF" />
            <rect x="580" y="160" width="110" height="240" fill={colors.building} />
            <rect x="710" y="120" width="140" height="280" fill="#1E40AF" />
            <rect x="870" y="150" width="100" height="250" fill={colors.building} />
            <rect x="990" y="90" width="120" height="310" fill="#1E40AF" />

            {/* Windows with blue glow */}
            {[0, 150, 290, 410, 580, 710, 870, 990].map((x, i) => (
              <g key={`windows-dallas-${i}`}>
                {[0, 35, 70, 105, 140, 175, 210].map((y, j) => (
                  <rect
                    key={`window-dallas-${i}-${j}`}
                    x={x + 8}
                    y={200 + y}
                    width="6"
                    height="6"
                    fill={colors.light}
                    opacity="0.7"
                  />
                ))}
              </g>
            ))}
          </>
        )}

        {city === 'carolina' && (
          <>
            {/* Coastal teal buildings */}
            <rect x="0" y="190" width="110" height="210" fill={colors.building} />
            <rect x="130" y="140" width="100" height="260" fill="#0D9488" />
            <rect x="250" y="170" width="95" height="230" fill={colors.building} />
            <rect x="365" y="110" width="135" height="290" fill="#0D9488" />
            <rect x="520" y="150" width="105" height="250" fill={colors.building} />
            <rect x="645" y="130" width="125" height="270" fill="#0D9488" />
            <rect x="790" y="160" width="100" height="240" fill={colors.building} />
            <rect x="910" y="100" width="140" height="300" fill="#0D9488" />
            <rect x="1070" y="170" width="130" height="230" fill={colors.building} />

            {/* Ocean-inspired windows */}
            {[0, 130, 250, 365, 520, 645, 790, 910, 1070].map((x, i) => (
              <g key={`windows-carolina-${i}`}>
                {[0, 32, 64, 96, 128, 160, 192].map((y, j) => (
                  <circle
                    key={`window-carolina-${i}-${j}`}
                    cx={x + 12}
                    cy={210 + y}
                    r="2.5"
                    fill={colors.light}
                    opacity="0.9"
                  />
                ))}
              </g>
            ))}
          </>
        )}
      </svg>
    </div>
  );
};

export default CitySkyline;
