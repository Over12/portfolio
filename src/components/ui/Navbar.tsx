import { IconMenuDeep, IconMoonFilled, IconSunFilled } from '@tabler/icons-react'
import useTheme from '../../hooks/useTheme'
import { Link, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' },
  ]

  const toogleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='absolute flex justify-between items-center sm:grid sm:grid-cols-3 inset-x-0 px-5 sm:px-10 py-5 z-50 cursor-none'>
        <p className='text-3xl font-medium'>pedro.avalos</p>
        <ul className={`hidden sm:flex w-fit place-self-center items-center justify-center gap-5`}>
          {links.map(({ to, label }) => (
            <li key={to} className='relative'>
              <Link to={to} className='p-2 cursor-none'>{label}</Link>

              {pathname === to && (
                <motion.span layoutId='nav-indicator' initial={false} transition={{ type: 'spring', stiffness: 700, damping: 30 }} className='absolute inset-x-0 bottom-0 h-0.5 bg-primary' />
              )}
            </li>
          ))}
        </ul>
        <motion.button whileTap={{ rotate: -90 }} onClick={toggleTheme} className='hidden sm:block sm:place-self-end p-2 cursor-none focus:outline-none'>
          {theme === 'dark' ? <IconMoonFilled /> : <IconSunFilled />}
        </motion.button>
        <button onClick={toogleMenu} className='sm:hidden p-2 cursor-none focus:outline-none'>
          <IconMenuDeep className='size-8' />
        </button>
      </nav>
      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.ul initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className='sm:hidden absolute inset-x-0 top-24 px-5 flex justify-between items-center z-30'>
            {links.map(({ to, label }) => (
              <li key={to} className='relative'>
                <Link to={to} className='p-2 text-sm'>{label}</Link>

                {pathname === to && (
                  <motion.span layoutId='nav-indicator-mobile' initial={false} transition={{ type: 'spring', stiffness: 700, damping: 30 }} className='absolute inset-x-0 bottom-0 h-0.5 bg-primary' />
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  )
}
