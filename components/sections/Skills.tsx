'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionTitle from '@/components/ui/SectionTitle';
import NeonButton from '@/components/ui/NeonButton';
import { skills } from '@/data/skills';
import { siteConfig } from '@/data/config';

export default function Skills() {
  const categories = {
    language: skills.filter((s) => s.category === 'language'),
    framework: skills.filter((s) => s.category === 'framework'),
    tool: skills.filter((s) => s.category === 'tool'),
    database: skills.filter((s) => s.category === 'database'),
  };

  return (
    <section id="skills" className="section bg-[var(--color-cyber-darker)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills & Frameworks</SectionTitle>

        <div className="mt-12 space-y-12">
          {/* Languages */}
          {categories.language.length > 0 && (
            <div>
              <h3 className="text-2xl font-[family-name:var(--font-cyber)] font-bold text-[var(--color-neon-cyan)] mb-6 text-center">
                Languages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.language.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-2 p-4 bg-[var(--color-cyber-gray)] rounded-lg border-2 border-[var(--color-neon-pink)]/30 hover:border-[var(--color-neon-pink)] transition-all"
                  >
                    <Icon icon={skill.icon} className="text-5xl text-[var(--color-neon-pink)]" />
                    <span className="text-sm font-mono text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Frameworks */}
          {categories.framework.length > 0 && (
            <div>
              <h3 className="text-2xl font-[family-name:var(--font-cyber)] font-bold text-[var(--color-neon-cyan)] mb-6 text-center">
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.framework.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-2 p-4 bg-[var(--color-cyber-gray)] rounded-lg border-2 border-[var(--color-neon-cyan)]/30 hover:border-[var(--color-neon-cyan)] transition-all"
                  >
                    <Icon icon={skill.icon} className="text-5xl text-[var(--color-neon-cyan)]" />
                    <span className="text-sm font-mono text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Databases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.tool.length > 0 && (
              <div>
                <h3 className="text-2xl font-[family-name:var(--font-cyber)] font-bold text-[var(--color-neon-pink)] mb-6 text-center">
                  Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {categories.tool.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-[var(--color-cyber-gray)] rounded-lg"
                    >
                      <Icon icon={skill.icon} className="text-3xl text-[var(--color-neon-pink)]" />
                      <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {categories.database.length > 0 && (
              <div>
                <h3 className="text-2xl font-[family-name:var(--font-cyber)] font-bold text-[var(--color-neon-purple)] mb-6 text-center">
                  Databases
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {categories.database.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-[var(--color-cyber-gray)] rounded-lg"
                    >
                      <Icon icon={skill.icon} className="text-3xl text-[var(--color-neon-purple)]" />
                      <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Resume Button */}
        <div className="text-center mt-12">
          <NeonButton
            href={siteConfig.resumeUrl}
            onClick={() => window.open(siteConfig.resumeUrl, '_blank')}
            variant="primary"
          >
            <Icon icon="mdi:download" className="inline mr-2" />
            Download Resume
          </NeonButton>
        </div>
      </div>
    </section>
  );
}
