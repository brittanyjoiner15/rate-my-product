'use client';

import { ButtonHTMLAttributes } from 'react';
import { useAnalytics } from '@/lib/analytics';
import { AnalyticsEventProperties } from '@/lib/analytics';

interface TrackedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  eventName: string;
  eventProperties?: AnalyticsEventProperties;
  children: React.ReactNode;
}

export function TrackedButton({
  eventName,
  eventProperties,
  onClick,
  children,
  ...props
}: TrackedButtonProps) {
  const { track } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the event
    track(eventName, eventProperties);

    // Call original onClick if provided
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
