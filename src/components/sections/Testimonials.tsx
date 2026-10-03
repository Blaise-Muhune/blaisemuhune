import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    name: 'Amina Okafor',
    role: 'President, Andrews University African Club',
    projectLabel: 'Client website · student organization',
    content:
      'Blaise created a beautiful and functional website for our student club. Membership grew and event organization became much easier. He was responsive and detail-oriented throughout.',
  },
  {
    name: 'Pastor Michael Thompson',
    role: 'Senior Pastor, New Life Community Church',
    projectLabel: 'Client website · community organization',
    content:
      'We needed a modern site that reflects our community. Blaise delivered a professional experience that makes services and events easy to find.',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Content creator',
    projectLabel: 'Client website · creator portfolio',
    content:
      'I needed a portfolio that brands could trust. The site Blaise built helped me land partnerships and keeps my work easy to browse.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad border-b-2 border-border">
      <div className="container-page">
        <SectionHeading
          label="Testimonials"
          title="Client work"
          description="Organizations and creators I've built sites for — alongside my own products on the projects page."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="card-surface flex h-full flex-col p-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                {testimonial.projectLabel}
              </p>
              <p className="font-heading mt-4 text-4xl leading-none text-ink/20">
                &ldquo;
              </p>
              <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
                {testimonial.content}
              </p>
              <footer className="mt-6 border-t-2 border-border pt-4">
                <cite className="not-italic">
                  <p className="font-heading font-semibold text-ink">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {testimonial.role}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          For shipped products and repos, see{' '}
          <Link href="/projects" className="link-accent">
            all projects
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
