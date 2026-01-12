'use client';

import { useCallback } from 'react';
import { trackEvent } from './mixpanel';
import { AnalyticsEventProperties } from './events';

/**
 * Hook for accessing analytics functions
 * Must be used in client components
 */
export const useAnalytics = () => {
  const track = useCallback((eventName: string, properties?: AnalyticsEventProperties) => {
    trackEvent(eventName, properties);
  }, []);

  return {
    track,
  };
};
