// src/lib/analytics.ts

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Tracks a pageview in GA4.
 * @param url - The URL of the page being viewed.
 * @param title - Optional page title.
 */
export const pageview = (url: string, title?: string): void => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

/**
 * Tracks a custom event in GA4 with enhanced parameters.
 * @param action - The event action (e.g., 'click', 'submit').
 * @param parameters - Additional event parameters.
 */
export const event = (action: string, parameters: Record<string, any> = {}): void => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      ...parameters,
      timestamp: Date.now(),
      session_id: getSessionId(),
    });
  }
};

/**
 * Enhanced event tracking functions for NDIS website
 */
export const trackButtonClick = (
  buttonName: string,
  additionalParams: Record<string, any> = {}
) => {
  event('button_click', {
    button_name: buttonName,
    element_type: 'button',
    ...additionalParams,
  });
};

export const trackFormSubmission = (
  formName: string,
  success: boolean,
  additionalParams: Record<string, any> = {}
) => {
  event('form_submit', {
    form_name: formName,
    form_success: success,
    ...additionalParams,
  });
};

export const trackServiceInquiry = (
  serviceName: string,
  additionalParams: Record<string, any> = {}
) => {
  event('service_inquiry', {
    service_name: serviceName,
    inquiry_type: 'lead',
    ...additionalParams,
  });
};

export const trackPhoneCall = (
  phoneNumber: string,
  additionalParams: Record<string, any> = {}
) => {
  event('phone_call', {
    phone_number: phoneNumber,
    contact_method: 'phone',
    ...additionalParams,
  });
};

export const trackEmailClick = (
  emailAddress: string,
  additionalParams: Record<string, any> = {}
) => {
  event('email_click', {
    email_address: emailAddress,
    contact_method: 'email',
    ...additionalParams,
  });
};

/**
 * Track user engagement metrics
 */
export const trackScrollDepth = (depth: number, pagePath: string) => {
  event('scroll', {
    scroll_depth: depth,
    page_path: pagePath,
    engagement_type: 'scroll',
  });
};

export const trackTimeOnPage = (timeSpent: number, pagePath: string) => {
  event('time_on_page', {
    time_spent_seconds: timeSpent,
    page_path: pagePath,
    engagement_type: 'time',
  });
};

export const trackVideoInteraction = (
  videoName: string,
  action: 'play' | 'pause' | 'complete',
  additionalParams: Record<string, any> = {}
) => {
  event('video_interaction', {
    video_name: videoName,
    video_action: action,
    ...additionalParams,
  });
};

/**
 * Track service-specific interactions
 */
export const trackServiceView = (
  serviceName: string,
  additionalParams: Record<string, any> = {}
) => {
  event('service_view', {
    service_name: serviceName,
    content_type: 'service_page',
    ...additionalParams,
  });
};

export const trackServiceComparison = (
  services: string[],
  additionalParams: Record<string, any> = {}
) => {
  event('service_comparison', {
    compared_services: services.join(','),
    comparison_count: services.length,
    ...additionalParams,
  });
};

/**
 * Track user journey and conversions
 */
export const trackLeadGeneration = (
  leadType: string,
  leadValue?: number,
  additionalParams: Record<string, any> = {}
) => {
  event('generate_lead', {
    lead_type: leadType,
    currency: 'AUD',
    value: leadValue,
    ...additionalParams,
  });
};

export const trackConversion = (
  conversionType: string,
  value?: number,
  additionalParams: Record<string, any> = {}
) => {
  event('conversion', {
    conversion_type: conversionType,
    currency: 'AUD',
    value,
    ...additionalParams,
  });
};

/**
 * Track errors and issues
 */
export const trackError = (
  errorType: string,
  errorMessage: string,
  additionalParams: Record<string, any> = {}
) => {
  event('exception', {
    error_type: errorType,
    error_message: errorMessage,
    fatal: false,
    ...additionalParams,
  });
};

export const trackFormError = (
  formName: string,
  fieldName: string,
  errorMessage: string,
  additionalParams: Record<string, any> = {}
) => {
  event('form_error', {
    form_name: formName,
    field_name: fieldName,
    error_message: errorMessage,
    ...additionalParams,
  });
};

/**
 * Track performance metrics
 */
export const trackPerformance = (
  metricName: string,
  value: number,
  additionalParams: Record<string, any> = {}
) => {
  event('performance_metric', {
    metric_name: metricName,
    metric_value: value,
    ...additionalParams,
  });
};

/**
 * Set user properties for better segmentation
 */
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      custom_map: Object.keys(properties).reduce((acc, key, index) => {
        acc[`custom_user_param_${index + 1}`] = key;
        return acc;
      }, {} as Record<string, string>),
      ...properties,
    });
  }
};

/**
 * Track search interactions
 */
export const trackSearch = (
  searchTerm: string,
  searchResults: number,
  additionalParams: Record<string, any> = {}
) => {
  event('search', {
    search_term: searchTerm,
    search_results_count: searchResults,
    ...additionalParams,
  });
};

/**
 * Track file downloads
 */
export const trackFileDownload = (
  fileName: string,
  fileType: string,
  additionalParams: Record<string, any> = {}
) => {
  event('file_download', {
    file_name: fileName,
    file_type: fileType,
    ...additionalParams,
  });
};

/**
 * Utility functions
 */
export const isGA4Loaded = (): boolean => {
  return typeof window !== 'undefined' && !!window.gtag && !!GA_MEASUREMENT_ID;
};

export const getSessionId = (): string => {
  if (typeof window === 'undefined') return '';
  const sessionKey = 'ga_session_id';
  let sessionId = sessionStorage.getItem(sessionKey);
  if (!sessionId) {
    sessionId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem(sessionKey, sessionId);
  }
  return sessionId;
};

/**
 * Enhanced consent management
 */
export const updateConsent = (consentType: 'analytics_storage' | 'ad_storage', consentValue: 'granted' | 'denied') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      [consentType]: consentValue,
    });
  }
};

/**
 * Initialize default consent settings
 */
export const initializeConsent = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
    });
  }
};