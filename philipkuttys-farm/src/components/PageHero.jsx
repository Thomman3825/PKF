import { useRef } from 'react'
import { images } from '../data/images'
import '../styles/hero.css'

export default function PageHero({ title, imageSrc, imgPosition }) {
  const src = imageSrc || images.hero
  const sectionRef = useRef(null)

  const scrollToNext = () => {
    const el = sectionRef.current
    if (!el) return
    const bottom = el.getBoundingClientRect().bottom + window.scrollY
    window.scrollTo({ top: bottom, behavior: 'smooth' })
  }

  return (
    <section className="page-hero" ref={sectionRef}>
      <img
        src={src}
        alt={title}
        className="page-hero-img"
        style={imgPosition ? { objectPosition: imgPosition } : undefined}
      />
      <div className="page-hero-overlay" />
      <h1 className="page-hero-title">{title}</h1>
      <button className="scroll-cue" onClick={scrollToNext} aria-label="Scroll down">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v14" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  )
}
