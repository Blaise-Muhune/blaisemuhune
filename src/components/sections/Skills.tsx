import { Code, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
      icon: Code,
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Prisma', 'Firebase', 'RESTful APIs'],
      icon: Database,
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'CI/CD', 'UI/UX Design', 'Testing'],
      icon: Wrench,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-600 dark:text-gray-400 flex items-center group/item"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 