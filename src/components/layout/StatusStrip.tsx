import { siteStatus } from '@/data/site-status';

export default function StatusStrip() {
  return (
    <div className="border-t-2 border-border bg-surface/95">
      <div className="container-page flex flex-wrap items-center gap-x-4 gap-y-1 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
        <span className="inline-flex items-center gap-2 text-ink">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent motion-safe:animate-pulse"
            aria-hidden="true"
          />
          {siteStatus.availability}
        </span>
        <span className="hidden text-border sm:inline" aria-hidden="true">
          |
        </span>
        <span>
          Building:{' '}
          <span className="text-ink">{siteStatus.focus}</span>
        </span>
        <span className="hidden text-border md:inline" aria-hidden="true">
          |
        </span>
        <span className="hidden md:inline">{siteStatus.stack}</span>
      </div>
    </div>
  );
}
