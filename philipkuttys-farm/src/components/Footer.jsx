import { Link } from 'react-router-dom'
import { content } from '../data/content'

const col1Links = [
  { label: 'Home', to: '/' },
  { label: 'Kerala & Backwaters', to: '/kerala-backwaters' },
  { label: 'Host & Family', to: '/host' },
  { label: 'The Farm', to: '/farm' },
  { label: 'The Villas', to: '/villas' },
  { label: 'Food', to: '/food' },
  { label: 'Activities', to: '/activities' },
]

const col2Links = [
  { label: 'Tips & Suggestions', to: '/tips-suggestions' },
  { label: 'Cookery Holiday', to: '/cookery-holiday' },
  { label: 'Retreat', to: '/retreat' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Reservation', to: '/reservation' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-dark)',
      color: 'var(--color-ivory)',
      padding: 'var(--space-lg) var(--space-md) var(--space-md)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 'var(--space-lg)',
        paddingBottom: 'var(--space-lg)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        {/* Column 1 — Brand */}
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            marginBottom: '0.75rem',
            color: 'var(--color-ivory)',
          }}>
            Philipkutty's Farm
          </div>
          <p style={{
            fontSize: '0.82rem',
            color: 'var(--color-muted)',
            lineHeight: 1.7,
            maxWidth: '260px',
          }}>
            {content.home.tagline}
          </p>
          <p style={{
            fontSize: '0.78rem',
            color: 'var(--color-muted)',
            marginTop: '1rem',
            lineHeight: 1.6,
          }}>
            A family-run boutique homestay on a private farm island in the backwaters of Kerala, India.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1rem',
            fontWeight: 700,
          }}>
            Explore
          </h4>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col1Links.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(245,240,232,0.7)',
                      transition: 'color var(--transition)',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--color-gold)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.7)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col2Links.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(245,240,232,0.7)',
                      transition: 'color var(--transition)',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--color-gold)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.7)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h4 style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1rem',
            fontWeight: 700,
          }}>
            Contact
          </h4>
          <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.6 }}>
              {content.contact.address}
            </p>
            {/* <a
              href={`tel:${content.contact.phone}`}
              style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.7)', transition: 'color var(--transition)' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.7)'}
            >
              Tel: {content.contact.phone}
            </a> */}
            <a
              href={`tel:${content.contact.mobile}`}
              style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.7)', transition: 'color var(--transition)' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.7)'}
            >
              Phone: {content.contact.mobile}
            </a>
            <a
              href={`mailto:${content.contact.email}`}
              style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.7)', transition: 'color var(--transition)' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.7)'}
            >
              {content.contact.email}
            </a>
            <a
              href={content.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                color: 'rgba(245,240,232,0.7)',
                transition: 'color var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.7)'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              @philipkuttysfarm
            </a>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        textAlign: 'center',
        paddingTop: 'var(--space-md)',
        fontSize: '0.78rem',
        color: 'var(--color-muted)',
        letterSpacing: '0.04em',
      }}>
        &copy; {new Date().getFullYear()} Philipkutty's Farm. All rights reserved.
      </div>
    </footer>
  )
}
