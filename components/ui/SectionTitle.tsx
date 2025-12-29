'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-4xl md:text-5xl font-[family-name:var(--font-cyber)] font-bold text-center mb-12 ${className}`}
    >
      <span className="neon-text">{children}</span>
    </motion.h2>
  );
}
