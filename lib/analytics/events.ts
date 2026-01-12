// Event name constants
export const ANALYTICS_EVENTS = {
  // Page events
  PAGE_VIEWED: 'Page Viewed',

  // Engagement events
  SCROLL_DEPTH_REACHED: 'Scroll Depth Reached',

  // Universal click event
  CLICK: 'Click',

  // Tester page events
  TESTER_PROFILE_VIEWED: 'Tester Profile Viewed',
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

export interface ClickProperties {
  element_type: 'link' | 'button' | 'cta';
  element_text: string;
  destination_url?: string;
  location: string; // e.g., 'hero', 'pricing', 'bottom', 'navigation', 'footer', 'testers_page'
  section?: string; // Additional context about where on the page
  link_type?: 'navigation' | 'footer' | 'inline' | 'external' | 'cta' | 'stripe_checkout';
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
  | ClickProperties
  | TesterProfileProperties
  | Record<string, unknown>;
