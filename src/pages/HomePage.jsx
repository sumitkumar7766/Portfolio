import { useEffect, useState, useRef } from 'react'

const roles = ['MERN Stack Developer', 'Data Scientist', 'AI/ML Engineer', 'Full-Stack Builder']

const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.4 + 0.1,
}))

function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1400)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  const parallaxX = (mousePos.x - 0.5) * 30
  const parallaxY = (mousePos.y - 0.5) * 30

  return (
    <div className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden ps-4 pe-4" ref={heroRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,600;1,300&display=swap');

        .home-wrap * { font-family: 'DM Sans', sans-serif; }
        .home-wrap h1 { font-family: 'Syne', sans-serif; }
        .home-wrap .hero-name { font-family: 'Syne', sans-serif; font-weight: 800; }

        @keyframes floatUp {
          0% { transform: translateY(100px) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-120px) scale(1.2); opacity: 0; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes morphBg {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 70% 30% / 40% 50% 60% 50%; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.6); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(249,115,22,0.3), 0 0 60px rgba(249,115,22,0.1); }
          50% { box-shadow: 0 0 40px rgba(249,115,22,0.6), 0 0 100px rgba(249,115,22,0.25); }
        }
        @keyframes borderSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes tagFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes ringExpand {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
        @keyframes spin360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249,115,22,0.8), rgba(251,146,60,0.2));
          pointer-events: none;
          animation: floatUp linear infinite;
        }
        .blob {
          position: absolute;
          background: radial-gradient(circle at 30% 40%, rgba(249,115,22,0.15) 0%, transparent 70%);
          animation: morphBg 8s ease-in-out infinite;
        }
        .avatar-wrapper {
          position: relative;
          animation: fadeSlideRight 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.3s both;
        }
        .avatar-glow {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          animation: glowPulse 3s ease-in-out infinite;
          background: transparent;
        }
        .avatar-ring {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          border: 2px dashed rgba(249,115,22,0.4);
          animation: spin360 15s linear infinite;
        }
        .avatar-ring2 {
          position: absolute;
          inset: -36px;
          border-radius: 50%;
          border: 1px solid rgba(249,115,22,0.2);
          animation: spin360 25s linear infinite reverse;
        }
        .avatar-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #f97316;
          top: 10px;
          right: 10px;
          animation: glowPulse 2s ease-in-out infinite;
        }
        .hero-title-line {
          animation: fadeSlideLeft 0.8s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .hero-badge {
          animation: fadeSlideUp 0.6s ease 0.1s both;
        }
        .hero-sub {
          animation: fadeSlideUp 0.6s ease 0.5s both;
        }
        .hero-ctas {
          animation: fadeSlideUp 0.6s ease 0.7s both;
        }
        .stat-card {
          animation: countUp 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(249,115,22,0.2);
        }
        .tech-tag {
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          animation: tagFloat ease-in-out infinite;
        }
        .tech-tag:hover {
          transform: translateY(-4px) scale(1.1) !important;
          background: #f97316 !important;
          color: white !important;
          border-color: #f97316 !important;
          box-shadow: 0 8px 20px rgba(249,115,22,0.4);
        }
        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 35px rgba(249,115,22,0.5);
        }
        .typing-cursor {
          animation: glowPulse 1s ease-in-out infinite;
          display: inline-block;
          width: 3px;
          height: 1.2em;
          background: #f97316;
          margin-left: 3px;
          vertical-align: middle;
          border-radius: 2px;
        }
        .ring-pulse {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid rgba(249,115,22,0.5);
          top: 50%;
          left: 50%;
          animation: ringExpand 2.5s ease-out infinite;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #f97316 0%, #fb923c 30%, #fdba74 50%, #fb923c 70%, #f97316 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <div className="home-wrap relative">
        {/* Floating background particles */}
        {floatingParticles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              bottom: '-20px',
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}

        {/* Morphing blob bg */}
        <div className="blob" style={{ width: 600, height: 600, top: -100, right: -200, zIndex: 0 }} />
        <div className="blob" style={{ width: 400, height: 400, bottom: -100, left: -150, zIndex: 0, animationDelay: '4s' }} />

        {/* Hero Section */}
        <div
          className="relative z-10 flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:items-center"
          style={mounted ? { transform: `translate(${parallaxX * 0.05}px, ${parallaxY * 0.05}px)` } : {}}
        >
          <div className="flex-1 text-center md:text-left">
            <div className="hero-badge">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-600 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                Open to Internships & Projects
              </span>
            </div>

            <h1 className="hero-title-line text-4xl font-extrabold leading-tight text-neutral-900 md:text-6xl" style={{ animationDelay: '0.2s' }}>
              Hi, I'm{' '}
              <span className="shimmer-text hero-name">Sumit Kumar</span>
            </h1>

            <div className="mt-3 h-12 flex items-center justify-center md:justify-start" style={{ animation: 'fadeSlideUp 0.6s ease 0.4s both' }}>
              <span className="text-xl font-semibold text-neutral-600 md:text-2xl flex items-center">
                {displayed}
                <span className="typing-cursor" />
              </span>
            </div>

            <p className="hero-sub mt-4 max-w-lg text-neutral-600 text-base leading-relaxed">
              I build production-ready full-stack applications, AI-powered tools, and intelligent
              systems. From idea to deployment — React, Node.js, Python, and beyond.
            </p>

            <div className="hero-ctas mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="mailto:sumitkumarjaimahaakaal@gmail.com"
                className="cta-btn rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md"
              >
                📧 Email Me
              </a>
              <a
                href="https://github.com/sumitkumar7766"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-orange-400 px-6 py-2.5 text-sm font-semibold text-orange-700 transition hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-105 hover:-translate-y-1 duration-300"
              >
                GitHub →
              </a>
              <a
                href="https://linkedin.com/in/sumit776693"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-blue-300 px-6 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 hover:-translate-y-1 duration-300"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Avatar with rings */}
          <div className="avatar-wrapper relative flex-shrink-0" style={{ width: 280, height: 280 }}>
            <div className="avatar-ring2" />
            <div className="avatar-ring">
              {/* Dot on rotating ring */}
              <div className="avatar-dot" />
            </div>
            <div className="avatar-glow" />
            <div className="relative ring-pulse" style={{ top: '50%', left: '50%' }} />
            <div className="relative ring-pulse" style={{ top: '50%', left: '50%', animationDelay: '1.2s' }} />
            <img
              src="https://avatars.githubusercontent.com/u/184242398?v=4"
              alt="Sumit Kumar"
              className="relative h-52 w-52 rounded-full border-4 border-orange-200 object-cover shadow-2xl md:h-64 md:w-64"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translate(${parallaxX * -0.15}px, ${parallaxY * -0.15}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 relative z-10">
          {[
            { label: 'Projects Built', value: '12+', emoji: '🚀' },
            { label: 'GitHub Repos', value: '12', emoji: '🐙' },
            { label: 'Technologies', value: '20+', emoji: '⚡' },
            { label: 'CGPA', value: '8.41', emoji: '🎓' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="stat-card rounded-2xl border border-orange-200 bg-white/80 backdrop-blur p-5 text-center shadow-sm cursor-default"
              style={{ animationDelay: `${0.8 + i * 0.1}s` }}
            >
              <p className="text-2xl mb-1">{s.emoji}</p>
              <p className="text-3xl font-extrabold text-orange-500">{s.value}</p>
              <p className="mt-1 text-xs text-neutral-500 font-medium uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="mt-10 relative z-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4" style={{ animation: 'fadeSlideUp 0.6s ease 1.2s both' }}>
            Core Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'TensorFlow', 'LangChain', 'FastAPI', 'Docker', 'Git'].map(
              (tech, i) => (
                <span
                  key={tech}
                  className="tech-tag rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 cursor-default"
                  style={{
                    animationDuration: `${2 + (i % 4) * 0.5}s`,
                    animationDelay: `${i * 0.15}s`,
                    animation: `tagFloat ${2 + (i % 4) * 0.5}s ease-in-out ${i * 0.15}s infinite`,
                  }}
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage