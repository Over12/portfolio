import { useRef, useState } from 'react'
import type { Notification } from '../types/Notificacion'

export default function useNotification() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [notification, setNotification] = useState<Notification>({ success: false, show: false, error: null })

  const setSuccessNotification = () => {
    setNotification({ success: true, show: true, error: null })
  }

  const setErrorNotification = () => {
    setNotification({ success: false, show: true, error: 'Ocurrió un error al enviar el mensaje.' })
  }

  const showNotification = (isSuccess: boolean) => {
    if (isSuccess) {
      setSuccessNotification()
    } else {
      setErrorNotification()
    }

    hideNotification()
  }

  const hideNotification = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setNotification({ success: false, show: false, error: null })
    }, 5000)
  }

  return { notification, showNotification }
}
