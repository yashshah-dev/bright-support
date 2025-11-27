// src/components/AnalyticsProvider.tsx

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { usePageTracking } from '@/hooks/useAnalytics';
import { initializeConsent, setUserProperties, isGA4Loaded } from '@/lib/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Initialize page tracking
  usePageTracking();

  useEffect(() => {
    if (!isGA4Loaded()) return;

    // Initialize consent on first load
    initializeConsent();

    // Set user properties based on user behavior
    const userProperties: Record<string, any> = {
      user_type: 'visitor',
      first_visit: new Date().toISOString(),
    };

    // Check if user has visited before
    const hasVisited = localStorage.getItem('has_visited_before');
    if (!hasVisited) {
      userProperties.user_type = 'new_visitor';
      localStorage.setItem('has_visited_before', 'true');
    } else {
      userProperties.user_type = 'returning_visitor';
    }

    // Set referrer information
    if (document.referrer) {
      userProperties.referrer = document.referrer;
      userProperties.referrer_domain = new URL(document.referrer).hostname;
    }

    // Set user properties
    setUserProperties(userProperties);

    // Track page visibility changes (user engagement)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User switched away from tab
        sessionStorage.setItem('tab_hidden_time', Date.now().toString());
      } else {
        // User came back to tab
        const hiddenTime = sessionStorage.getItem('tab_hidden_time');
        if (hiddenTime) {
          const timeAway = Date.now() - parseInt(hiddenTime);
          if (timeAway > 5000) { // More than 5 seconds away
            import('@/lib/analytics').then(({ event }) => {
              event('tab_return', {
                time_away_seconds: Math.round(timeAway / 1000),
                page_path: pathname,
              });
            });
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Track errors
    const handleError = (event: ErrorEvent) => {
      import('@/lib/analytics').then(({ trackError }) => {
        trackError('javascript_error', event.message, {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          page_path: pathname,
        });
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      import('@/lib/analytics').then(({ trackError }) => {
        trackError('promise_rejection', event.reason?.toString() || 'Unknown promise rejection', {
          page_path: pathname,
        });
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // Track route changes
  useEffect(() => {
    if (!isGA4Loaded() || !pathname) return;

    // Track page view on route change
    import('@/lib/analytics').then(({ pageview }) => {
      pageview(pathname, document.title);
    });
  }, [pathname]);

  return <>{children}</>;
}