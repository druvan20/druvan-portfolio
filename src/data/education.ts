export type EducationItem = {
  id: string
  level: string
  shortLevel: string
  institution: string
  score: string
  year: string
  focus: string
  highlights: string[]
  accent: string
}

export const education: EducationItem[] = [
  {
    id: 'be',
    level: 'B.E. CSE (AI/ML)',
    shortLevel: 'UNDERGRAD',
    institution: 'Vidyavardhaka College of Engineering, Mysore',
    score: '9.5 CGPA',
    year: '2022–2026',
    focus: 'AI · ML · Systems',
    highlights: [
      'Specialization in Artificial Intelligence & Machine Learning',
      'Strong foundation in algorithms, data structures, and software engineering',
      'Built projects spanning GenAI, backend systems, and full-stack apps',
    ],
    accent: '#FF4655',
  },
  {
    id: 'puc',
    level: 'PUC (PCMB)',
    shortLevel: 'PRE-UNIVERSITY',
    institution: 'Marimallapa PU College',
    score: '80%',
    year: '—',
    focus: 'Science · PCMB',
    highlights: [
      'Physics, Chemistry, Mathematics, Biology track',
      'Prepared the base for engineering entrance & STEM depth',
    ],
    accent: '#5CE1E6',
  },
  {
    id: 'sslc',
    level: 'SSLC',
    shortLevel: 'SECONDARY',
    institution: 'Marimallapa High School',
    score: '97%',
    year: '—',
    focus: 'Academic excellence',
    highlights: [
      'High board performance with consistent academic discipline',
      'Early interest in technology and problem solving',
    ],
    accent: '#FFB547',
  },
]
