import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/hero.css'

export default function HeroSection({ imageSrc, title, subtitle, ctaText, ctaLink }) {
  const imgRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const y = window.scrollY * 0.3
        imgRef.current.style.transform = `translateY(${y}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNext = () => {
    const el = sectionRef.current
    if (!el) return
    const bottom = el.getBoundingClientRect().bottom + window.scrollY
    window.scrollTo({ top: bottom, behavior: 'smooth' })
  }

  return (
    <section className="hero" ref={sectionRef}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={title}
        className="hero-img"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            <Link to={ctaLink} className="hero-cta">
              {ctaText}
            </Link>
          </motion.div>
        )}
      </div>
      <button className="scroll-cue" onClick={scrollToNext} aria-label="Scroll down">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v14" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  )
}
