import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import SectionDivider from '../components/SectionDivider'
import PhotoGallery from '../components/PhotoGallery'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'

export default function Home() {
  const { home } = content

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <HeroSection
        imageSrc={images.hero}
        title={home.heroTitle}
        subtitle={home.heroSubtitle}
        ctaText="Discover the Farm"
        ctaLink="/kerala-backwaters"
      />

      {/* Intro */}
      <section style={{ padding: 'var(--space-xl) var(--space-md)' }}>
        <ScrollReveal>
          <div style={{
            maxWidth: '780px',
            margin: '0 auto',
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            lineHeight: 1.9,
            color: 'var(--color-text)',
          }}>
            {home.intro.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: '1.5rem' }}>{para}</p>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <SectionDivider />

      {/* Gallery */}
      <section style={{ padding: '0 var(--space-md) var(--space-xl)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <PhotoGallery images={images.homeGallery} />
        </div>
      </section>

      <SectionDivider />

      {/* Tagline */}
      <ScrollReveal>
        <div style={{
          textAlign: 'center',
          padding: '0 var(--space-md) var(--space-lg)',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontStyle: 'italic',
            color: 'var(--color-forest)',
          }}>
            "{home.tagline}"
          </p>
        </div>
      </ScrollReveal>

      {/* Distances */}
      <section style={{
        background: 'white',
        padding: 'var(--space-lg) var(--space-md)',
        borderTop: '1px solid rgba(28,58,42,0.08)',
        borderBottom: '1px solid rgba(28,58,42,0.08)',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'var(--space-lg)',
        }}>
          <DistanceColumn title="Nearby" items={home.distances.nearby} />
          <DistanceColumn title="Prime Destinations" items={home.distances.destinations} />
          <DistanceColumn title="Major Towns" items={home.distances.towns} />
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              fontStyle: 'italic',
              color: 'var(--color-forest)',
              textAlign: 'center',
              marginBottom: 'var(--space-md)',
            }}>
              Find Us
            </h2>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <iframe
                title="Philipkutty's Farm Location"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15726.123456!2d76.3870!3d9.5916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <BookingCTA />
    </motion.div>
  )
}

function DistanceColumn({ title, items }) {
  return (
    <ScrollReveal>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
          fontWeight: 700,
          marginBottom: '1.2rem',
        }}>
          {title}
        </h3>
        <ul style={{ listStyle: 'none' }}>
          {items.map((item, i) => (
            <li key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              padding: '8px 0',
              borderBottom: '1px solid rgba(28,58,42,0.08)',
              fontSize: '0.9rem',
              color: 'var(--color-text)',
            }}>
              <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item.label}</span>
              <span style={{ fontWeight: 700, color: 'var(--color-forest)', marginLeft: '1rem', whiteSpace: 'nowrap' }}>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  )
}
