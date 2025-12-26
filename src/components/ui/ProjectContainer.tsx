import ProjectCard from '../common/ProjectCard'
import { projects } from '../../data/Projects'

export default function ProjectContainer() {
  return (
    <section className="min-h-dvh flex items-center justify-center overflow-hidden p-5 sm:p-10 cursor-none">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mt-32 sm:mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
};
