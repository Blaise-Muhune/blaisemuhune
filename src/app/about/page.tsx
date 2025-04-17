import { Github, Linkedin, Mail, Phone, Code, Layout, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get to know more about my background, skills, and what drives me as a developer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="p-2 bg-blue-100/80 dark:bg-blue-900/20 rounded-lg mr-3 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              Education
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500/80 pl-4 group-hover:border-purple-500/80 transition-colors duration-300">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Andrews University
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Graduated with honors
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="p-2 bg-blue-100/80 dark:bg-blue-900/20 rounded-lg mr-3 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              Experience
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500/80 pl-4 group-hover:border-purple-500/80 transition-colors duration-300">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Full Stack Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building modern web applications with a focus on user experience and performance.
                  Passionate about creating efficient, scalable, and maintainable solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="p-2 bg-blue-100/80 dark:bg-blue-900/20 rounded-lg mr-3 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 dark:text-white">Frontend</h3>
                <ul className="space-y-1">
                  {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'].map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-400 flex items-center group/item">
                      <span className="w-2 h-2 bg-blue-500/80 rounded-full mr-2 group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 dark:text-white">Backend</h3>
                <ul className="space-y-1">
                  {['Node.js', 'Express', 'Prisma', 'Firebase', 'RESTful APIs'].map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-400 flex items-center group/item">
                      <span className="w-2 h-2 bg-blue-500/80 rounded-full mr-2 group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="p-2 bg-blue-100/80 dark:bg-blue-900/20 rounded-lg mr-3 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              Contact Information
            </h2>
            <div className="space-y-4">
              <a
                href="mailto:blaisemu007@gmail.com"
                className="group/link flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-3" />
                <span>blaisemu007@gmail.com</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
              </a>
              <a
                href="tel:+12698618708"
                className="group/link flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-3" />
                <span>(269) 861-8708</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/blaise-muhune-bbb81a242/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                <span>LinkedIn Profile</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
              </a>
              <a
                href="https://github.com/Blaise-Muhune"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5 mr-3" />
                <span>GitHub Profile</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>

          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="p-2 bg-blue-100/80 dark:bg-blue-900/20 rounded-lg mr-3 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              Personal Interests
            </h2>
            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-300">
              When I&apos;m not coding, I enjoy playing soccer and spending time at the gym to stay active and maintain a healthy lifestyle. I also like exploring new technologies and staying up-to-date with the latest trends in web development. I&apos;m passionate about mentoring and helping others learn programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 