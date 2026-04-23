import { useEffect, useRef, useState } from 'react'
import PageWrapper from '../components/PageWrapper'

const highlights = [
  '🎓 B.Tech AI/ML at LNCT University — CGPA 8.41 (2024–2028)',
  '📚 XII from SSV College Kahalgaon, BSEB — 68.2% (2024)',
  '🤖 Specialized in building RAG pipelines, LLM apps & AI-integrated MERN systems',
  '🌐 Comfortable with end-to-end development: UI → API → Database → Deployment',
  '🏆 GitHub Achievements: Pull Shark, YOLO, Quickdraw',
  '📍 Based in Bhopal, Madhya Pradesh, India',
  '🔍 Actively seeking internships in Full-Stack / AI / ML domains',
]

const traits = [
  { icon: '⚡', title: 'Fast Learner', desc: 'Picks up new frameworks and tools quickly — from LangChain to Docker in weeks.' },
  { icon: '🏗️', title: 'Builder Mindset', desc: 'Prefers shipping real projects over tutorials. 12+ public repos and counting.' },
  { icon: '🤝', title: 'Team Collaborator', desc: 'Open to collaborations, pair programming, and contributing to open source.' },
  { icon: '🎯', title: 'Practical Focus', desc: 'Every project solves a real problem — not just a portfolio piece.' },
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

function RevealDiv({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const [ref, visible] = useScrollReveal()
  const transforms = { up: 'translateY(50px)', left: 'translateX(-50px)', right: 'translateX(50px)', scale: 'scale(0.7)' }
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) translateX(0) scale(1)' : transforms[direction],
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function AboutPage() {
  return (
    <PageWrapper title="About Me" subtitle="B.Tech AI/ML student passionate about building things that work in the real world.">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;600&display=swap');
        .about-wrap * { font-family: 'DM Sans', sans-serif; }

        @keyframes morphBg {
          0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
        }
        @keyframes floatBounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glowBorder {
          0%,100% { box-shadow: 0 0 15px rgba(249,115,22,0.2); }
          50% { box-shadow: 0 0 35px rgba(249,115,22,0.5), 0 0 60px rgba(249,115,22,0.15); }
        }
        @keyframes slideRight {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmerBg {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .trait-card {
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          cursor: default;
        }
        .trait-card:hover {
          transform: translateY(-12px) rotate(-2deg) scale(1.05);
          box-shadow: 0 25px 50px rgba(249,115,22,0.25);
          border-color: #f97316;
          background: linear-gradient(135deg, #fff7ed, #fff);
        }
        .trait-icon {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
          display: inline-block;
        }
        .trait-card:hover .trait-icon {
          transform: scale(1.4) rotate(15deg);
          animation: floatBounce 1s ease-in-out infinite;
        }
        .highlight-item {
          transition: all 0.3s ease;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: default;
        }
        .highlight-item:hover {
          background: rgba(249,115,22,0.1);
          transform: translateX(8px);
          padding-left: 16px;
        }
        .bio-card {
          animation: glowBorder 4s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        .bio-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent 70%, rgba(249,115,22,0.08) 100%);
          animation: spin 8s linear infinite;
          pointer-events: none;
        }
        .edu-badge {
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .edu-badge:hover {
          transform: scale(1.1);
        }
        .name-shimmer {
          background: linear-gradient(90deg, #f97316, #fb923c, #fdba74, #fb923c, #f97316);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerBg 3s linear infinite;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
        }
      `}</style>

      <div className="about-wrap space-y-6">
        {/* Bio + Education */}
        <RevealDiv>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bio-card md:col-span-2 rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <h2 className="text-xl font-bold text-neutral-900">Who Am I?</h2>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                I'm <span className="name-shimmer text-lg">Sumit Kumar</span>, a first-year B.Tech student specializing in Artificial
                Intelligence & Machine Learning at LNCT University, Bhopal. I combine MERN stack
                development with AI/ML to build smart, production-ready applications.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                My journey started with HTML/CSS clones and quickly evolved into full-stack apps,
                RAG-based Q&A systems, and ML pipelines. I believe in learning by building — which is
                why I have 12+ live repositories on GitHub.
              </p>
              <p className="mt-3 text-neutral-700 leading-relaxed">
                Currently, I'm sharpening my skills in LLM integration, API design, and scalable
                backend systems — with an eye on internships in the AI/ML and full-stack space.
              </p>
            </div>

            <RevealDiv direction="right" delay={200}>
              <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm h-full" style={{ animation: 'glowBorder 4s ease-in-out 2s infinite' }}>
                <h2 className="text-lg font-bold text-neutral-900 mb-4">🎓 Education</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm">B.Tech — AI & ML</p>
                    <p className="text-xs text-orange-600 font-medium">LNCT University, Bhopal</p>
                    <p className="text-xs text-neutral-500">Aug 2024 – May 2028</p>
                    <span className="edu-badge mt-1 inline-block rounded-full bg-green-100 text-green-700 text-xs px-2 py-0.5 font-semibold">CGPA: 8.41</span>
                  </div>
                  <hr className="border-orange-100" />
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm">Class XII — Science</p>
                    <p className="text-xs text-orange-600 font-medium">SSV College Kahalgaon, BSEB</p>
                    <p className="text-xs text-neutral-500">2022 – 2024</p>
                    <span className="edu-badge mt-1 inline-block rounded-full bg-blue-100 text-blue-700 text-xs px-2 py-0.5 font-semibold">68.2%</span>
                  </div>
                </div>
              </div>
            </RevealDiv>
          </div>
        </RevealDiv>

        {/* Traits */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {traits.map((t, i) => (
            <RevealDiv key={t.title} delay={i * 120} direction="up">
              <div className="trait-card rounded-2xl border border-orange-200 bg-white p-5 shadow-sm h-full">
                <p className="text-2xl trait-icon">{t.icon}</p>
                <p className="mt-2 font-bold text-neutral-900">{t.title}</p>
                <p className="mt-1 text-sm text-neutral-600">{t.desc}</p>
              </div>
            </RevealDiv>
          ))}
        </div>

        {/* Highlights */}
        <RevealDiv direction="up" delay={100}>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6" style={{ animation: 'glowBorder 5s ease-in-out 1s infinite' }}>
            <h2 className="text-lg font-bold text-neutral-900 mb-4">⭐ Quick Highlights</h2>
            <ul className="space-y-2">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className="highlight-item text-neutral-700 text-sm flex items-start gap-2"
                  style={{
                    opacity: 0,
                    animation: `fadeInRight 0.5s ease ${300 + i * 80}ms forwards`,
                  }}
                >
                  <span className="shrink-0">{item.slice(0, 2)}</span>
                  <span>{item.slice(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealDiv>
      </div>

      <style>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </PageWrapper>
  )
}

export default AboutPage