import React, { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';

const PixiCursorTrail: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const particlesRef = useRef<PIXI.Sprite[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasError) return;

    try {
      // Create PIXI app with default settings
      const app = new PIXI.Application({
        backgroundAlpha: 0,
        antialias: true,
      });

      if (!app?.renderer?.view) {
        console.warn('PixiJS renderer not properly initialized');
        setHasError(true);
        return;
      }

      // Set initial size
      app.renderer.resize(window.innerWidth, window.innerHeight);

      // Cast to canvas element
      const canvas = app.renderer.view as unknown as HTMLCanvasElement;
      if (!canvas) {
        console.warn('PixiJS canvas element not available');
        setHasError(true);
        return;
      }

      // Append canvas to container
      containerRef.current.appendChild(canvas);
      appRef.current = app;

      // Create particle texture (glowing circle)
      const textureCanvas = document.createElement('canvas');
      textureCanvas.width = 16;
      textureCanvas.height = 16;
      const ctx = textureCanvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255, 138, 122, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 138, 122, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      const texture = PIXI.Texture.from(textureCanvas);

      // Track mouse position
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!app || !app.stage) return;

        // Create particle
        const particle = new PIXI.Sprite(texture);
        particle.x = mouseX;
        particle.y = mouseY;
        particle.scale.set(Math.random() * 0.5 + 0.5);
        particle.alpha = 1;

        app.stage.addChild(particle);
        particlesRef.current.push(particle);

        // Limit particles
        if (particlesRef.current.length > 50) {
          const old = particlesRef.current.shift();
          if (old && app.stage.children.includes(old)) {
            app.stage.removeChild(old);
          }
        }
      };

      document.addEventListener('mousemove', handleMouseMove);

      // Animate particles
      const ticker = () => {
        if (!app) return;

        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          const particle = particlesRef.current[i];
          particle.alpha -= 0.02;
          particle.scale.x *= 0.98;
          particle.scale.y *= 0.98;

          if (particle.alpha <= 0) {
            if (app.stage.children.includes(particle)) {
              app.stage.removeChild(particle);
            }
            particlesRef.current.splice(i, 1);
          }
        }
      };

      app.ticker.add(ticker);

      // Handle resize
      const handleResize = () => {
        if (appRef.current && containerRef.current) {
          appRef.current.renderer.resize(
            window.innerWidth,
            window.innerHeight
          );
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);

        if (app.ticker && ticker) {
          app.ticker.remove(ticker);
        }

        // Cleanup canvas
        if (
          containerRef.current &&
          canvas &&
          canvas.parentNode === containerRef.current
        ) {
          containerRef.current.removeChild(canvas);
        }

        app.destroy(true, {
          children: true,
          texture: true,
        });
      };
    } catch (error) {
      console.error('PixiJS initialization error:', error);
      setHasError(true);
    }
  }, [hasError]);

  if (hasError) {
    return null; // Gracefully degrade
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default PixiCursorTrail;
