import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import HeroPortrait from '@/components/ui/HeroPortrait';

const socialLinks = [
  {
    href: 'https://github.com/Blaise-Muhune',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/blaise-muhune-bbb81a242/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://x.com/blaisemuhune_',
    label: 'X',
    icon: null,
  },
];

export default function Hero() {
  return (
    <section className="section-pad border-b-2 border-border">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-accent">~/</span>blaisemuhune
              <span className="mx-2 text-border" aria-hidden="true">
                ·
              </span>
              full stack developer
            </p>
            <h1 className="heading-display mt-4">
              I build web products that feel fast, clear, and intentional.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Hi, I&apos;m Blaise Muhune. I ship modern applications with
              Next.js, React, and TypeScript — from MVPs to production systems
              with AI integration and solid UX.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/projects" className="btn-primary">
                View selected work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/#contact" className="btn-secondary">
                Get in touch
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-4">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-2 border-2 border-border px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-200 hover:border-ink hover:text-ink"
                  >
                    {link.icon ? (
                      <link.icon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <span className="font-heading text-sm font-semibold">
                        X
                      </span>
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:justify-self-end">
            <p className="label-mono mb-3 hidden lg:block">Fig. 01 — Portrait</p>
            <div className="absolute -right-3 -top-3 h-full w-full border-2 border-ink bg-accent lg:top-6" />
            <HeroPortrait />
            <p className="mt-4 max-w-md font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Remote · Available worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
