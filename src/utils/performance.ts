// Performance monitoring utilities

export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const debounceAnimation = (callback: () => void): void => {
  let ticking = false;
  
  if (!ticking) {
    requestAnimationFrame(() => {
      callback();
      ticking = false;
    });
    ticking = true;
  }
};

export const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  const promises = imageUrls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = url;
    });
  });
  
  return Promise.all(promises);
};

export const lazyLoad = (selector: string): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const src = element.getAttribute('data-src');
        if (src) {
          element.setAttribute('src', src);
          element.removeAttribute('data-src');
          observer.unobserve(element);
        }
      }
    });
  });

  document.querySelectorAll(selector).forEach(el => {
    observer.observe(el);
  });
};

export const getWebVitals = (): void => {
  // Core Web Vitals monitoring
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('Web Vital:', entry.name, entry.value);
    }
  }).observe({ entryTypes: ['measure', 'navigation', 'paint'] });
};

export const reportWebVitals = (onPerfEntry?: (metric: any) => void): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
