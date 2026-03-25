import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/forms.css'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const subject = encodeURIComponent(`Message from ${data.name}`)
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}${data.phone ? `\nPhone: ${data.phone}` : ''}\n\n${data.message}`
    )
    window.location.href = `mailto:tkurian2@gmail.com?subject=${subject}&body=${body}`
    setStatus('success')
    reset()
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

      <button type="submit" className="form-submit-btn">
        Send Message
      </button>
    </form>
  )
}
