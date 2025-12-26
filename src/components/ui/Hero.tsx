import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className='h-dvh cursor-none'>
      <div className='relative flex flex-col items-start justify-between h-screen p-5 sm:p-10'>
        <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className='text-pretty sm:w-1/2 text-3xl mt-36 sm:text-4xl sm:mt-48'>Transformando ideas en experiencias digitales modernas, intuitivas y de alto rendimiento.</motion.p>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className='text-sm sm:text-base w-1/2 sm:w-1/3 text-text/50'><span className='text-text font-medium'>Desarrollador web</span> y <span className='text-text font-medium'>ser humano</span>. Construyendo el futuro web, una línea de código a la vez.</motion.p>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 15 }} className='absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-40 h-72 sm:w-60 sm:h-96 bg-primary/90 overflow-hidden transition-colors'>
            <img src='/src/assets/images/avatar.webp' alt='Imagen de avatar' className='size-full object-cover' />
        </motion.div>
      </div>
    </section>
  )
};
