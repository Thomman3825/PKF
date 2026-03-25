import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import ScrollReveal from './ScrollReveal'
import '../styles/gallery.css'

export default function PhotoGallery({ images }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = images.map(img => ({ src: img.src, alt: img.alt }))

  return (
    <>
      <div className="photo-gallery">
        {images.map((img, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div
              className="gallery-item"
              onClick={() => { setIndex(i); setOpen(true) }}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && (setIndex(i), setOpen(true))}
              aria-label={`View ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item-overlay" />
            </div>
          </ScrollReveal>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </>
  )
}
