import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Skills from '@/components/sections/Skills';

export default function AboutPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          label="About"
          title="Developer, problem-solver, teammate"
          description="Story and stack live here. For products and links, go to projects; to hire me, use contact at the bottom of the home page."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="card-surface p-6 md:p-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Background
            </h2>
            <div className="mt-6 space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold text-ink">
                  Andrews University
                </h3>
                <p className="mt-2 text-muted-foreground">
                  B.S. Computer Science — graduated with honors
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-ink">
                  How I build
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  I ship modern web applications with an emphasis on performance,
                  accessibility, and maintainable architecture. I run my own
                  products (BilloAI, Digilaine, and others) and take selective
                  client work when the fit is right.
                </p>
              </div>
            </div>
          </section>

          <section className="card-surface p-6 md:p-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Beyond the keyboard
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Soccer and gym keep me grounded. I follow new tooling thoughtfully,
              mentor when I can, and prefer shipping small, tested improvements over
              big-bang rewrites.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="btn-primary inline-flex">
                See my work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/#contact" className="btn-secondary inline-flex">
                Get in touch
              </Link>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-16 border-t-2 border-border">
        <Skills />
      </div>
    </div>
  );
}
