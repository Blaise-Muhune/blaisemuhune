import { ArrowUpRight, Github } from 'lucide-react';
import type { PortfolioProject } from '@/data/projects';

export default function ProjectCard({
  title,
  description,
  link,
  repo,
  technologies,
}: PortfolioProject) {
  return (
    <article className="card-surface group flex h-full flex-col p-6 transition-colors duration-200 hover:border-ink md:p-8">
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-heading text-2xl font-semibold text-ink">{title}</h2>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden="true"
        />
      </div>

      <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
        {description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View live site
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        {repo ? (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
