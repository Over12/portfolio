import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react'
import useTheme from '../../hooks/useTheme'
import { Link, useLocation } from 'react-router'
import { motion } from 'motion/react'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/tecnologias', label: 'Tecnologías' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className='fixed grid grid-cols-3 inset-x-0 px-10 py-5 z-50'>
      <p className='text-3xl font-medium'>over.code</p>
      <ul className='flex w-fit place-self-center items-center justify-center gap-5'>
        {links.map(({ to, label }) => (
          <li key={to} className='relative'>
            <Link to={to} className='p-2'>{label}</Link>

            {pathname === to && (
              <motion.span layoutId='nav-indicator' transition={{ type: 'spring', stiffness: 700, damping: 30 }} className='absolute inset-x-0 bottom-0 h-0.5 bg-primary'/>
            )}
          </li>
        ))}
      </ul>
      <motion.button whileTap={{ rotate: -90 }} onClick={toggleTheme} className='place-self-end p-2 cursor-pointer focus:outline-none'>
        {theme === 'dark' ? <IconMoonFilled /> : <IconSunFilled />}
      </motion.button>
    </nav>
  )
}
