import { BrowserRouter, Route, Routes } from 'react-router'
import { motion } from 'motion/react'
import useMouse from './hooks/useMouse'
import Navbar from './components/ui/Navbar'
import Inicio from './pages/Inicio'
import Proyectos from './pages/Proyectos'

export default function App() {
  const { x, y } = useMouse()

  return (
    <BrowserRouter>
      <div className='bg-background text-text transition-colors relative overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/proyectos' element={<Proyectos />} />
        </Routes>
        <motion.span style={{ x, y }} className='pointer-events-none absolute -translate-1/2 size-14 top-0 backdrop-invert-100 rounded-full z-50' />
      </div>
    </BrowserRouter>
  )
}
