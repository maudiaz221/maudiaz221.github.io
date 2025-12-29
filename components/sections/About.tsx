'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { aboutMe } from '@/data/personal';

export default function About() {
  return (
    <section id="about" className="section bg-[var(--color-cyber-darker)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Bio */}
          <div className="text-gray-300 font-mono text-lg leading-relaxed whitespace-pre-line">
            {aboutMe.bio}
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-[family-name:var(--font-cyber)] font-bold text-[var(--color-neon-cyan)] mb-4">
              Interests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {aboutMe.interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 font-mono text-gray-300"
                >
                  <span className="text-[var(--color-neon-pink)]">▹</span>
                  {interest}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-[family-name:var(--font-cyber)] font-bold text-[var(--color-neon-cyan)] mb-4">
              Education
            </h3>
            {aboutMe.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-[var(--color-neon-pink)] pl-4 py-2"
              >
                <h4 className="text-lg font-bold text-white font-mono">{edu.degree}</h4>
                <p className="text-[var(--color-neon-cyan)] font-mono">{edu.institution}</p>
                <p className="text-gray-400 font-mono text-sm">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
