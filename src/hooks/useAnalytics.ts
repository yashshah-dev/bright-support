// src/hooks/useAnalytics.ts

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  trackScrollDepth,
  trackTimeOnPage,
  trackServiceView,
  isGA4Loaded
} from '@/lib/analytics';

export const usePageTracking = () => {
  const pathname = usePathname();
  const pageStartTime = useRef<number>(Date.now());
  const scrollDepthsTracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!isGA4Loaded()) return;

    // Reset tracking for new page
    pageStartTime.current = Date.now();
    scrollDepthsTracked.current.clear();

    // Track service views for service pages
    if (pathname?.includes('/services/')) {
      const serviceName = pathname.split('/').pop()?.replace(/-/g, ' ') || 'unknown';
      trackServiceView(serviceName, { page_path: pathname });
    }

    // Track scroll depth
    const handleScroll = () => {
      if (!isGA4Loaded()) return;

      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track at 25%, 50%, 75%, 90%, 100% scroll depths
      const thresholds = [25, 50, 75, 90, 100];
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !scrollDepthsTracked.current.has(threshold)) {
          scrollDepthsTracked.current.add(threshold);
          trackScrollDepth(threshold, pathname || '');
        }
      });
    };

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000);
      if (timeSpent > 5) { // Only track if spent more than 5 seconds
        trackTimeOnPage(timeSpent, pathname || '');
      }
    };

    // Track time on page periodically (every 30 seconds)
    const timeTrackingInterval = setInterval(() => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000);
      if (timeSpent > 30 && timeSpent % 30 === 0) { // Track every 30 seconds
        trackTimeOnPage(timeSpent, pathname || '');
      }
    }, 30000);

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(timeTrackingInterval);

      // Track final time on page
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000);
      if (timeSpent > 5) {
        trackTimeOnPage(timeSpent, pathname || '');
      }
    };
  }, [pathname]);
};

export const useFormTracking = () => {
  const formStartTime = useRef<number>(Date.now());
  const interactions = useRef<number>(0);

  useEffect(() => {
    formStartTime.current = Date.now();
    interactions.current = 0;
  }, []);

  const trackInteraction = () => {
    interactions.current += 1;
  };

  const getFormMetrics = () => {
    return {
      timeSpent: Math.round((Date.now() - formStartTime.current) / 1000),
      interactions: interactions.current,
    };
  };

  return { trackInteraction, getFormMetrics };
};

export const useVideoTracking = () => {
  const trackVideoPlay = (videoName: string, additionalParams?: Record<string, any>) => {
    // Import the video tracking function dynamically to avoid issues
    import('@/lib/analytics').then(({ trackVideoInteraction }) => {
      trackVideoInteraction(videoName, 'play', additionalParams);
    });
  };

  const trackVideoPause = (videoName: string, additionalParams?: Record<string, any>) => {
    import('@/lib/analytics').then(({ trackVideoInteraction }) => {
      trackVideoInteraction(videoName, 'pause', additionalParams);
    });
  };

  const trackVideoComplete = (videoName: string, additionalParams?: Record<string, any>) => {
    import('@/lib/analytics').then(({ trackVideoInteraction }) => {
      trackVideoInteraction(videoName, 'complete', additionalParams);
    });
  };

  return { trackVideoPlay, trackVideoPause, trackVideoComplete };
};