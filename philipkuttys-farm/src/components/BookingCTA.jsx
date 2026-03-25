import { Link } from 'react-router-dom'

export default function BookingCTA({
  heading = "Book Your Stay at Philipkutty's Farm",
  subtext = "We would love to welcome you to our island.",
}) {
  return (
    <section style={{
      background: 'var(--color-forest)',
      padding: 'var(--space-xl) var(--space-md)',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontStyle: 'italic',
        color: 'var(--color-ivory)',
        marginBottom: '1rem',
        fontWeight: 400,
      }}>
        {heading}
      </h2>
      <p style={{
        fontFamily: 'var(--font-body)',
        color: 'var(--color-water)',
        fontSize: '1rem',
        marginBottom: 'var(--space-md)',
        letterSpacing: '0.03em',
      }}>
        {subtext}
      </p>
      <Link
        to="/reservation"
        style={{
          display: 'inline-block',
          border: '2px solid var(--color-gold)',
          color: 'var(--color-gold)',
          padding: '14px 40px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          transition: 'background var(--transition), color var(--transition)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--color-gold)'
          e.currentTarget.style.color = 'var(--color-forest)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = 'var(--color-gold)'
        }}
      >
        Make a Reservation
      </Link>
    </section>
  )
}
