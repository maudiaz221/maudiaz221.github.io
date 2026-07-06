export interface Publication {
  title: string;
  venue: string;
  year: string;
  authors?: string;
  description: string;
  pdfUrl: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    title: 'Token Aware Agentic AI',
    venue: 'Springer — COMIA',
    year: '2026',
    description:
      'Research on token-aware strategies for agentic AI systems, exploring how context and token budgets shape the behavior and efficiency of autonomous LLM agents.',
    pdfUrl: '/Token_aware_Agentic_AI.pdf',
    tags: ['Agentic AI', 'LLMs', 'NLP', 'Research'],
  },
];
