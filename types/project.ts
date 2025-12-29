export interface Project {
  id: number;
  name: string;
  title: string;
  description: string;
  thumbnail?: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  stars?: number;
}
