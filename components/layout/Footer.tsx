'use client';

import { Icon } from '@iconify/react';
import { siteConfig } from '@/data/config';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-cyber-dark)] py-8 border-t border-[var(--color-neon-cyan)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 font-mono text-sm mb-4 md:mb-0">
            © 2025 {siteConfig.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--color-neon-pink)] transition-colors text-2xl"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--color-neon-cyan)] transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <Icon icon="mdi:linkedin" />
            </a>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-gray-400 hover:text-[var(--color-neon-pink)] transition-colors text-2xl"
              aria-label="Email"
            >
              <Icon icon="mdi:email" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
