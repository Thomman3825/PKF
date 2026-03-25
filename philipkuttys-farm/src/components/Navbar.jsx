import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const topLinks = [
  { label: 'Home', to: '/' },
  { label: 'Cookery Holiday', to: '/cookery-holiday' },
  { label: 'Retreat', to: '/retreat' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Reservation', to: '/reservation' },
  { label: 'Contact Us', to: '/contact' },
]

const bottomLinks = [
  { label: 'Kerala & Backwaters', to: '/kerala-backwaters' },
  { label: 'Host & Family', to: '/host' },
  { label: 'Farm', to: '/farm' },
  { label: 'Villas', to: '/villas' },
  { label: 'Food', to: '/food' },
  { label: 'Activities', to: '/activities' },
  { label: 'Tips & Suggestions', to: '/tips-suggestions' },
]

const allLinks = [...topLinks, ...bottomLinks]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
        <div className="navbar-inner">
          <div className="navbar-top">
            {topLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://www.instagram.com/philipkuttysfarm/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-icon"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>

          <div className="navbar-logo">
            <NavLink to="/" onClick={closeMenu}>
              Philipkutty's Farm
            </NavLink>
            <span className="logo-tagline">Kerala Backwaters Homestay</span>
          </div>

          <div className="navbar-bottom">
            {bottomLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`navbar-mobile-overlay ${menuOpen ? 'open' : ''}`}>
        {allLinks.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {link.label}
          </NavLink>
        ))}
        <div className="mobile-divider" />
        <a
          href="https://www.instagram.com/philipkuttysfarm/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontStyle: 'normal', letterSpacing: '0.1em' }}
        >
          Instagram
        </a>
      </div>
    </>
  )
}
