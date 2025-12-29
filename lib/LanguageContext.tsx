'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.tagline': 'Full-Stack Developer | ML Engineer',
    'hero.viewProjects': 'View Projects',
    'hero.getInTouch': 'Get in Touch',

    // Sections
    'section.about': 'About Me',
    'section.experience': 'Experience',
    'section.projects': 'Featured Projects',
    'section.skills': 'Skills & Frameworks',
    'section.contact': 'Get In Touch',

    // Skills
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.tools': 'Tools',
    'skills.databases': 'Databases',
    'skills.downloadResume': 'Download Resume',

    // Projects
    'projects.viewAll': 'View All Projects',

    // Contact
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send. Please try again.',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': 'Your message...',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero
    'hero.tagline': 'Desarrollador Full-Stack | Ingeniero ML',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.getInTouch': 'Contáctame',

    // Sections
    'section.about': 'Sobre Mí',
    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos Destacados',
    'section.skills': 'Habilidades y Frameworks',
    'section.contact': 'Contáctame',

    // Skills
    'skills.languages': 'Lenguajes',
    'skills.frameworks': 'Frameworks y Bibliotecas',
    'skills.tools': 'Herramientas',
    'skills.databases': 'Bases de Datos',
    'skills.downloadResume': 'Descargar CV',

    // Projects
    'projects.viewAll': 'Ver Todos los Proyectos',

    // Contact
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado con éxito!',
    'contact.error': 'Error al enviar. Por favor intenta de nuevo.',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu.correo@ejemplo.com',
    'contact.messagePlaceholder': 'Tu mensaje...',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
