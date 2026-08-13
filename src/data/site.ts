export type Agent = {
  id: string
  codename: string
  role: string
  theme: string
  src: string
  accent: string
  glow: string
  spin: number
  pulse: number
}

export const site = {
  name: 'Druvan',
  agentName: 'Druvan GN',
  fullName: 'Druvan Gurukar',
  tagline: 'TRAINEE ENGINEER | AI/ML | FULL-STACK | GEN-AI',
  oneLiner: 'Building intelligent systems at the intersection of AI and scalable software.',
  role: 'Trainee Engineer @ Hashedin by Deloitte · AI/ML · GenAI · Full-Stack',
  protocolLabel: 'PROTOCOL SELECT',
} as const

/** 10 original agents — Valorant-inspired themes, no official IP / mostly male roster */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const agents: Agent[] = [
  {
    id: 'a1',
    codename: 'ORBIT',
    role: 'Architect',
    theme: 'Protocol Core',
    src: asset('agents/agent-01.png'),
    accent: '#FF4655',
    glow: '#ff8892',
    spin: 0.22,
    pulse: 1.0,
  },
  {
    id: 'a2',
    codename: 'VECTOR',
    role: 'Operative',
    theme: 'Field Strike',
    src: asset('agents/agent-02.png'),
    accent: '#3DFFDC',
    glow: '#8affe8',
    spin: 0.35,
    pulse: 1.3,
  },
  {
    id: 'a3',
    codename: 'LUMEN',
    role: 'Strategist',
    theme: 'Signal Light',
    src: asset('agents/agent-03.png'),
    accent: '#FFB547',
    glow: '#ffd88a',
    spin: 0.18,
    pulse: 0.8,
  },
  {
    id: 'a4',
    codename: 'BLAZE',
    role: 'Duelist',
    theme: 'Ember Jacket',
    src: asset('agents/agent-04.png'),
    accent: '#FF6A3D',
    glow: '#ffb08a',
    spin: 0.4,
    pulse: 1.45,
  },
  {
    id: 'a5',
    codename: 'WRAITH',
    role: 'Controller',
    theme: 'Shadow Cloak',
    src: asset('agents/agent-05.png'),
    accent: '#9B7BFF',
    glow: '#c4b0ff',
    spin: 0.28,
    pulse: 1.1,
  },
  {
    id: 'a6',
    codename: 'HUNTER',
    role: 'Initiator',
    theme: 'Recon Cape',
    src: asset('agents/agent-06.png'),
    accent: '#4DA3FF',
    glow: '#9dceff',
    spin: 0.2,
    pulse: 0.95,
  },
  {
    id: 'a7',
    codename: 'FORGE',
    role: 'Controller',
    theme: 'Command Armor',
    src: asset('agents/agent-07.png'),
    accent: '#FF8A3C',
    glow: '#ffc08a',
    spin: 0.15,
    pulse: 0.85,
  },
  {
    id: 'a8',
    codename: 'SIGNAL',
    role: 'Sentinel',
    theme: 'White Coat',
    src: asset('agents/agent-08.png'),
    accent: '#E8E4DC',
    glow: '#ffffff',
    spin: 0.25,
    pulse: 1.05,
  },
  {
    id: 'a9',
    codename: 'UNIT',
    role: 'Initiator',
    theme: 'Steel Chassis',
    src: asset('agents/agent-09.png'),
    accent: '#5CE1FF',
    glow: '#a8f0ff',
    spin: 0.32,
    pulse: 1.2,
  },
  {
    id: 'a10',
    codename: 'ATELIER',
    role: 'Sentinel',
    theme: 'Tailored Vest',
    src: asset('agents/agent-10.png'),
    accent: '#D4AF37',
    glow: '#f0d78c',
    spin: 0.16,
    pulse: 0.7,
  },
]

export const links = {
  github: 'https://github.com/druvan20',
  linkedin: 'https://www.linkedin.com/in/druvan-gurukar/',
  email: 'druvangurukar20@gmail.com',
  resume: '#',
} as const

export const navItems = [
  { href: '#intel', label: 'About' },
  { href: '#ops', label: 'Experience' },
  { href: '#loadout', label: 'Skills' },
  { href: '#missions', label: 'Projects' },
  { href: '#training', label: 'Education' },
  { href: '#deploy', label: 'Contact' },
] as const
