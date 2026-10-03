export type PortfolioProject = {
  title: string;
  description: string;
  link: string;
  repo?: string;
  technologies: string[];
};

/** Shown on the home page; full list lives on /projects. */
export const featuredProjectTitles = [
  'BilloAI',
  'Digilaine',
  'Karouselmaker',
] as const;

export function getFeaturedProjects(): PortfolioProject[] {
  return featuredProjectTitles
    .map((title) => portfolioProjects.find((p) => p.title === title))
    .filter((p): p is PortfolioProject => Boolean(p));
}

/**
 * Repos that exist both on GitHub (Blaise-Muhune) and locally under
 * `~/OneDrive/Documentos/GitHub/`. Excludes this portfolio (`blaisemuhune`).
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'R.AI.SUME',
    description:
      'Match and improve your resume for a specific job description with AI scoring, preview, and PDF export.',
    link: 'https://ai-resume-match-omega.vercel.app',
    repo: 'https://github.com/Blaise-Muhune/AI-Resume-Match',
    technologies: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: 'BilloAI',
    description:
      'After you network, know who from the room is worth staying connected to.',
    link: 'https://billoai.com',
    repo: 'https://github.com/Blaise-Muhune/BilloAI',
    technologies: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Stripe',
      'OpenAI',
      'Azure',
    ],
  },
  {
    title: 'CareerLockin',
    description:
      'Tech career roadmaps and progress tracking — know what to do next from your target role and weekly hours.',
    link: 'https://careerlockin.com',
    repo: 'https://github.com/Blaise-Muhune/careerlockin',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI'],
  },
  {
    title: 'Digilaine',
    description:
      'Turn ideas into digital products and sales pages — secure checkout, instant delivery, and Stripe payouts for creators.',
    link: 'https://digilaine.com',
    repo: 'https://github.com/Blaise-Muhune/digilaine',
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Stripe',
      'OpenAI',
    ],
  },
  {
    title: 'Sip & Spill',
    description:
      'Same-night party game — host on one phone, everyone joins, vote, then look up. 18+.',
    link: 'https://sipandspill.app',
    repo: 'https://github.com/Blaise-Muhune/girls-night',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Stripe'],
  },
  {
    title: 'Karouselmaker',
    description:
      'Organic Instagram and TikTok carousels for your product — generate, lightly edit, and export swipe posts without sounding like ads.',
    link: 'https://karouselmaker.com',
    repo: 'https://github.com/Blaise-Muhune/karouselmaker',
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Stripe',
      'OpenAI',
    ],
  },
  {
    title: 'Shipnaro',
    description:
      'A versioned build plan your coding agent can follow — you review evidence and approve the work.',
    link: 'https://shipnaro.vercel.app',
    repo: 'https://github.com/Blaise-Muhune/shipnaro',
    technologies: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Stripe',
      'MCP',
    ],
  },
  {
    title: 'TrendMorphs',
    description:
      'Studio-quality birthday, baby shower, and graduation photos in minutes — upload, pick a look, generate.',
    link: 'https://trend-morph-three.vercel.app',
    repo: 'https://github.com/Blaise-Muhune/TrendMorph',
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Stripe',
      'OpenAI',
      'Azure',
    ],
  },
];
