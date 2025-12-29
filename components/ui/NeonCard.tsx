'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface NeonCardProps {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  stars?: number;
}

export default function NeonCard({
  title,
  description,
  image,
  tech,
  githubUrl,
  demoUrl,
  stars,
}: NeonCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full bg-[var(--color-cyber-gray)] border-2 border-[var(--color-neon-cyan)]/30 rounded-lg overflow-hidden hover:border-[var(--color-neon-pink)] transition-all duration-300 hover:shadow-[var(--shadow-neon-pink)]"
    >
      {/* Project Image */}
      {image && (
        <div className="relative h-48 bg-[var(--color-cyber-dark)]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      )}

      <div className="p-6">
        {/* Title & Stars */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-[family-name:var(--font-cyber)] font-bold text-[var(--color-neon-pink)]">
            {title}
          </h3>
          {stars !== undefined && (
            <div className="flex items-center gap-1 text-[var(--color-neon-cyan)]">
              <Icon icon="mdi:star" />
              <span className="text-sm font-mono">{stars}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-mono bg-[var(--color-neon-cyan)]/10 text-[var(--color-neon-cyan)] border border-[var(--color-neon-cyan)]/50 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--color-neon-cyan)] hover:text-[var(--color-neon-pink)] transition-colors"
            >
              <Icon icon="mdi:github" className="text-xl" />
              <span className="text-sm font-mono">Code</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--color-neon-cyan)] hover:text-[var(--color-neon-pink)] transition-colors"
            >
              <Icon icon="mdi:open-in-new" className="text-xl" />
              <span className="text-sm font-mono">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
