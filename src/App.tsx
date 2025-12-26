import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import useMouse from './hooks/useMouse'
import Navbar from './components/ui/Navbar'
import Inicio from './pages/Inicio'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'

export default function App() {
  const { x, y } = useMouse()

  return (
    <BrowserRouter>
      <div className='bg-background text-text transition-colors relative overflow-hidden'>
        <Navbar />
        <InnerRoutes />
        <motion.span style={{ x, y }} className='hidden sm:block pointer-events-none fixed -translate-1/2 size-14 top-0 backdrop-invert-100 rounded-full z-50' />
      </div>
    </BrowserRouter>
  )
}

function InnerRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Inicio />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </AnimatePresence>
  )
}
