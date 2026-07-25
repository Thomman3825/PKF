import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'

// Parse activity body: lines ending with ":" are headings
function parseActivities(body) {
  const paragraphs = body.split('\n\n').filter(Boolean)
  return paragraphs.map((para, i) => {
    const colonIdx = para.indexOf(':')
    if (colonIdx !== -1 && colonIdx < 30) {
      const heading = para.slice(0, colonIdx)
      const text = para.slice(colonIdx + 1).trim()
      return { key: i, heading, text }
    }
    return { key: i, heading: null, text: para }
  })
}

export default function Activities() {
  const { activities } = content
  const parsed = parseActivities(activities.body)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <PageHero
        title={activities.heroTitle}
        imageSrc={images.pageHeroes.activities}
      />

      <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {parsed.map(({ key, heading, text }) => (
            <ScrollReveal key={key} delay={key * 60}>
              <div style={{ marginBottom: 'var(--space-md)' }}>
                {heading && (
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    color: 'var(--color-forest)',
                    marginBottom: '0.5rem',
                    fontWeight: 400,
                  }}>
                    {heading}
                  </h3>
                )}
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  lineHeight: 1.9,
                  color: 'var(--color-text)',
                }}>
                  {text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <BookingCTA />
    </motion.div>
  )
}
