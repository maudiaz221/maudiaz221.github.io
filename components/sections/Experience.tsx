'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section bg-[var(--color-cyber-dark)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-[var(--color-neon-cyan)] pb-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--color-neon-pink)] rounded-full shadow-[var(--shadow-neon-pink)]" />

              {/* Content */}
              <div className="bg-[var(--color-cyber-gray)] p-6 rounded-lg border border-[var(--color-neon-cyan)]/30 hover:border-[var(--color-neon-pink)] transition-all">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-[family-name:var(--font-cyber)] font-bold text-[var(--color-neon-pink)] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-[var(--color-neon-cyan)] font-mono mb-1">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 font-mono text-sm">
                      <span className="text-[var(--color-neon-cyan)] mt-1">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-[var(--color-neon-pink)]/10 text-[var(--color-neon-pink)] border border-[var(--color-neon-pink)]/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
