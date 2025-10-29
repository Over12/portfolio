import ProjectCard from '../common/ProjectCard'
import { projects } from '../../data/Projects'

export default function ProjectContainer() {
  return (
    <section className="min-h-dvh flex items-center justify-center overflow-hidden p-10 cursor-none">
      <div className="grid grid-cols-4 gap-5 mt-20">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
};
