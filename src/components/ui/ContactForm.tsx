import { motion, AnimatePresence } from 'motion/react'
import useEmail from '../../hooks/useEmail'

export default function ContactForm() {
  const { loading, notification, onSubmit } = useEmail()

  return (
    <>
      <motion.form initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onSubmit={onSubmit} className='mx-auto flex flex-col backdrop-brightness-200 p-5 shadow-lg gap-5 items-center justify-center cursor-none'>
        <div className="flex flex-col w-80">
          <label htmlFor='name' className='cursor-none'>Nombre</label>
          <input type='text' id='name' name='name' placeholder='John Doe' required className='border-b-2 border-primary px-2 py-1 placeholder-gray-500 focus:border-accent focus:outline-none transition-colors cursor-none' />
        </div>
        <div className="flex flex-col w-80">
          <label htmlFor='email' className='cursor-none'>Email</label>
          <input type='email' id='email' name='email' placeholder='john.doe@example.com' required className='border-b-2 border-primary px-2 py-1 placeholder-gray-500 focus:border-accent focus:outline-none transition-colors cursor-none' />
        </div>
        <div className="flex flex-col w-80">
          <label htmlFor='message' className='mb-1 cursor-none'>Mensaje</label>
          <textarea name='message' id='message' placeholder='Escribe tu mensaje aquí...' cols={30} rows={3} required className='border-2 border-primary px-2 py-1 placeholder-gray-500 resize-none focus:border-accent focus:outline-none transition-color cursor-none'></textarea>
        </div>
        <button disabled={loading} type='submit' className='group relative border-2 hover:text-white border-primary py-2 w-full hover:border-accent transition-colors duration-500 cursor-none'>
          <div className='absolute inset-y-0 w-0 group-hover:w-full bg-accent -z-10 transition-all duration-700 ease-in-out' />
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </motion.form>
      <AnimatePresence mode='wait'>
        {notification.show && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 400, damping: 30 }} className={`absolute right-0 bottom-5 px-3 py-2 shadow-lg backdrop-brightness-200 border-l-4 ${notification.success ? 'border-green-500' : 'border-red-500'} cursor-none`}>
            {notification.success ? 'Mensaje enviado con éxito.' : notification.error}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
};
