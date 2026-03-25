import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'

export default function Kerala() {
  const { kerala } = content

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <PageHero
        title={kerala.heroTitle}
        imageSrc={images.homeGallery[2].src}
      />

      <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {kerala.body.split('\n\n').map((para, i) => (
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

      <BookingCTA />
    </motion.div>
  )
}
