import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/forms.css'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      const res = await fetch(
        (import.meta.env.VITE_API_URL || 'https://api.philipkuttysfarm.com') + '/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
          }),
        }
      )
      if (!res.ok) throw new Error('Server error')
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
          <a href="mailto:philipkuttysfarm@gmail.com" style={{ textDecoration: 'underline' }}>
            philipkuttysfarm@gmail.com
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
