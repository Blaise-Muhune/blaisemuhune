import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden h-full">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500" />
      
      <div className="relative p-8 flex flex-col h-full">
        {/* Title with gradient effect */}
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
          {title}
        </h3>
        
        {/* Description with improved typography */}
        <p className="mt-4 text-gray-600 dark:text-gray-400 line-clamp-3 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 text-lg">
          {description}
        </p>
        
        {/* Technology tags with enhanced styling */}
        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 rounded-full group-hover:from-blue-200/80 group-hover:to-purple-200/80 dark:group-hover:from-blue-800/30 dark:group-hover:to-purple-800/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links with enhanced styling */}
        <div className="mt-auto pt-6 flex items-center gap-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
          >
            <span className="flex items-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Project
              <ArrowRight className="w-5 h-5 ml-1 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </span>
          </a>
          <a
            href="https://github.com/Blaise-Muhune"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <span className="flex items-center">
              <Github className="w-5 h-5 mr-2" />
              Source Code
              <ArrowRight className="w-5 h-5 ml-1 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
} 