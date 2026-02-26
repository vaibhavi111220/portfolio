import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';

  const variants = {
    default: 'p-6 border border-accent-blue/30 bg-white/40 backdrop-blur-sm hover:border-accent-coral/50 hover:shadow-lg',
    elevated: 'p-6 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg',
    outlined: 'p-6 border-2 border-accent-blue/30 hover:border-accent-coral/50',
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
