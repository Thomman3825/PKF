import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser'
import PageHero from '../components/PageHero'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'
import { countries } from '../data/countries'
import '../styles/forms.css'

export default function Reservation() {
  const { reservation } = content
  const [status, setStatus] = useState('idle')
  const [captchaToken, setCaptchaToken] = useState(null)
  const [captchaError, setCaptchaError] = useState(false)
  const captchaRef = useRef(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    if (!captchaToken) {
      setCaptchaError(true)
      return
    }
    setCaptchaError(false)
    setStatus('loading')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_RESERVATION,
        {
          first_name: data.firstName,
          last_name: data.lastName || 'Not provided',
          from_email: data.email,
          address_line1: data.addressLine1 || 'Not provided',
          address_line2: data.addressLine2 || 'Not provided',
          city: data.city || 'Not provided',
          state: data.state || 'Not provided',
          zip_code: data.zipCode || 'Not provided',
          country: data.country || 'Not provided',
          contact_number: data.contactNumber,
          adults: data.adults,
          children_6_12: data.childrenAge6to12,
          children_below_6: data.childrenBelow6,
          number_of_rooms: data.numberOfRooms,
          arrival_date: data.arrivalDate,
          departure_date: data.departureDate,
          airport_pickup: data.airportPickup || 'Not specified',
          mode_of_arrival: data.modeOfArrival || 'Not specified',
          special_request: data.specialRequest || 'None',
          'g-recaptcha-response': captchaToken,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    } finally {
      captchaRef.current?.reset()
      setCaptchaToken(null)
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 var(--space-md)' }}>
                <div className="form-field">
                  <label htmlFor="res-first-name">First Name</label>
                  <input
                    id="res-first-name"
                    type="text"
                    placeholder="First Name"
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && <span className="field-error">{errors.firstName.message}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="res-last-name">Last Name</label>
                  <input
                    id="res-last-name"
                    type="text"
                    placeholder="Last Name"
                    {...register('lastName')}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="res-email">Email</label>
                <input
                  id="res-email"
                  type="email"
                  placeholder="Email Address"
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 var(--space-md)' }}>
                <div className="form-field">
                  <label htmlFor="res-address1">Address Line 1</label>
                  <input
                    id="res-address1"
                    type="text"
                    placeholder="Address Line 1"
                    {...register('addressLine1')}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="res-address2">Address Line 2</label>
                  <input
                    id="res-address2"
                    type="text"
                    placeholder="Address Line 2"
                    {...register('addressLine2')}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 var(--space-md)' }}>
                <div className="form-field">
                  <label htmlFor="res-city">City</label>
                  <input
                    id="res-city"
                    type="text"
                    placeholder="City"
                    {...register('city')}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="res-state">State</label>
                  <input
                    id="res-state"
                    type="text"
                    placeholder="State"
                    {...register('state')}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 var(--space-md)' }}>
                <div className="form-field">
                  <label htmlFor="res-zip">Zip/Postal Code</label>
                  <input
                    id="res-zip"
                    type="text"
                    placeholder="Zip/Postal Code"
                    {...register('zipCode')}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="res-country">Country</label>
                  <select id="res-country" defaultValue="" {...register('country')}>
                    <option value="" disabled>Select Country</option>
                    {countries.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="res-contact-number">Contact Number</label>
                <input
                  id="res-contact-number"
                  type="tel"
                  placeholder="Contact Number"
                  {...register('contactNumber', { required: 'Contact number is required' })}
                />
                {errors.contactNumber && <span className="field-error">{errors.contactNumber.message}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 var(--space-md)' }}>
                <div className="form-field">
                  <label htmlFor="res-adults">Number of Adults</label>
                  <input
                    id="res-adults"
                    type="number"
                    min={1}
                    placeholder="Adults"
                    {...register('adults', {
                      required: 'Required',
                      min: { value: 1, message: 'Min 1' },
                    })}
                  />
                  {errors.adults && <span className="field-error">{errors.adults.message}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="res-children-6-12">Children (Age 6-12)</label>
                  <input
                    id="res-children-6-12"
                    type="number"
                    min={0}
                    placeholder="Children (Age 6-12)"
                    {...register('childrenAge6to12', {
                      required: 'Required',
                      min: { value: 0, message: 'Min 0' },
                    })}
                  />
                  {errors.childrenAge6to12 && <span className="field-error">{errors.childrenAge6to12.message}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="res-children-below-6">Children (Below 6)</label>
                  <input
                    id="res-children-below-6"
                    type="number"
                    min={0}
                    placeholder="Children (Below 6)"
                    {...register('childrenBelow6', {
                      required: 'Required',
                      min: { value: 0, message: 'Min 0' },
                    })}
                  />
                  {errors.childrenBelow6 && <span className="field-error">{errors.childrenBelow6.message}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="res-rooms">Number of Rooms</label>
                <input
                  id="res-rooms"
                  type="number"
                  min={1}
                  placeholder="Number of Rooms"
                  {...register('numberOfRooms', {
                    required: 'Number of rooms is required',
                    min: { value: 1, message: 'Minimum 1 room' },
                  })}
                />
                {errors.numberOfRooms && <span className="field-error">{errors.numberOfRooms.message}</span>}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 var(--space-md)' }}>
                <div className="form-field">
                  <label htmlFor="res-airport-pickup">Airport Pickup</label>
                  <select id="res-airport-pickup" defaultValue="" {...register('airportPickup')}>
                    <option value="" disabled>- Select -</option>
                    {reservation.airportPickupOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="res-mode-of-arrival">Mode of Arrival</label>
                  <select id="res-mode-of-arrival" defaultValue="" {...register('modeOfArrival')}>
                    <option value="" disabled>- Select -</option>
                    {reservation.modeOfArrivalOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="res-special-request">Special Request</label>
                <textarea
                  id="res-special-request"
                  placeholder="Special Request"
                  rows={4}
                  {...register('specialRequest')}
                />
              </div>

              <div className="form-recaptcha">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token) => {
                    setCaptchaToken(token)
                    if (token) setCaptchaError(false)
                  }}
                  onExpired={() => setCaptchaToken(null)}
                />
                {captchaError && <span className="field-error">Please confirm you're not a robot</span>}
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
                {status === 'loading' ? 'Sending...' : 'Submit Form'}
              </button>
            </form>
          )}
        </ScrollReveal>
      </section>

      <BookingCTA heading="Questions? Get in Touch" subtext="We are happy to answer any questions before you book." />
    </motion.div>
  )
}
