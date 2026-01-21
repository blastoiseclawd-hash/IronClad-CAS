// services/analyticsService.ts

// Extend the window object to include gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const trackPageView = (pagePath: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
    });
  }
};

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | string[] | boolean>
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  } else {
    // Fallback for development logging if script isn't loaded
    console.log(`[Analytics Dev] Event: ${eventName}`, params);
  }
};