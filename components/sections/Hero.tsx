'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import NeonButton from '@/components/ui/NeonButton';
import { siteConfig } from '@/data/config';

export default function Hero() {
  const [userName, setUserName] = useState(siteConfig.name);

  useEffect(() => {
    // Fetch GitHub user data
    fetch('/api/github/user')
      .then((res) => res.json())
      .then((data) => {
        if (data.name) setUserName(data.name);
      })
      .catch((err) => console.error('Failed to fetch GitHub user:', err));
  }, []);

  return (
    <section id="hero" className="section min-h-screen relative overflow-hidden cyber-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-[var(--color-neon-cyan)]/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mb-12 inline-block"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full neon-border-cyan overflow-hidden">
              <img
                src="/images/profile/morty.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl font-[family-name:var(--font-cyber)] font-bold mb-6"
          >
            <span className="neon-text animate-pulse-neon">{userName}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-[var(--color-neon-cyan)] mb-12 font-mono"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8 mb-16"
          >
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl text-gray-400 hover:text-[var(--color-neon-pink)] transition-colors"
            >
              <Icon icon="mdi:github" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl text-gray-400 hover:text-[var(--color-neon-cyan)] transition-colors"
            >
              <Icon icon="mdi:linkedin" />
            </a>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-4xl md:text-5xl text-gray-400 hover:text-[var(--color-neon-pink)] transition-colors"
            >
              <Icon icon="mdi:email" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <NeonButton href="#projects" variant="primary" className="text-lg">
              View Projects
            </NeonButton>
            <NeonButton href="#contact" variant="secondary" className="text-lg">
              Get in Touch
            </NeonButton>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
