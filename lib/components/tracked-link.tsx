'use client';

import { AnchorHTMLAttributes } from 'react';
import { useAnalytics, ANALYTICS_EVENTS, ClickProperties } from '@/lib/analytics';

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  trackingProps: Omit<ClickProperties, 'element_type'>;
  children: React.ReactNode;
}

export function TrackedLink({
  trackingProps,
  onClick,
  children,
  href,
  ...props
}: TrackedLinkProps) {
  const { track } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the click event with element_type automatically set to 'link'
    track(ANALYTICS_EVENTS.CLICK, {
      ...trackingProps,
      element_type: 'link',
      destination_url: trackingProps.destination_url || href,
    } as ClickProperties);

    // Call original onClick if provided
    onClick?.(e);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
