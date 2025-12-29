export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

// TODO: Update with your actual experience from CV
export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer', // Update this
    company: 'Company Name', // Update this
    location: 'City, Country', // Update this
    period: 'Jan 2023 - Present', // Update this
    description: [
      'Developed full-stack applications using TypeScript and Next.js',
      'Implemented machine learning models for financial analysis',
      'Built automated trading systems with real-time data processing',
    ],
    tech: ['TypeScript', 'Python', 'Next.js', 'TensorFlow'],
  },
  {
    id: 2,
    title: 'ML Engineer Intern', // Update this
    company: 'Another Company', // Update this
    location: 'City, Country', // Update this
    period: 'Jun 2022 - Dec 2022', // Update this
    description: [
      'Designed and implemented reinforcement learning algorithms',
      'Worked on data pipelines for large-scale ML training',
      'Collaborated with cross-functional teams on product features',
    ],
    tech: ['Python', 'PyTorch', 'Docker', 'PostgreSQL'],
  },
];
