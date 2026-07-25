import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'

export default function Contact() {
  const { contact } = content

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <PageHero
        title={contact.heroTitle}
        imageSrc={images.pageHeroes.contact}
      />

      <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'var(--space-lg)',
          alignItems: 'start',
        }}>
          {/* Left: Contact Details */}
          <ScrollReveal>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontStyle: 'italic',
                color: 'var(--color-forest)',
                marginBottom: 'var(--space-md)',
                fontWeight: 400,
              }}>
                Get in Touch
              </h2>
              <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <p style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-body)',
                    marginBottom: '4px',
                    fontWeight: 700,
                  }}>
                    Address
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.7 }}>
                    {contact.address}
                  </p>
                </div>

                <div>
                  <p style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-body)',
                    marginBottom: '4px',
                    fontWeight: 700,
                  }}>
                    Phone
                  </p>
                  <a href={`tel:${contact.phone}`} style={{ fontSize: '0.95rem', color: 'var(--color-text)', display: 'block', marginBottom: '4px' }}>
                    {contact.phone}
                  </a>
                  <a href={`tel:${contact.mobile}`} style={{ fontSize: '0.95rem', color: 'var(--color-text)', display: 'block' }}>
                    {contact.mobile}
                  </a>
                </div>

                <div>
                  <p style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-body)',
                    marginBottom: '4px',
                    fontWeight: 700,
                  }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    style={{ fontSize: '0.95rem', color: 'var(--color-forest)' }}
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <p style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-body)',
                    marginBottom: '4px',
                    fontWeight: 700,
                  }}>
                    Instagram
                  </p>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-forest)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                    @philipkuttysfarm
                  </a>
                </div>
              </address>
            </div>
          </ScrollReveal>

          {/* Right: Contact Form */}
          <ScrollReveal delay={150}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: '0 var(--space-md) var(--space-lg)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <iframe
              title="Philipkutty's Farm Map"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15726.123456!2d76.3870!3d9.5916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            />
          </div>
        </div>
      </section>

      <BookingCTA />
    </motion.div>
  )
}
