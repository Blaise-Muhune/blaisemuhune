import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const offerings = [
  {
    title: 'Product builds',
    detail: 'MVPs through production — Next.js, auth, payments, and deploy.',
  },
  {
    title: 'AI integration',
    detail: 'OpenAI and API workflows that fit real user jobs, not demos.',
  },
  {
    title: 'Consulting',
    detail: 'Architecture review, scope, and hands-on pairing when you need senior help.',
  },
];

export default function WorkWithMe() {
  return (
    <section className="section-pad bg-muted/40">
      <div className="container-page">
        <SectionHeading
          label="Collaborate"
          title="Work with me"
          description="I take on a small number of freelance and consulting engagements alongside my own products."
        />

        <ul className="mt-10 grid gap-px border-2 border-border bg-border md:grid-cols-3">
          {offerings.map((item) => (
            <li key={item.title} className="bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="btn-secondary mt-8 inline-flex"
        >
          Discuss a project
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
