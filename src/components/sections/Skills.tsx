import SectionHeading from '@/components/ui/SectionHeading';

const skillGroups = [
  {
    category: 'Frontend',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Prisma', 'Firebase', 'REST APIs'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'CI/CD', 'Testing', 'Performance'],
  },
];

export default function Skills() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          label="Stack"
          title="Technologies I work with"
          description="A practical toolkit for shipping reliable products — not a buzzword laundry list."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="card-surface flex flex-col p-6 transition-colors duration-200 hover:border-ink"
            >
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {group.category}
              </h3>
              <ul className="mt-6 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border py-2 text-muted-foreground last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
