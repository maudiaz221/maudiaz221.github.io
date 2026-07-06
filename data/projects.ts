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
    repoName: 'MCPX',
    title: 'MCPX',
    description: 'Adaptive MCP optimization proxy that sits between any MCP client and server. Three composable layers cut token usage by up to 98% without changing your tools.',
    thumbnail: '/image.png',
    tech: ['Python', 'MCP', 'AI Agents', 'LLMs', 'Open Source'],
    featured: true,
    demoUrl: 'https://mcpx.click/',
  },
  {
    repoName: 'streaming-RL-bot-finance',
    title: 'Streaming Finance Bot',
    description: 'Architecture for streaming data and generating predictions for ML Model',
    thumbnail: '/images/projects/bot.png',
    tech: ['Pyspark', 'Docker', 'EC2','NextJS','Machine Learning'],
    featured: true,
  },
];

// Mapping of existing project images (migrated from old portfolio)
export const projectImages: Record<string, string> = {
  alienInvasionAI: '/images/projects/ship.bmp',
  Domino: '/images/projects/domino.png',
  'Market-Analysis-Google-Reviews': '/images/projects/google_reviews.jpeg',
};
