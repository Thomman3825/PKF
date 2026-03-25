import { images } from '../data/images'
import '../styles/hero.css'

export default function PageHero({ title, imageSrc }) {
  const src = imageSrc || images.hero

  return (
    <section className="page-hero">
      <img src={src} alt={title} className="page-hero-img" />
      <div className="page-hero-overlay" />
      <h1 className="page-hero-title">{title}</h1>
    </section>
  )
}
