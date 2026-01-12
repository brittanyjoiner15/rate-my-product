// Event name constants
export const ANALYTICS_EVENTS = {
  // Page events
  PAGE_VIEWED: 'Page Viewed',

  // Engagement events
  SCROLL_DEPTH_REACHED: 'Scroll Depth Reached',

  // Navigation events
  NAV_LINK_CLICKED: 'Navigation Link Clicked',
  FOOTER_LINK_CLICKED: 'Footer Link Clicked',

  // CTA events
  CTA_CLICKED: 'CTA Clicked',
  STRIPE_CHECKOUT_CLICKED: 'Stripe Checkout Clicked',

  // Tester page events
  TESTER_PROFILE_VIEWED: 'Tester Profile Viewed',
  TESTER_APPLICATION_CLICKED: 'Tester Application Clicked',
} as const;

// Event property types
export interface PageViewedProperties {
  page_title: string;
  page_path: string;
  referrer?: string;
}

export interface ScrollDepthProperties {
  page_title: string;
  page_path: string;
  scroll_percentage: 25 | 50 | 75 | 100;
  time_to_depth_seconds: number;
}

export interface CTAClickedProperties {
  cta_location: 'hero' | 'pricing' | 'bottom' | 'testers_page';
  cta_text: string;
  destination_url: string;
}

export interface LinkClickedProperties {
  link_text: string;
  link_destination: string;
  link_type: 'navigation' | 'footer' | 'inline';
  section?: string;
}

export interface TesterProfileProperties {
  tester_name: string;
  tester_role: string;
  profile_url: string;
}

// Union type for all event properties
export type AnalyticsEventProperties =
  | PageViewedProperties
  | ScrollDepthProperties
  | CTAClickedProperties
  | LinkClickedProperties
  | TesterProfileProperties
  | Record<string, unknown>;
