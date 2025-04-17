import { Code, Database, Cpu, Layout, Zap, Settings } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like Next.js, React, and TypeScript.',
    icon: Code,
  },
  {
    title: 'Database Design',
    description: 'Efficient database architecture and implementation using Firebase, Prisma, and other modern solutions.',
    icon: Database,
  },
  {
    title: 'AI Integration',
    description: 'Seamless integration of AI capabilities into your applications using OpenAI and other AI services.',
    icon: Cpu,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience and engagement.',
    icon: Layout,
  },
  {
    title: 'Performance Optimization',
    description: 'Optimized applications for speed, scalability, and better user experience.',
    icon: Zap,
  },
  {
    title: 'API Development',
    description: 'Robust and secure API development for seamless integration with other services.',
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 sm:text-4xl">
            Services I Offer
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development services tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 