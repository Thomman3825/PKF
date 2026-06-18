import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import '../styles/forms.css'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'Not provided',
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-status-success">
        Thank you for getting in touch. We will respond as soon as possible.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper" noValidate>
      <div className="form-field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          type="text"
          placeholder="Your full name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <span className="field-error">{errors.name.message}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          placeholder="your@email.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          })}
        />
        {errors.email && <span className="field-error">{errors.email.message}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="cf-phone">Phone (optional)</label>
        <input
          id="cf-phone"
          type="tel"
          placeholder="+1 234 567 8900"
          {...register('phone')}
        />
      </div>

      <div className="form-field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          placeholder="How can we help you?"
          rows={5}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <span className="field-error">{errors.message.message}</span>}
      </div>

      {status === 'error' && (
        <div className="form-status-error">
          Something went wrong. Please email us directly at{' '}
          <a href="mailto:mail@philipkuttysfarm.com" style={{ textDecoration: 'underline' }}>
            mail@philipkuttysfarm.com
          </a>
        </div>
      )}

      <button type="submit" className="form-submit-btn" disabled={status === 'loading'}>
        {status === 'loading' && <span className="form-spinner" />}
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
