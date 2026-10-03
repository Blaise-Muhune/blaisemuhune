import { ArrowUpRight, Github } from 'lucide-react';
import type { PortfolioProject } from '@/data/projects';

type ProjectIndexRowProps = PortfolioProject & {
  index: number;
};

export default function ProjectIndexRow({
  index,
  title,
  description,
  link,
  repo,
  technologies,
}: ProjectIndexRowProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="group border-b-2 border-border py-8 first:border-t-2 transition-colors duration-200 hover:bg-muted/20">
      <div className="container-page grid gap-6 md:grid-cols-[4rem_1fr_auto] md:items-start">
        <p className="font-mono text-sm text-accent">{num}</p>

        <div>
          <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {technologies.slice(0, 5).map((tech) => (
              <li
                key={tech}
                className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row flex-wrap gap-2 md:flex-col md:items-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary whitespace-nowrap text-xs md:text-sm"
          >
            <span className="hidden sm:inline">open --live</span>
            <span className="sm:hidden">Live</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 border-2 border-transparent px-2 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-border hover:text-ink"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
