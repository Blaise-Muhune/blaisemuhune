import ProjectIndexRow from '@/components/ui/ProjectIndexRow';
import SectionHeading from '@/components/ui/SectionHeading';
import { portfolioProjects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="section-pad !pb-0">
      <div className="container-page">
        <SectionHeading
          label="Work"
          title="Selected projects"
          description="Everything I keep cloned locally and on GitHub — products first, proof you can click through."
        />
      </div>

      <div className="mt-12">
        {portfolioProjects.map((project, index) => (
          <ProjectIndexRow key={project.title} index={index} {...project} />
        ))}
      </div>
    </div>
  );
}
