'use client';

import { AnchorHTMLAttributes } from 'react';
import { useAnalytics } from '@/lib/analytics';
import { AnalyticsEventProperties } from '@/lib/analytics';

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  eventProperties?: AnalyticsEventProperties;
  children: React.ReactNode;
}

export function TrackedLink({
  eventName,
  eventProperties,
  onClick,
  children,
  href,
  ...props
}: TrackedLinkProps) {
  const { track } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the event
    track(eventName, eventProperties);

    // Call original onClick if provided
    onClick?.(e);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
