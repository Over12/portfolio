import { AnimatePresence, motion } from 'motion/react'
import ContactForm from '../components/ui/ContactForm'
import useNotification from '../hooks/useNotification'

export default function Contacto() {
  const { notification, showNotification } = useNotification()

  const copyToClipboard = () => {
    navigator.clipboard.writeText('overcxde.dev@gmail.com')
    showNotification(true)
  }

  return (
    <>
      <section className='relative min-h-svh flex items-center justify-between p-5 sm:p-10 cursor-none'>
        <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className='self-baseline hidden sm:block mt-48 w-1/2 text-pretty text-4xl'>Explorando nuevas oportunidades para seguir creciendo como desarrollador.</motion.p>
        <ContactForm />
        <div className='absolute bottom-5 sm:bottom-10 left-5 sm:left-10'>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onClick={copyToClipboard} className='underline hover:text-primary transition-colors'>¿Prefieres copiar mi email?</motion.p>
        </div>
      </section>
      <AnimatePresence mode='wait'>
        {notification.show && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 400, damping: 30 }} className={`absolute text-sm sm:text-text z-30 right-0 bottom-16 sm:bottom-5 px-3 py-2 shadow-lg backdrop-brightness-200 border-l-4 ${notification.success ? 'border-green-500' : 'border-red-500'} cursor-none`}>
            {notification.success ? 'Correo copiado en el portapapeles' : notification.error}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
};
