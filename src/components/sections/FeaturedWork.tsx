import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { getFeaturedProjects } from '@/data/projects';

export default function FeaturedWork() {
  const featured = getFeaturedProjects();

  return (
    <section className="section-pad border-b-2 border-border">
      <div className="container-page">
        <SectionHeading
          label="Work"
          title="Featured products"
          description="Three things I’m actively building. The full index includes everything cloned on my machine and GitHub."
        />

        <ol className="mt-12 divide-y-2 divide-border border-y-2 border-border">
          {featured.map((project, index) => {
            const num = String(index + 1).padStart(2, '0');
            return (
              <li
                key={project.title}
                className="group grid gap-4 py-8 transition-colors hover:bg-muted/20 md:grid-cols-[3rem_1fr_auto] md:items-center md:gap-8"
              >
                <span className="font-mono text-sm text-accent">{num}</span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-fit"
                >
                  Live site
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ol>

        <div className="mt-10">
          <Link href="/projects" className="btn-primary inline-flex">
            View all projects
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
