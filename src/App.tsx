import Hero from './components/ui/Hero'
import Navbar from './components/ui/Navbar'

export default function App() {
  return (
    <div className='bg-background text-text transition-colors'>
      <Navbar />
      <Hero />
    </div>
  )
}
