import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionDivider from '../components/SectionDivider'
import PhotoGallery from '../components/PhotoGallery'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'

export default function Villas() {
  const { villas } = content

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <PageHero
        title={villas.heroTitle}
        imageSrc={images.villaGallery[0].src}
      />

      {/* Description */}
      <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
        <ScrollReveal>
          <div className="text-content" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {villas.description.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.9 }}>
                {para}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <SectionDivider />

      {/* Villa name chips */}
      <section style={{ padding: '0 var(--space-md) var(--space-lg)', textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}>
            {villas.villaNames.map(name => (
              <span key={name} style={{
                border: '1px solid var(--color-gold)',
                color: 'var(--color-gold)',
                padding: '8px 20px',
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontStyle: 'italic',
                borderRadius: 'var(--radius)',
                letterSpacing: '0.04em',
              }}>
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery */}
      <section style={{ padding: '0 var(--space-md) var(--space-xl)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <PhotoGallery images={images.villaGallery} />
        </div>
      </section>

      <BookingCTA />
    </motion.div>
  )
}
