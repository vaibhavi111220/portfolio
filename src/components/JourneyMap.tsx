import React, { useEffect, useRef, useState } from 'react';

interface JourneyStop {
  city: string;
  emoji: string;
  description: string;
  position: number;
}

const JourneyMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const journeyStops: JourneyStop[] = [
    {
      city: 'Bangalore',
      emoji: '🏠',
      description: 'Home. Where it all began.',
      position: 0,
    },
    {
      city: 'Dallas',
      emoji: '✈️',
      description: 'Where I grew.',
      position: 25,
    },
    {
      city: 'South Carolina',
      emoji: '🌿',
      description: 'Where I delivered.',
      position: 50,
    },
    {
      city: 'Bangalore',
      emoji: '🏠',
      description: 'Back home. Ready for what\'s next.',
      position: 75,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full py-12 px-4"
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-turquoise via-accent-gold to-accent-turquoise transform -translate-x-1/2"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-out',
            boxShadow: '0 0 12px rgba(0, 212, 200, 0.4)',
          }}
        />

        {/* Journey stops */}
        <div className="space-y-12 md:space-y-16">
          {journeyStops.map((stop, index) => (
            <div
              key={`${stop.city}-${index}`}
              className={`flex items-center gap-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Left side (even) or right side (odd) */}
              {index % 2 === 0 ? (
                <>
                  <div className="hidden md:flex-1 md:block text-right pr-12">
                    <p className="text-sm text-text-muted">{stop.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-accent-turquoise/20 border-2 border-accent-turquoise flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-shadow">
                      {stop.emoji}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary">
                      {stop.city}
                    </h3>
                    <p className="text-sm text-text-muted md:hidden">
                      {stop.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary text-right">
                      {stop.city}
                    </h3>
                    <p className="text-sm text-text-muted text-right md:hidden">
                      {stop.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-accent-gold/20 border-2 border-accent-gold flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-shadow">
                      {stop.emoji}
                    </div>
                  </div>
                  <div className="hidden md:flex-1 md:block pl-12">
                    <p className="text-sm text-text-muted">{stop.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;
