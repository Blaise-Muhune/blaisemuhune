import { portfolioProjects } from '@/data/projects';

export default function ProjectMarquee() {
  const names = portfolioProjects.map((p) => p.title);
  const track = [...names, ...names];

  return (
    <section
      className="border-b-2 border-border bg-muted/30 py-3"
      aria-label="Products in development"
    >
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track flex w-max gap-8 motion-reduce:animate-none">
          {track.map((name, index) => (
            <li
              key={`${name}-${index}`}
              className="flex shrink-0 items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              <span>{name}</span>
              <span className="text-accent" aria-hidden="true">
                {'·'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
