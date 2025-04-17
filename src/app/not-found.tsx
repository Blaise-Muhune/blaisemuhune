import Link from 'next/link';
import { Home, ArrowLeft, Search, Coffee } from 'lucide-react';

export default function NotFound() {
  // Random funny 404 messages
  const funnyMessages = [
    "Oops! Looks like this page took a vacation without telling anyone.",
    "This page is playing hide and seek... and it's winning.",
    "Houston, we have a problem. The page you're looking for is lost in space.",
    "Well, this is awkward. The page seems to have ghosted us.",
    "404: Page not found. It probably went to get coffee.",
    "This page is like my car keys - I know it exists, but I can't find it anywhere."
  ];
  
  // Get a random message
  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          <div className="relative">
            <h1 className="text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              404
            </h1>
            <div className="absolute -top-8 -right-8 sm:right-20 transform rotate-12">
              <Coffee className="w-16 h-16 text-gray-300 dark:text-gray-700" />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Page Not Found
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              {randomMessage}
            </p>
          </div>
          
          <div className="relative py-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  className="pl-10 pr-4 py-2 w-72 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80"
                  placeholder="Search for the missing page..."
                  onClick={() => alert("Just kidding! Back to safety we go!")}
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Home className="mr-2 w-5 h-5" />
              Take Me Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Let&apos;s Back Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 