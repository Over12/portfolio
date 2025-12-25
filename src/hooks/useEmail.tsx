import { useState } from 'react'
import { sendEmail } from '../lib/emailjs'
import useNotification from './useNotification'

export default function useEmail() {
  const [loading, setLoading] = useState<boolean>(false)
  const { notification, showNotification } = useNotification()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    try {
      setLoading(true)
      await sendEmail(form)
      showNotification(true)
      form.reset()
    } catch (error) {
      console.error(error)
      showNotification(false)
    } finally {
      setLoading(false)
    }
  }

  return { loading, notification, onSubmit }
}
