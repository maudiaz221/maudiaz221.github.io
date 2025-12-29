'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';

const navItems = [
  { name: 'Home', href: '#hero', key: 'nav.home' },
  { name: 'About', href: '#about', key: 'nav.about' },
  { name: 'Experience', href: '#experience', key: 'nav.experience' },
  { name: 'Projects', href: '#projects', key: 'nav.projects' },
  { name: 'Skills', href: '#skills', key: 'nav.skills' },
  { name: 'Contact', href: '#contact', key: 'nav.contact' },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToElement(href.slice(1), 80);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-cyber-dark)]/90 backdrop-blur-md shadow-[var(--shadow-neon-pink)]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-24 max-w-[1920px] mx-auto">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleClick(e, '#hero')}
              className="text-3xl font-[family-name:var(--font-cyber)] font-bold"
            >
              <span className="neon-text">MD</span>
            </a>
          </div>

          {/* Desktop Navigation - Center with more spacing */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative font-mono text-lg transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-[var(--color-neon-pink)]'
                    : 'text-gray-300 hover:text-[var(--color-neon-cyan)]'
                }`}
              >
                {t(item.key)}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-neon-pink)] shadow-[var(--shadow-neon-pink)]"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Language Toggle - Far Right */}
          <div className="hidden md:flex items-center flex-shrink-0 gap-2">
            <button
              onClick={() => setLanguage('en')}
              className={`font-mono text-base transition-colors ${
                language === 'en'
                  ? 'text-[var(--color-neon-pink)] font-bold'
                  : 'text-gray-400 hover:text-[var(--color-neon-cyan)]'
              }`}
            >
              EN
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => setLanguage('es')}
              className={`font-mono text-base transition-colors ${
                language === 'es'
                  ? 'text-[var(--color-neon-pink)] font-bold'
                  : 'text-gray-400 hover:text-[var(--color-neon-cyan)]'
              }`}
            >
              ES
            </button>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="md:hidden flex items-center justify-self-end gap-4">
            {/* Language Toggle Mobile */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`font-mono text-xs transition-colors ${
                  language === 'en'
                    ? 'text-[var(--color-neon-pink)] font-bold'
                    : 'text-gray-400'
                }`}
              >
                EN
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setLanguage('es')}
                className={`font-mono text-xs transition-colors ${
                  language === 'es'
                    ? 'text-[var(--color-neon-pink)] font-bold'
                    : 'text-gray-400'
                }`}
              >
                ES
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--color-neon-cyan)] text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block py-2 font-mono text-sm ${
                  activeSection === item.href.slice(1)
                    ? 'text-[var(--color-neon-pink)]'
                    : 'text-gray-300'
                }`}
              >
                {t(item.key)}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
