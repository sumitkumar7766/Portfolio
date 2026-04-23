import { useEffect, useRef, useState } from 'react'
import PageWrapper from '../components/PageWrapper'

const contacts = [
  {
    icon: '📧', label: 'Email',
    value: 'sumitkumarjaimahaakaal@gmail.com',
    display: 'sumitkumarjaimahaakaal@gmail.com',
    href: 'mailto:sumitkumarjaimahaakaal@gmail.com',
    color: 'border-red-200 bg-red-50 hover:bg-red-100',
    textColor: 'text-red-700', accentColor: '#ef4444',
  },
  {
    icon: '💼', label: 'LinkedIn',
    value: 'linkedin.com/in/sumit776693',
    display: 'linkedin.com/in/sumit776693',
    href: 'https://linkedin.com/in/sumit776693',
    color: 'border-blue-200 bg-blue-50 hover:bg-blue-100',
    textColor: 'text-blue-700', accentColor: '#3b82f6',
  },
  {
    icon: '🐙', label: 'GitHub',
    value: 'github.com/sumitkumar7766',
    display: 'github.com/sumitkumar7766',
    href: 'https://github.com/sumitkumar7766',
    color: 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100',
    textColor: 'text-neutral-700', accentColor: '#374151',
  },
  {
    icon: '📱', label: 'Phone',
    value: '+91 6204414757',
    display: '+91 6204414757',
    href: 'tel:+916204414757',
    color: 'border-green-200 bg-green-50 hover:bg-green-100',
    textColor: 'text-green-700', accentColor: '#10b981',
  },
  {
    icon: '📍', label: 'Location',
    value: 'Bhopal, Madhya Pradesh, India',
    display: 'Bhopal, MP, India',
    href: null,
    color: 'border-orange-200 bg-orange-50',
    textColor: 'text-orange-700', accentColor: '#f97316',
  },
]

function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

function ContactCard({ c, index }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [ref, visible] = useScrollReveal()

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 600)
  }

  const inner = (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={c.href ? handleClick : undefined}
      className={`rounded-2xl border p-5 relative overflow-hidden`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? clicked
            ? 'scale(0.95)'
            : hovered
              ? 'translateY(-12px) scale(1.05) rotate(-1deg)'
              : 'translateY(0) scale(1) rotate(0)'
          : `translateY(60px) scale(0.8) rotate(${index % 2 === 0 ? -5 : 5}deg)`,
        transition: `all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${index * 100}ms`,
        boxShadow: hovered ? `0 20px 50px ${c.accentColor}30, 0 8px 15px rgba(0,0,0,0.08)` : '0 2px 6px rgba(0,0,0,0.04)',
        borderColor: hovered ? c.accentColor : undefined,
        background: hovered
          ? `linear-gradient(135deg, ${c.accentColor}10, white)`
          : undefined,
        cursor: c.href ? 'pointer' : 'default',
      }}
    >
      {/* Ripple on click */}
      {clicked && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${c.accentColor}30 0%, transparent 70%)`,
            animation: 'rippleOut 0.6s ease forwards',
          }}
        />
      )}

      {/* Glowing corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 rounded-bl-full pointer-events-none"
        style={{
          background: hovered ? `${c.accentColor}20` : 'transparent',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Animated icon */}
      <p
        className="text-2xl"
        style={{
          display: 'inline-block',
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          transform: hovered ? 'scale(1.4) rotate(10deg)' : 'scale(1) rotate(0)',
        }}
      >
        {c.icon}
      </p>

      <h2 className="mt-2 text-base font-bold text-neutral-900 transition-colors duration-300" style={{ color: hovered ? c.accentColor : undefined }}>
        {c.label}
      </h2>
      <p
        className={`mt-1 text-sm font-medium ${c.textColor} break-all`}
        style={{
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform 0.3s ease',
        }}
      >
        {c.display}
      </p>

      {/* Arrow indicator for links */}
      {c.href && (
        <div
          className="absolute bottom-4 right-4 text-sm font-bold"
          style={{
            color: c.accentColor,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 0.3s ease',
          }}
        >
          →
        </div>
      )}
    </div>
  )

  if (c.href) {
    return (
      <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ display: 'block' }}>
        {inner}
      </a>
    )
  }
  return inner
}

function ContactPage() {
  const [ctaRef, ctaVisible] = useScrollReveal()
  const [noteRef, noteVisible] = useScrollReveal()
  const [ctaHovered, setCtaHovered] = useState(false)

  return (
    <PageWrapper
      title="Contact"
      subtitle="Open to internships, freelance projects, and collaborations. Let's build something great together."
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');
        .contact-wrap * { font-family: 'DM Sans', sans-serif; }

        @keyframes rippleOut {
          from { opacity: 1; transform: scale(0.8); }
          to { opacity: 0; transform: scale(1.2); }
        }
        @keyframes ctaGlow {
          0%,100% { box-shadow: 0 0 20px rgba(249,115,22,0.3), 0 8px 30px rgba(249,115,22,0.2); }
          50% { box-shadow: 0 0 50px rgba(249,115,22,0.6), 0 15px 50px rgba(249,115,22,0.35); }
        }
        @keyframes emailBtnPulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        @keyframes waveBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes timerTick {
          0%,100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes noteFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .cta-card {
          background: linear-gradient(135deg, #f97316, #fb923c, #f97316);
          background-size: 200% 200%;
          animation: ctaGlow 3s ease-in-out infinite, waveBg 6s ease infinite;
        }
        .email-cta {
          animation: emailBtnPulse 2s ease-in-out infinite;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .email-cta:hover {
          transform: scale(1.1) translateY(-3px) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          animation: none;
        }
        .note-card {
          animation: noteFloat 3s ease-in-out infinite;
        }
        .timer-dot {
          animation: timerTick 1s ease-in-out infinite;
        }
      `}</style>

      <div className="contact-wrap space-y-6">
        {/* CTA card */}
        <div
          ref={ctaRef}
          className="cta-card rounded-2xl border border-orange-300 p-6 text-white shadow-lg"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0) scale(1)' : 'translateY(-40px) scale(0.9)',
            transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span style={{ display: 'inline-block', animation: ctaVisible ? 'bounceWave 1s ease 0.5s both' : 'none' }}>👋</span>
            Let's Connect!
          </h2>
          <p className="mt-2 text-orange-100 text-sm leading-relaxed max-w-xl">
            I'm currently a B.Tech AI/ML student at LNCT University and actively looking for
            internship opportunities in Full-Stack, AI/ML, or Data Science. Whether you have a
            project idea or want to collaborate — I'd love to hear from you.
          </p>
          <a
            href="mailto:sumitkumarjaimahaakaal@gmail.com"
            className="email-cta mt-4 inline-block rounded-full bg-white text-orange-600 px-6 py-2 text-sm font-bold shadow"
          >
            📧 Send Me an Email
          </a>
        </div>

        {/* Contact grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c, i) => (
            <ContactCard key={c.label} c={c} index={i} />
          ))}
        </div>

        {/* Response time note */}
        <div
          ref={noteRef}
          className="note-card rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-4 text-center"
          style={{
            opacity: noteVisible ? 1 : 0,
            transform: noteVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.3s',
          }}
        >
          <p className="text-sm text-neutral-600">
            <span className="timer-dot">⏱️</span> Typical response time:{' '}
            <strong className="text-orange-600">within 24 hours</strong> via Email or LinkedIn.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes bounceWave {
          0%,100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
      `}</style>
    </PageWrapper>
  )
}

export default ContactPage