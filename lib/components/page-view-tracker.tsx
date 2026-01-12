'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import type { PageViewedProperties } from '@/lib/analytics';

interface PageViewTrackerProps {
  pageTitle: string;
}

export function PageViewTracker({ pageTitle }: PageViewTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    const properties: PageViewedProperties = {
      page_title: pageTitle,
      page_path: pathname,
      referrer: document.referrer || undefined,
    };

    trackEvent(ANALYTICS_EVENTS.PAGE_VIEWED, properties);
  }, [pathname, pageTitle]);

  return null; // This component doesn't render anything
}
