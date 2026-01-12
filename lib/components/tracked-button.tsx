'use client';

import { ButtonHTMLAttributes } from 'react';
import { useAnalytics, ANALYTICS_EVENTS, ClickProperties } from '@/lib/analytics';

interface TrackedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  trackingProps: Omit<ClickProperties, 'element_type'>;
  children: React.ReactNode;
}

export function TrackedButton({
  trackingProps,
  onClick,
  children,
  ...props
}: TrackedButtonProps) {
  const { track } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the click event with element_type automatically set to 'button'
    track(ANALYTICS_EVENTS.CLICK, {
      ...trackingProps,
      element_type: 'button',
    } as ClickProperties);

    // Call original onClick if provided
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
