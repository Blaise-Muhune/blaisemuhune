import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Amina Okafor',
    role: 'President, Andrews University African Club',
    content: 'Blaise created a beautiful and functional website for our student club. The site helped us increase membership by 40% and made event organization much easier. His attention to detail and quick response to our needs was impressive.',
    rating: 5,
  },
  {
    name: 'Pastor Michael Thompson',
    role: 'Senior Pastor, New Life Community Church',
    content: 'Our church needed a modern website to connect with our community. Blaise delivered a professional site that perfectly represents our values and makes it easy for visitors to find information about our services and events.',
    rating: 5,
  },
  {
    name: 'Alex Rodriguez',
    role: 'Social Media Influencer',
    content: 'As a content creator, I needed a portfolio that showcases my work professionally. Blaise built a stunning website that highlights my content and makes it easy for brands to contact me. The site has helped me secure multiple partnerships.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 