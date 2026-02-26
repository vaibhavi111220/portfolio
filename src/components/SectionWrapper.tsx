import React from 'react';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  background?: 'background' | 'white' | 'light';
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  background = 'background',
  className = '',
}) => {
  const bgStyles = {
    background: 'bg-background',
    white: 'bg-white/30',
    light: 'bg-white/50',
  };

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 ${bgStyles[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
