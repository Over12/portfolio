import { useMotionValue, useSpring } from 'motion/react'
import { useEffect } from 'react'

export default function useMouse() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const x = useSpring(mouseX, { stiffness: 200, damping: 20 })
  const y = useSpring(mouseY, { stiffness: 200, damping: 25 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return { x, y }
};
