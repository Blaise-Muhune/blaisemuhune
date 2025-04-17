import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Get in touch and let&apos;s discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <a
                      href="mailto:contact@blaisemuhune.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      contact@blaisemuhune.com
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Remote - Available Worldwide
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 