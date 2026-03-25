import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BookingCTA from '../components/BookingCTA'
import ScrollReveal from '../components/ScrollReveal'
import { content } from '../data/content'
import { images } from '../data/images'

// Parse tips body: lines ending with ":" on their own are section headings
function parseTips(body) {
  const lines = body.split('\n')
  const sections = []
  let current = null

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    // A heading is a short line ending with ':'
    if (trimmed.endsWith(':') && trimmed.length < 40) {
      if (current) sections.push(current)
      current = { heading: trimmed.slice(0, -1), lines: [] }
    } else {
      if (!current) current = { heading: null, lines: [] }
      current.lines.push(trimmed)
    }
  }
  if (current) sections.push(current)
  return sections
}

export default function Tips() {
  const { tips } = content
  const sections = parseTips(tips.body)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <PageHero
        title={tips.heroTitle}
        imageSrc={images.homeGallery[2].src}
      />

      <section style={{ padding: 'var(--space-lg) var(--space-md)' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {sections.map(({ heading, lines }, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div style={{ marginBottom: 'var(--space-md)' }}>
                {heading && (
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    color: 'var(--color-forest)',
                    marginBottom: '0.6rem',
                    fontWeight: 400,
                  }}>
                    {heading}
                  </h3>
                )}
                {lines.map((line, j) => (
                  <p key={j} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    lineHeight: 1.9,
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem',
                  }}>
                    {line}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <BookingCTA />
    </motion.div>
  )
}
