// Core functions
export { initMixpanel, trackEvent, identifyUser, setUserProperties, resetUser } from './mixpanel';

// Hooks
export { useAnalytics } from './hooks';

// Event constants and types
export { ANALYTICS_EVENTS } from './events';
export type {
  PageViewedProperties,
  ScrollDepthProperties,
  ClickProperties,
  TesterProfileProperties,
  AnalyticsEventProperties,
} from './events';
