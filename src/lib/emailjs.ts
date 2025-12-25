import { sendForm, EmailJSResponseStatus } from '@emailjs/browser'

export async function sendEmail (form: HTMLFormElement) {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

  try {
    const res = await sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
    return res as EmailJSResponseStatus
  } catch (error) {
    console.error('Error al enviar el correo:', error)
  }
}