import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const nav = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-surface">
      <div className="container-page section-pad !py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-heading text-xl font-semibold text-ink">
              Blaise Muhune
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full stack developer building fast, accessible web products with
              Next.js, React, and TypeScript.
            </p>
          </div>

          <div>
            <p className="label-mono">Navigate</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono">Connect</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:blaisemu007@gmail.com"
                  className="link-accent inline-flex items-center gap-2 text-sm"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Blaise-Muhune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent inline-flex items-center gap-2 text-sm"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/blaise-muhune-bbb81a242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent inline-flex items-center gap-2 text-sm"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t-2 border-border pt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <p>git status — clean · next@15 · typescript</p>
          <p>© {new Date().getFullYear()} Blaise Muhune</p>
        </div>
      </div>
    </footer>
  );
}
