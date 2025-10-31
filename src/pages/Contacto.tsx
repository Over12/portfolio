export default function Contacto() {
  return (
    <section className='min-h-svh flex items-center justify-between p-10'>
      <p className='self-baseline mt-48 w-1/2 text-pretty text-4xl'>Explorando nuevas oportunidades para seguir creciendo como desarrollador.</p>
      <form className='mx-auto flex flex-col backdrop-brightness-200 p-5 shadow-lg gap-5 items-center justify-center'>
        <div className="flex flex-col w-80">
          <label htmlFor='name'>Nombre</label>
          <input type='text' id='name' name='name' placeholder='John Doe' required className='border-b-2 border-primary px-2 py-1 placeholder-gray-500 focus:border-accent focus:outline-none transition-colors' />
        </div>
        <div className="flex flex-col w-80">
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' placeholder='john.doe@example.com' required className='border-b-2 border-primary px-2 py-1 placeholder-gray-500 focus:border-accent focus:outline-none transition-colors' />
        </div>
        <div className="flex flex-col w-80">
          <label htmlFor='message' className='mb-1'>Mensaje</label>
          <textarea name='message' id='message' placeholder='Escribe tu mensaje aquí...' cols={30} rows={3} required className='border-2 border-primary px-2 py-1 placeholder-gray-500 resize-none focus:border-accent focus:outline-none transition-colors'></textarea>
        </div>
        <button type='submit' className='group relative border-2 hover:text-white border-primary py-2 w-full hover:border-accent transition-colors duration-500'>
          <div className='absolute inset-y-0 w-0 group-hover:w-full bg-accent -z-10 transition-all duration-700 ease-in-out' />
          Enviar
        </button>
      </form>
    </section>
  )
};
