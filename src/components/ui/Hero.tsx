import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className='h-dvh cursor-none'>
      <div className='relative flex flex-col items-start justify-between h-screen p-10'>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-pretty w-1/2 text-4xl mt-48'>Creando experiencias web modernas, rápidas y funcionales con un enfoque en diseño limpio y rendimiento.</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-1/3 text-text/50'><span className='text-text font-medium'>Desarrollador web</span> y <span className='text-text font-medium'>ser humano</span>, enfocado en crear experiencias digitales que inspiren conexión.</motion.p>
        <motion.div initial={{ opacity: 0, height: '200px' }} animate={{ opacity: 1, height: '348px' }} className='absolute bottom-10 right-10 w-60 h-96 bg-primary/90 overflow-hidden transition-colors'>
            <img src='/src/assets/images/avatar.webp' alt='Imagen de avatar' className='size-full object-cover' />
        </motion.div>
      </div>
    </section>
  )
};
