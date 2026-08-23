export type TrainPhase = {
  id: string
  step: string
  title: string
  detail: string
}

export type TechTrack = {
  id: string
  name: string
  stack: string[]
  focus: string
}

export type PriorRole = {
  id: string
  org: string
  title: string
  period: string
  mode: string
  summary: string
  highlights: string[]
}

/** Current role — HashedIn University */
export const experience = {
  company: 'Hashedin by Deloitte',
  program: 'HashedIn University · HU Spark',
  title: 'Trainee Engineer (SDE1)',
  period: 'May 27, 2026 – Present',
  phase: 'Training Phase',
  location: 'Bengaluru',
  summary:
    'Immersive HashedIn University (HU Spark) boot camp — product-first engineering across AI, cloud-native stacks, AIDLC, and full-stack delivery before project deployment.',
  phases: [
    {
      id: 'onboard',
      step: '01',
      title: 'Onboarding',
      detail: 'Linker induction, tooling setup, engineering culture & product mindset.',
    },
    {
      id: 'fundamentals',
      step: '02',
      title: 'Engineering Core',
      detail: 'DSA, system design basics, clean code, Git workflows, and cloud-native habits.',
    },
    {
      id: 'tracks',
      step: '03',
      title: 'Tech Tracks',
      detail:
        'Hands-on lanes: GenAI/Python, Prompt Engineering, AIDLC, Advanced DE + AIML, Java, Angular, .NET.',
    },
    {
      id: 'product',
      step: '04',
      title: 'Product Month',
      detail: 'Team build of an end-to-end product — ideate, ship, demo at Product Expo.',
    },
    {
      id: 'hu4',
      step: '05',
      title: 'Extended HU4',
      detail:
        'Extra depth tracks: Prompt Engineering (tokens & prompts), AIDLC (docs → stories → E2E), Adv. DE + AIML (ML/DL/NLP + case studies).',
    },
    {
      id: 'deploy',
      step: '06',
      title: 'Deploy Ready',
      detail: 'Transition toward SDE delivery with mentorship, reviews, and enterprise patterns.',
    },
  ] satisfies TrainPhase[],
  tracks: [
    {
      id: 'genai',
      name: 'Python + GenAI',
      stack: ['Python', 'LangChain', 'RAG', 'FastAPI'],
      focus: 'Agentic workflows & LLM apps',
    },
    {
      id: 'prompt',
      name: 'Prompt Engineering',
      stack: ['Prompt Design', 'Token Usage', 'Few-shot', 'Evaluation'],
      focus: 'Token-efficient prompting, structured prompts, and related LLM craft',
    },
    {
      id: 'aidlc',
      name: 'AIDLC',
      stack: ['Docs → Spec', 'Story Dev', 'E2E Build', 'Agent Assist'],
      focus:
        'AI-augmented SDLC — from requirements documents to scratch builds, stories, and E2E product delivery',
    },
    {
      id: 'aiml-de',
      name: 'Adv. DE + AIML',
      stack: ['ML', 'DL', 'NLP Basics', 'Case Studies'],
      focus:
        'AIML foundations plus DE with AI — retail forecasting & e-commerce NLP case studies',
    },
    {
      id: 'java',
      name: 'Java Spring',
      stack: ['Java 17', 'Spring Boot', 'REST', 'Security'],
      focus: 'Backend services & APIs',
    },
    {
      id: 'angular',
      name: 'Angular',
      stack: ['Angular 20', 'RxJS', 'NgRx', 'TypeScript'],
      focus: 'Reactive frontend systems',
    },
    {
      id: 'dotnet',
      name: '.NET',
      stack: ['.NET 8', 'C#', 'EF Core', 'JWT'],
      focus: 'Enterprise backend patterns',
    },
  ] satisfies TechTrack[],
  highlights: [
    'Product-first thinking with mentor-led reviews',
    'AIDLC + prompt engineering layered on classic SDLC',
    'Enterprise patterns: microservices, JWT, OWASP, OAuth',
    'Collaborative track work across full-stack, GenAI, and AIML/DE',
  ],
} as const

/** Prior internships + teaching — from earlier resume (no club fluff / certs) */
export const priorExperience: PriorRole[] = [
  {
    id: 'internleap',
    org: 'InternLeap',
    title: 'Python Development Intern',
    period: 'Oct 2023 · 1 month',
    mode: 'Remote',
    summary:
      'Core Python development with a hands-on ML project for car sales analysis.',
    highlights: [
      'Built ML workflows with scikit-learn, pandas, and NumPy',
      'Applied Python for data cleaning, feature prep, and model training',
    ],
  },
  {
    id: 'ibm-skillsbuild',
    org: 'IBM SkillsBuild',
    title: 'Data Analysis & Frontend Development Intern',
    period: '6 weeks',
    mode: 'Remote',
    summary:
      'Team of 8 delivering a job portal with frontend integration and retail sales analysis.',
    highlights: [
      'Collaborated on full-stack Job Portal (auth, roles, application flows)',
      'Contributed to retail sales analysis for store insights',
    ],
  },
  {
    id: 'peer-tutor',
    org: 'Peer Tutor',
    title: 'DSA & Java Mentor',
    period: 'July 2024 – Present',
    mode: 'Campus',
    summary: 'Teaching Data Structures & Algorithms and Java to peers.',
    highlights: [
      'Guided problem-solving and core Java fundamentals',
      'Reinforced DSA patterns through structured practice',
    ],
  },
]
