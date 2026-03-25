import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'
import '../styles/forms.css'

export default function Reservation() {
  const { reservation } = content
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
      const res = await fetch(
        (import.meta.env.VITE_API_URL || 'https://api.philipkuttysfarm.com') + '/reservation',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      )
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <PageHero
        title={reservation.heroTitle}
        imageSrc={images.homeGallery[4].src}
      />

      <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
        <ScrollReveal>
          <p style={{
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto var(--space-lg)',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--color-muted)',
          }}>
            {reservation.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {status === 'success' ? (
            <div className="form-status-success" style={{ maxWidth: '580px', margin: '0 auto' }}>
              Thank you for your reservation enquiry. We will get back to you as soon as possible to confirm availability and rates.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form-wrapper"
              noValidate
              style={{ maxWidth: '580px', margin: '0 auto' }}
            >
              <div className="form-field">
                <label htmlFor="res-name">Full Name</label>
                <input
                  id="res-name"
                  type="text"
                  placeholder="Your full name"
                  {...register('name', { required: 'Full name is required' })}
                />
                {errors.name && <span className="field-error">{errors.name.message}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="res-email">Email Address</label>
                <input
                  id="res-email"
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
                <label htmlFor="res-phone">Phone Number (optional)</label>
                <input
                  id="res-phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  {...register('phone')}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 var(--space-md)' }}>
                <div className="form-field">
                  <label htmlFor="res-arrival">Arrival Date</label>
                  <input
                    id="res-arrival"
                    type="date"
                    {...register('arrivalDate', { required: 'Arrival date is required' })}
                  />
                  {errors.arrivalDate && <span className="field-error">{errors.arrivalDate.message}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="res-departure">Departure Date</label>
                  <input
                    id="res-departure"
                    type="date"
                    {...register('departureDate', { required: 'Departure date is required' })}
                  />
                  {errors.departureDate && <span className="field-error">{errors.departureDate.message}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="res-guests">Number of Guests</label>
                <input
                  id="res-guests"
                  type="number"
                  min={1}
                  max={12}
                  placeholder="2"
                  {...register('guests', {
                    required: 'Number of guests is required',
                    min: { value: 1, message: 'Minimum 1 guest' },
                    max: { value: 12, message: 'Maximum 12 guests' },
                  })}
                />
                {errors.guests && <span className="field-error">{errors.guests.message}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="res-villa">Villa Preference</label>
                <select id="res-villa" {...register('villa')}>
                  {reservation.villaOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="res-requests">Special Requests (optional)</label>
                <textarea
                  id="res-requests"
                  placeholder="Any dietary requirements, special occasions, or other requests..."
                  rows={4}
                  {...register('specialRequests')}
                />
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
                {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          )}
        </ScrollReveal>
      </section>

      <BookingCTA heading="Questions? Get in Touch" subtext="We are happy to answer any questions before you book." />
    </motion.div>
  )
}
