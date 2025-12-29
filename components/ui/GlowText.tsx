'use client';

import { ReactNode } from 'react';

interface GlowTextProps {
  children: ReactNode;
  color?: 'pink' | 'cyan' | 'purple';
  className?: string;
}

export default function GlowText({
  children,
  color = 'pink',
  className = '',
}: GlowTextProps) {
  const colorClasses = {
    pink: 'neon-text',
    cyan: 'neon-text-cyan',
    purple: 'text-[var(--color-neon-purple)]',
  };

  return <span className={`${colorClasses[color]} ${className}`}>{children}</span>;
}
