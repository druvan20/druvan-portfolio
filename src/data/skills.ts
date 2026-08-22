export type SkillGroup = {
  id: string
  title: string
  blurb: string
  tier: 'Core' | 'Strong' | 'Growing'
  accent: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'genai',
    title: 'GenAI & Agents',
    blurb: 'Agentic systems, RAG pipelines, prompt craft, and AIDLC delivery.',
    tier: 'Core',
    accent: '#FF4655',
    skills: [
      'Python',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'RAG',
      'Prompt Engineering',
      'Token Optimization',
      'AIDLC',
      'Agentic AI',
      'Deep Agents',
      'MCP',
      'MLflow',
      'GenAI',
    ],
  },
  {
    id: 'aiml',
    title: 'AIML',
    blurb: 'Core ML/DL/NLP foundations with applied case studies.',
    tier: 'Strong',
    accent: '#FF8A3C',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP Basics',
      'Retail Sales Forecasting',
      "Women's E-Commerce Reviews",
      'Feature Engineering',
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    blurb: 'Pipelines, vector search, Databricks, and GenAI-in-DE workflows.',
    tier: 'Strong',
    accent: '#FFB547',
    skills: [
      'PySpark',
      'SQL',
      'Databricks',
      'Vector Search',
      'Lakeflow Jobs',
      'GenAI in DE',
      'GCP',
    ],
  },
  {
    id: 'java',
    title: 'Java & Backend',
    blurb: 'Service design, APIs, and Spring ecosystem delivery.',
    tier: 'Strong',
    accent: '#4DA3FF',
    skills: ['Java 8/17', 'Spring Boot', 'Microservices', 'REST APIs'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    blurb: 'Reactive UIs with Angular/React and modern tooling.',
    tier: 'Strong',
    accent: '#5CE1E6',
    skills: [
      'Angular 20',
      'React',
      'Vite',
      'TypeScript',
      'RxJS',
      'NgRx',
      'HTML5',
      'CSS3',
      'Responsive UI',
    ],
  },
  {
    id: 'security',
    title: 'Security & Auth',
    blurb: 'AuthN/Z patterns and secure API defaults.',
    tier: 'Growing',
    accent: '#9B7BFF',
    skills: ['JWT', 'OAuth', 'OWASP', 'RBAC'],
  },
  {
    id: 'others',
    title: 'Others',
    blurb: 'Tooling and adjacent stacks from training missions.',
    tier: 'Growing',
    accent: '#7DFFB3',
    skills: [
      '.NET Basics',
      'C#',
      'Git',
      'GitHub',
      'Swagger',
      'WebSockets',
      'SSE',
      'Docker Basics',
    ],
  },
]
