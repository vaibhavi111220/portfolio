/**
 * Lazy Load Manager - Handles deferred loading of 3D assets and animations
 * Loads heavy components after initial page render
 */

export const LazyLoadManager = {
  /**
   * Wait for the hero section to be visible, then trigger loading of other assets
   */
  loadAfterHero: async (callback: () => void) => {
    const heroSection = document.getElementById('home');
    
    if (!heroSection) {
      // If hero not found, load immediately
      setTimeout(callback, 1000);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        
        // Wait a bit for smooth transition, then load
        setTimeout(() => {
          callback();
          // Trigger a repaint
          window.dispatchEvent(new Event('lazyload-complete'));
        }, 300);
      },
      { threshold: 0.8 }
    );

    observer.observe(heroSection);
  },

  /**
   * Defer heavy 3D animations until device has resources
   */
  scheduleHeavyAnimation: (callback: () => void, delay: number = 2000) => {
    if ('requestIdleCallback' in window) {
      // Use requestIdleCallback if available (modern browsers)
      requestIdleCallback(() => callback(), { timeout: delay });
    } else {
      // Fallback to setTimeout
      setTimeout(callback, delay);
    }
  },

  /**
   * Check if device is capable of heavy animations (not mobile, good CPU)
   */
  isHighPerformanceDevice: (): boolean => {
    if (typeof window === 'undefined') return false;
    
    const isMobile = window.innerWidth < 768;
    const cpuCores = navigator.hardwareConcurrency || 4;
    
    return !isMobile && cpuCores >= 4;
  },

  /**
   * Preload images for smoother scrolling
   */
  preloadImages: (urls: string[]) => {
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  },
};
