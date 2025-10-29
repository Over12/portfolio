import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react'
import type { Project } from '../../types/Project'
import Pill from './Pill'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='w-80 backdrop-brightness-200 border border-gray-500/20 flex flex-col rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl hover:border-gray-500/40 transition-all duration-500'>
      <div className='aspect-video overflow-hidden'>
        <img src={project.image} alt={`Imagen de web ${project.title}`} className='size-full object-cover group-hover:scale-110 transition-transform ease-in-out duration-500' />
      </div>
      <div className='p-5'>
        <div className='pt-2 flex justify-between items-center'>
          <h3 className='font-bold text-xl group-hover:text-accent transition-colors duration-500'>{project.title}</h3>
          <div className='flex gap-2'>
            <a href={project.repository} target='_blank' rel='noopener noreferrer' className='p-1 hover:scale-125 transition-transform cursor-none'>
              <IconBrandGithub />
            </a>
            <a href={project.url} target='_blank' rel='noopener noreferrer' className='p-1 hover:scale-125 transition-transform cursor-none'>
              <IconExternalLink />
            </a>
          </div>
        </div>
        <div className='w-0 group-hover:w-1/3 my-1.5 h-0.5 bg-accent transition-all duration-500 ease-in-out' />
        <p className='min-h-24 opacity-70 group-hover:opacity-100 text-pretty text-sm py-3 transition-opacity duration-500'>{project.description}</p>
        <div className='flex flex-wrap gap-2'>
          {project.tech.map((tech) => (
            <Pill key={tech} content={tech} />
          ))}
        </div>
      </div>
    </div>
  )
};
