import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className='h-dvh cursor-none'>
      <div className='relative flex flex-col items-start justify-between h-screen p-10'>
        <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className='text-pretty w-1/2 text-4xl mt-48'>Transformando ideas en experiencias digitales modernas, intuitivas y de alto rendimiento.</motion.p>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className='w-1/3 text-text/50'><span className='text-text font-medium'>Desarrollador web</span> y <span className='text-text font-medium'>ser humano</span>. Construyendo el futuro web, una línea de código a la vez.</motion.p>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 15 }} className='absolute bottom-10 right-10 w-60 h-96 bg-primary/90 overflow-hidden transition-colors'>
            <img src='/src/assets/images/avatar.webp' alt='Imagen de avatar' className='size-full object-cover' />
        </motion.div>
      </div>
    </section>
  )
};
