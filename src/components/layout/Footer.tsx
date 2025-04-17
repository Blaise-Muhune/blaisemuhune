import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const services = [
  'Web Application Development',
  'AI Integration',
  'API Development',
  'Database Design',
  'UI/UX Implementation',
  'Performance Optimization',
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/blaisemuhune',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/blaisemuhune',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/blaisemuhune',
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-600 dark:text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:blaisemu007@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  blaisemu007@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5" />
                <a href="tel:+12698618708" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  (269) 861-8708
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Remote - Available Worldwide</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-800/50">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Blaise Muhune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 