import React from "react";
import "../assets/subtle-dots.css";

const StaticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-subtle-dots opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-secondary/10 to-accent/10 blur-[120px] rounded-full"></div>
    </div>
  );
};

export default StaticBackground;
