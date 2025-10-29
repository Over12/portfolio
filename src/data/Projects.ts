import type { Project } from '../types/Project'

export const projects: Project[] = [
  {
    id: 'P-01',
    title: 'KamiHub',
    description: 'Página web para poder ver información de animes, temporada actual y próximos estrenos.',
    url: 'https://kamihub.vercel.app',
    repository: 'https://github.com/Over12/kami-hub',
    image: 'src/assets/images/projects/KamiHub.webp',
    tech: ['NextJS', 'Tailwind', 'TypeScript']
  },
  {
    id: 'P-02',
    title: 'Shoplyx',
    description: 'Página web que simula un e-commerce con carrito de compras.',
    url: 'https://shoplyx.netlify.app',
    repository: 'https://github.com/Over12/app-shop',
    image: 'src/assets/images/projects/Shoplyx.webp',
    tech: ['React', 'Tailwind', 'Motion']
  },
  {
    id: 'P-03',
    title: 'Weathxr',
    description: 'Página web para visualizar el clima, humedad y velocidad de viento del lugar que desees.',
    url: 'https://weathxr.netlify.app',
    repository: 'https://github.com/Over12/weather-app',
    image: 'src/assets/images/projects/Weathxr.webp',
    tech: ['React', 'Tailwind', 'Motion']
  },
  {
    id: 'P-04',
    title: 'Web SERINTEG',
    description: 'Página web realizada para la empresa SERINTEG, con información sobre sus servicios y contacto.',
    url: 'https://serinteg.netlify.app',
    repository: 'https://github.com/Over12/serinteg-web',
    image: 'src/assets/images/projects/Serinteg.webp',
    tech: ['React', 'EmailJS']
  }
]
