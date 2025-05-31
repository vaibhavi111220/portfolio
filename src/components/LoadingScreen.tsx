import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // Faster simulated loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Animate out the loading screen
          gsap.to(".loading-screen", {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              setIsVisible(false);
              onLoadingComplete();
            },
          });
          return 100;
        }
        return prev + Math.random() * 25; // Faster progress
      });
    }, 50); // Shorter interval

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen fixed inset-0 z-50 flex items-center justify-center bg-dark">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="text-6xl font-bold gradient-text animate-pulse">
            VS
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Loading Portfolio
          </h2>
          <p className="text-gray-400">Preparing amazing content...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Floating dots animation */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
