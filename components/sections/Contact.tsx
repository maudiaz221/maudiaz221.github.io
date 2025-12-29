'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionTitle from '@/components/ui/SectionTitle';
import NeonButton from '@/components/ui/NeonButton';
import { siteConfig } from '@/data/config';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(siteConfig.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section bg-[var(--color-cyber-darker)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionTitle>Get In Touch</SectionTitle>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-[var(--color-neon-cyan)] mb-2 font-mono">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-cyber-gray)] border-2 border-[var(--color-neon-cyan)]/50 rounded-lg focus:border-[var(--color-neon-pink)] focus:outline-none transition-colors text-white font-mono"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-[var(--color-neon-cyan)] mb-2 font-mono">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-cyber-gray)] border-2 border-[var(--color-neon-cyan)]/50 rounded-lg focus:border-[var(--color-neon-pink)] focus:outline-none transition-colors text-white font-mono"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-[var(--color-neon-cyan)] mb-2 font-mono">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-cyber-gray)] border-2 border-[var(--color-neon-cyan)]/50 rounded-lg focus:border-[var(--color-neon-pink)] focus:outline-none transition-colors text-white font-mono resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <NeonButton type="submit" variant="primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <>
                  <Icon icon="eos-icons:loading" className="inline mr-2" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </NeonButton>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-[var(--color-neon-cyan)]/10 border border-[var(--color-neon-cyan)] rounded-lg text-center"
            >
              <Icon icon="mdi:check-circle" className="inline text-2xl text-[var(--color-neon-cyan)] mr-2" />
              <span className="text-[var(--color-neon-cyan)] font-mono">
                Message sent successfully!
              </span>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-[var(--color-neon-pink)]/10 border border-[var(--color-neon-pink)] rounded-lg text-center"
            >
              <Icon icon="mdi:alert-circle" className="inline text-2xl text-[var(--color-neon-pink)] mr-2" />
              <span className="text-[var(--color-neon-pink)] font-mono">
                Failed to send. Please try again.
              </span>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
