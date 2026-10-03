import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  {
    title: 'Web development',
    description:
      'Custom apps with Next.js, React, and TypeScript — structured for growth and maintainability.',
  },
  {
    title: 'AI integration',
    description:
      'Practical OpenAI and API integrations that solve real workflow problems, not demo fluff.',
  },
  {
    title: 'API & data',
    description:
      'RESTful APIs, Firebase, and Prisma-backed data layers designed for clarity and security.',
  },
  {
    title: 'UI implementation',
    description:
      'Accessible, responsive interfaces with attention to typography, spacing, and motion.',
  },
  {
    title: 'Performance',
    description:
      'Core Web Vitals, bundle discipline, and profiling when speed becomes a product feature.',
  },
  {
    title: 'Consulting',
    description:
      'Architecture reviews, MVP scoping, and hands-on help when your team needs a senior pair.',
  },
];

export default function Services() {
  return (
    <section className="section-pad bg-muted/40">
      <div className="container-page">
        <SectionHeading
          label="Services"
          title="What I can help you ship"
          description="End-to-end delivery or targeted support — scoped to your timeline and budget."
        />

        <div className="mt-12 grid gap-px border-2 border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="bg-card p-6 transition-colors duration-200 hover:bg-surface"
            >
              <p className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
