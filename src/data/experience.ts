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

export const experience = {
  company: 'Hashedin by Deloitte',
  program: 'HashedIn University · HU Spark',
  title: 'Trainee Engineer (SDE1)',
  period: 'May 27, 2026 – Present',
  phase: 'Training Phase',
  location: 'Bengaluru',
  summary:
    'Immersive HashedIn University (HU Spark) boot camp — product-first engineering across AI, cloud-native stacks, and full-stack delivery before project deployment.',
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
      detail: 'Hands-on lanes: GenAI/Python, Java Spring Boot, Angular, and .NET ecosystems.',
    },
    {
      id: 'product',
      step: '04',
      title: 'Product Month',
      detail: 'Team build of an end-to-end product — ideate, ship, demo at Product Expo.',
    },
    {
      id: 'deploy',
      step: '05',
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
    'Enterprise patterns: microservices, JWT, OWASP, OAuth',
    'Collaborative track work across full-stack + GenAI',
  ],
} as const
