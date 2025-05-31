// Analytics and tracking utilities

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = (event: AnalyticsEvent): void => {
  // Google Analytics 4 tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
  
  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event);
  }
};

export const trackPageView = (page: string): void => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: page,
    });
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Page View:', page);
  }
};

export const trackUserInteraction = (element: string, action: string): void => {
  trackEvent({
    action,
    category: 'User Interaction',
    label: element,
  });
};

export const trackPerformance = (metric: string, value: number): void => {
  trackEvent({
    action: 'performance_metric',
    category: 'Performance',
    label: metric,
    value: Math.round(value),
  });
};

export const trackDownload = (fileName: string): void => {
  trackEvent({
    action: 'download',
    category: 'File',
    label: fileName,
  });
};

export const trackExternalLink = (url: string): void => {
  trackEvent({
    action: 'click',
    category: 'External Link',
    label: url,
  });
};

export const trackContactForm = (action: 'submit' | 'error' | 'success'): void => {
  trackEvent({
    action,
    category: 'Contact Form',
  });
};

export const trackScrollDepth = (percentage: number): void => {
  trackEvent({
    action: 'scroll_depth',
    category: 'Engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

// Initialize analytics tracking
export const initializeAnalytics = (): void => {
  // Track scroll depth
  let maxScroll = 0;
  const scrollDepthMarkers = [25, 50, 75, 100];
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      scrollDepthMarkers.forEach(marker => {
        if (scrollPercent >= marker && maxScroll < marker + 5) {
          trackScrollDepth(marker);
        }
      });
    }
  });
  
  // Track time on page
  const startTime = Date.now();
  
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent({
      action: 'time_on_page',
      category: 'Engagement',
      value: timeOnPage,
    });
  });
};
