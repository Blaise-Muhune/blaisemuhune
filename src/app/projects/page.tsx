'use client';

import ProjectCard from '@/components/ui/ProjectCard';

const projects = [
  {
    title: 'AI Resume Match',
    description: 'An AI-powered resume generation platform with PDF export capabilities, built with Next.js and OpenAI integration.',
    link: 'https://ai-resume-match-omega.vercel.app/',
    technologies: ['Next.js', 'OpenAI', 'Firebase', 'TypeScript'],
  },
  {
    title: 'BilloAI',
    description: 'A premium subscription system with real-time data synchronization and modern UI/UX.',
    link: 'https://www.billoai.com/',
    technologies: ['Vue.js 3', 'TypeScript', 'Firebase'],
  },
  {
    title: 'Quizzify',
    description: 'An AI-powered quiz generation platform with RESTful API integration.',
    link: 'https://www.quizzify.app/',
    technologies: ['Next.js', 'TypeScript', 'Firebase'],
  },
  {
    title: 'On The Move Manager',
    description: 'A role-based access control system with real-time analytics dashboard.',
    link: 'https://on-the-move-manager.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Prisma'],
  },
  {
    title: 'Track-Me-Please',
    description: 'A progressive habit-building system with multi-channel notifications.',
    link: 'https://implement-routine.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Twilio'],
  },
  {
    title: 'FlashCutMaker',
    description: 'A text animation creation tool with real-time preview.',
    link: 'https://flashcutmaker.com',
    technologies: ['Next.js', 'TypeScript'],
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my portfolio of web development projects and see my skills in action
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
} 