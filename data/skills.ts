export interface Skill {
  id: number;
  name: string;
  icon: string; // Iconify icon name
  category: 'language' | 'framework' | 'aws';
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
  { id: 9, name: 'Strands Agents', icon: 'mdi:robot', category: 'framework' },
  { id: 10, name: 'FastAPI', icon: 'simple-icons:fastapi', category: 'framework' },
  { id: 11, name: 'LangGraph', icon: 'simple-icons:langchain', category: 'framework' },
  { id: 12, name: 'Docker', icon: 'mdi:docker', category: 'framework' },

  // AWS Services
  { id: 13, name: 'Lambda', icon: 'logos:aws-lambda', category: 'aws' },
  { id: 14, name: 'ECS', icon: 'logos:aws-ecs', category: 'aws' },
  { id: 15, name: 'EC2', icon: 'logos:aws-ec2', category: 'aws' },
  { id: 16, name: 'VPC', icon: 'logos:aws-vpc', category: 'aws' },
  { id: 17, name: 'Step Functions', icon: 'logos:aws-step-functions', category: 'aws' },
  { id: 18, name: 'DynamoDB', icon: 'logos:aws-dynamodb', category: 'aws' },
  { id: 19, name: 'Route 53', icon: 'logos:aws-route53', category: 'aws' },
  { id: 20, name: 'S3', icon: 'logos:aws-s3', category: 'aws' },
  { id: 21, name: 'Bedrock Agent Core', icon: 'simple-icons:amazonwebservices', category: 'aws' },
  { id: 22, name: 'Glue', icon: 'logos:aws-glue', category: 'aws' },
];
