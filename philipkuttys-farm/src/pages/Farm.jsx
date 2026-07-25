import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'

export default function Farm() {
  const { farm } = content
  const farmImage = images.homeGallery[3]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <PageHero
        title={farm.heroTitle}
        imageSrc={images.pageHeroes.farm}
      />

      <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {farm.body.split('\n\n').map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.9,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
              }}>
                {para}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Farm photo */}
      <section style={{ padding: '0 var(--space-md) var(--space-lg)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <figure>
              <img
                src={farmImage.src}
                alt={farmImage.alt}
                style={{
                  width: '100%',
                  maxHeight: '520px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow)',
                  display: 'block',
                }}
              />
              <figcaption style={{
                textAlign: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--color-muted)',
                marginTop: '10px',
                fontStyle: 'italic',
                letterSpacing: '0.04em',
              }}>
                {farmImage.alt}
              </figcaption>
            </figure>
          </div>
        </ScrollReveal>
      </section>

      <BookingCTA />
    </motion.div>
  )
}
