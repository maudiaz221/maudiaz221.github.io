export interface ProjectMetadata {
  repoName: string;
  title: string;
  description: string;
  thumbnail?: string;
  tech: string[];
  featured: boolean;
  demoUrl?: string;
}

export const projectsMetadata: ProjectMetadata[] = [
  {
    repoName: 'encore_prisma_db',
    title: 'Encore Prisma Database',
    description: 'Backend service built with Encore framework and Prisma ORM for scalable database management on EC2',
    thumbnail: '/images/projects/encore.png',
    tech: ['TypeScript', 'Prisma', 'PostgreSQL', 'Encore', 'AWS EC2'],
    featured: true,
  },
  {
    repoName: 'tarea2MGE',
    title: 'Full-Stack ML Application',
    description: 'End-to-end machine learning application with deployment pipeline and model serving',
    thumbnail: '/images/projects/ml-app.png',
    tech: ['Python', 'Machine Learning', 'React', 'FastAPI', 'Docker'],
    featured: true,
  },
  {
    repoName: 'DayTradingBot',
    title: 'Day Trading Bot',
    description: 'Automated trading bot with real-time market analysis and algorithmic trading strategies',
    thumbnail: '/images/projects/trading.png',
    tech: ['Python', 'Pandas', 'APIs', 'Finance', 'Algorithms'],
    featured: true,
  },
  {
    repoName: 'arbitrageBot',
    title: 'Streaming RL Finance Bot',
    description: 'Reinforcement learning bot for real-time financial arbitrage opportunities',
    thumbnail: '/images/projects/arbitrage.png',
    tech: ['Python', 'Reinforcement Learning', 'Real-time Processing', 'Finance'],
    featured: true,
  },
];

// Mapping of existing project images (migrated from old portfolio)
export const projectImages: Record<string, string> = {
  alienInvasionAI: '/images/projects/ship.bmp',
  Domino: '/images/projects/domino.png',
  'Market-Analysis-Google-Reviews': '/images/projects/google_reviews.jpeg',
};
