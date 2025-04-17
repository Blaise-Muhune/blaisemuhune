import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="https://github.com/Blaise-Muhune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/blaise-muhune-bbb81a242/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:blaisemu007@gmail.com"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <Mail size={20} />
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Blaise Muhune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 