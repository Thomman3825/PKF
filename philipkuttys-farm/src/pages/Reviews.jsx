import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'

function TestimonialCard({ text, author, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <div style={{
        background: 'white',
        boxShadow: 'var(--shadow)',
        padding: 'var(--space-md)',
        borderRadius: 'var(--radius)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          fontStyle: 'italic',
          color: 'var(--color-text)',
          lineHeight: 1.8,
          marginBottom: '1.2rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            color: 'var(--color-gold)',
            lineHeight: 0,
            verticalAlign: '-0.6rem',
            marginRight: '4px',
            opacity: 0.6,
          }}>"</span>
          {text}
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.82rem',
          color: 'var(--color-gold)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginTop: '16px',
          fontWeight: 700,
        }}>
          — {author}
        </p>
      </div>
    </ScrollReveal>
  )
}

export default function Reviews() {
  const { reviews } = content

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <PageHero
        title={reviews.heroTitle}
        imageSrc={images.pageHeroes.reviews}
        imgPosition="35% 40%"
      />

      <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
        <ScrollReveal>
          <p style={{
            textAlign: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: 'var(--color-muted)',
            maxWidth: '640px',
            margin: '0 auto var(--space-lg)',
            lineHeight: 1.7,
          }}>
            {reviews.intro}
          </p>
        </ScrollReveal>

        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(460px, 100%), 1fr))',
          gap: 'var(--space-md)',
          alignItems: 'start',
        }}>
          {reviews.testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              text={t.text}
              author={t.author}
              delay={i * 100}
            />
          ))}
        </div>
      </section>

      <BookingCTA />
    </motion.div>
  )
}
