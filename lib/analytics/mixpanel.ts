import mixpanel, { Dict } from 'mixpanel-browser';
import { AnalyticsEventProperties } from './events';

let isInitialized = false;

/**
 * Initialize Mixpanel SDK
 * Should be called once on client-side mount
 */
export const initMixpanel = (): void => {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

  if (!token) {
    console.warn('Mixpanel token not found. Analytics will not be tracked.');
    return;
  }

  if (isInitialized) {
    return;
  }

  try {
    mixpanel.init(token, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: false, // We'll handle page views manually
      persistence: 'localStorage',
      ignore_dnt: false, // Respect Do Not Track
    });

    isInitialized = true;
    console.log('Mixpanel initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Mixpanel:', error);
  }
};

/**
 * Track an event
 */
export const trackEvent = (
  eventName: string,
  properties?: AnalyticsEventProperties
): void => {
  if (!isInitialized) {
    console.warn('Mixpanel not initialized. Event not tracked:', eventName);
    return;
  }

  try {
    mixpanel.track(eventName, properties as Dict);
  } catch (error) {
    console.error('Failed to track event:', eventName, error);
  }
};

/**
 * Identify a user (optional - for future use)
 */
export const identifyUser = (userId: string, traits?: Dict): void => {
  if (!isInitialized) {
    return;
  }

  try {
    mixpanel.identify(userId);
    if (traits) {
      mixpanel.people.set(traits);
    }
  } catch (error) {
    console.error('Failed to identify user:', error);
  }
};

/**
 * Set user properties (optional - for future use)
 */
export const setUserProperties = (properties: Dict): void => {
  if (!isInitialized) {
    return;
  }

  try {
    mixpanel.register(properties);
  } catch (error) {
    console.error('Failed to set user properties:', error);
  }
};

/**
 * Reset user identity (for logout scenarios)
 */
export const resetUser = (): void => {
  if (!isInitialized) {
    return;
  }

  try {
    mixpanel.reset();
  } catch (error) {
    console.error('Failed to reset user:', error);
  }
};
