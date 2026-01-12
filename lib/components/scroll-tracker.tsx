'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import type { ScrollDepthProperties } from '@/lib/analytics';

interface ScrollTrackerProps {
  pageTitle: string;
}

export function ScrollTracker({ pageTitle }: ScrollTrackerProps) {
  const pathname = usePathname();
  const scrollDepthsReached = useRef<Set<number>>(new Set());
  const pageLoadTime = useRef<number>(Date.now());

  useEffect(() => {
    // Reset on path change
    scrollDepthsReached.current = new Set();
    pageLoadTime.current = Date.now();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Calculate scroll percentage
      const scrollableDistance = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / scrollableDistance) * 100;

      // Check each milestone
      const milestones = [25, 50, 75, 100];

      milestones.forEach((milestone) => {
        // Only track if not already reached (check ref synchronously)
        if (scrollPercentage >= milestone && !scrollDepthsReached.current.has(milestone)) {
          const timeToDepth = Math.floor((Date.now() - pageLoadTime.current) / 1000);

          const properties: ScrollDepthProperties = {
            page_title: pageTitle,
            page_path: pathname,
            scroll_percentage: milestone as 25 | 50 | 75 | 100,
            time_to_depth_seconds: timeToDepth,
          };

          // Include percentage in event name
          trackEvent(`${ANALYTICS_EVENTS.SCROLL_DEPTH_REACHED} - ${milestone}%`, properties);

          // Mark as reached in ref (synchronous, no re-render)
          scrollDepthsReached.current.add(milestone);
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check in case user starts scrolled down
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, pageTitle]);

  return null; // This component doesn't render anything
}
