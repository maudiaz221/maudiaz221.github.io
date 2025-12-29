'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function NeonButton({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
}: NeonButtonProps) {
  const baseClasses = `
    px-8 py-4 font-mono font-semibold rounded-lg
    transition-all duration-300 inline-block
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-transparent border-2 border-[var(--color-neon-pink)] text-[var(--color-neon-pink)]
      hover:bg-[var(--color-neon-pink)] hover:text-[var(--color-cyber-darker)]
      hover:shadow-[var(--shadow-neon-pink)]
    `,
    secondary: `
      bg-transparent border-2 border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)]
      hover:bg-[var(--color-neon-cyan)] hover:text-[var(--color-cyber-darker)]
      hover:shadow-[var(--shadow-neon-cyan)]
    `,
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
