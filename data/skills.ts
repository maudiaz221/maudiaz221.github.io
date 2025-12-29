export interface Skill {
  id: number;
  name: string;
  icon: string; // Iconify icon name
  category: 'language' | 'framework' | 'tool' | 'database';
}

export const skills: Skill[] = [
  // Languages
  { id: 1, name: 'Python', icon: 'teenyicons:python-outline', category: 'language' },
  { id: 2, name: 'TypeScript', icon: 'mdi:language-typescript', category: 'language' },
  { id: 3, name: 'Java', icon: 'bxl:java', category: 'language' },
  { id: 4, name: 'R', icon: 'simple-icons:r', category: 'language' },
  { id: 5, name: 'SQL', icon: 'devicon:sqldeveloper', category: 'language' },
  { id: 6, name: 'Bash', icon: 'devicon-plain:bash', category: 'language' },

  // Frameworks & Libraries
  { id: 7, name: 'Next.js', icon: 'akar-icons:nextjs-fill', category: 'framework' },
  { id: 8, name: 'React', icon: 'mdi:react', category: 'framework' },
  { id: 9, name: 'TensorFlow', icon: 'simple-icons:tensorflow', category: 'framework' },
  { id: 10, name: 'FastAPI', icon: 'simple-icons:fastapi', category: 'framework' },
  { id: 11, name: 'Prisma', icon: 'simple-icons:prisma', category: 'framework' },
  { id: 12, name: 'PyTorch', icon: 'simple-icons:pytorch', category: 'framework' },

  // Tools
  { id: 13, name: 'Docker', icon: 'mdi:docker', category: 'tool' },
  { id: 14, name: 'Git', icon: 'bi:git', category: 'tool' },
  { id: 15, name: 'GitHub', icon: 'fa6-brands:square-github', category: 'tool' },
  { id: 16, name: 'VS Code', icon: 'devicon:vscode', category: 'tool' },

  // Databases
  { id: 17, name: 'PostgreSQL', icon: 'simple-icons:postgresql', category: 'database' },
  { id: 18, name: 'MongoDB', icon: 'simple-icons:mongodb', category: 'database' },
];
