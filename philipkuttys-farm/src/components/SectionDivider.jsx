export default function SectionDivider() {
  return (
    <div style={{
      width: '80px',
      margin: 'var(--space-lg) auto',
      opacity: 0.6,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <svg
        width="80"
        height="40"
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Central lotus motif */}
        <g fill="var(--color-gold)">
          {/* Center petal */}
          <path d="M40 5 C38 14, 34 20, 40 26 C46 20, 42 14, 40 5Z" />
          {/* Left petal */}
          <path d="M40 26 C32 22, 25 18, 22 24 C27 28, 34 26, 40 26Z" />
          {/* Right petal */}
          <path d="M40 26 C48 22, 55 18, 58 24 C53 28, 46 26, 40 26Z" />
          {/* Lower left petal */}
          <path d="M40 26 C34 30, 28 34, 30 38 C35 36, 38 31, 40 26Z" />
          {/* Lower right petal */}
          <path d="M40 26 C46 30, 52 34, 50 38 C45 36, 42 31, 40 26Z" />
          {/* Center dot */}
          <circle cx="40" cy="26" r="2" />
          {/* Decorative lines */}
          <line x1="2" y1="26" x2="16" y2="26" stroke="var(--color-gold)" strokeWidth="0.8" />
          <line x1="64" y1="26" x2="78" y2="26" stroke="var(--color-gold)" strokeWidth="0.8" />
          <circle cx="2" cy="26" r="1.2" />
          <circle cx="78" cy="26" r="1.2" />
        </g>
      </svg>
    </div>
  )
}
