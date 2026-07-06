'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionTitle from '@/components/ui/SectionTitle';
import { publications } from '@/data/publications';

export default function Publications() {
  return (
    <section id="publications" className="section bg-[var(--color-cyber-darker)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionTitle>Publications</SectionTitle>

        <div className="mt-12 space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--color-cyber-gray)] p-6 md:p-8 rounded-lg border border-[var(--color-neon-cyan)]/30 hover:border-[var(--color-neon-pink)] transition-all"
            >
              <div className="flex items-start gap-4">
                <Icon
                  icon="mdi:file-document-outline"
                  className="text-4xl text-[var(--color-neon-cyan)] flex-shrink-0 mt-1"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-[family-name:var(--font-cyber)] font-bold text-[var(--color-neon-pink)]">
                      {pub.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-mono bg-[var(--color-neon-cyan)]/10 text-[var(--color-neon-cyan)] border border-[var(--color-neon-cyan)]/50 rounded-full">
                      {pub.year}
                    </span>
                  </div>

                  <p className="text-[var(--color-neon-cyan)] font-mono mb-3">{pub.venue}</p>

                  <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
                    {pub.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-[var(--color-neon-pink)]/10 text-[var(--color-neon-pink)] border border-[var(--color-neon-pink)]/50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 font-mono text-sm text-[var(--color-neon-cyan)] border border-[var(--color-neon-cyan)]/50 rounded-md hover:bg-[var(--color-neon-cyan)]/10 hover:border-[var(--color-neon-cyan)] transition-all"
                    >
                      <Icon icon="mdi:file-pdf-box" className="text-lg" />
                      Read Paper
                    </a>
                    <a
                      href={pub.pdfUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 font-mono text-sm text-[var(--color-neon-pink)] border border-[var(--color-neon-pink)]/50 rounded-md hover:bg-[var(--color-neon-pink)]/10 hover:border-[var(--color-neon-pink)] transition-all"
                    >
                      <Icon icon="mdi:download" className="text-lg" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
