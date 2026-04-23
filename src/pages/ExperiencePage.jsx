import { useEffect, useRef, useState } from 'react'
import PageWrapper from '../components/PageWrapper'

const timeline = [
  {
    period: 'Aug 2024 – Present', role: 'B.Tech AI/ML Student',
    org: 'LNCT University, Bhopal', type: 'Education',
    color: 'border-blue-300 bg-blue-50', badge: 'bg-blue-100 text-blue-700', icon: '🎓',
    accentColor: '#3b82f6',
    points: [
      'Pursuing Artificial Intelligence & Machine Learning specialization',
      'Maintaining CGPA of 8.41 in semester exams',
      'Actively building projects alongside academic coursework',
    ],
  },
  {
    period: '2024 – Present', role: 'Freelance Full-Stack & AI/ML Developer',
    org: 'Self-initiated Projects', type: 'Experience',
    color: 'border-orange-300 bg-orange-50', badge: 'bg-orange-100 text-orange-700', icon: '💼',
    accentColor: '#f97316',
    points: [
      'Built and deployed full-stack MERN applications from scratch',
      'Created RAG-based Q&A pipelines using LangChain + FAISS + OpenAI',
      'Developed image verification pipeline with OpenCV and TensorFlow',
      'Designed REST APIs with Node.js/Express with JWT auth and MongoDB',
      'Delivered 6+ client-ready HTML/CSS/JS web projects',
    ],
  },
  {
    period: '2023 – 2024', role: 'Self-Taught Web Developer',
    org: 'Personal Learning', type: 'Learning',
    color: 'border-green-300 bg-green-50', badge: 'bg-green-100 text-green-700', icon: '📚',
    accentColor: '#10b981',
    points: [
      'Mastered HTML5, CSS3, and vanilla JavaScript through project building',
      'Built Amazon clone and e-commerce projects to solidify layout skills',
      'Learned DOM manipulation, event handling, and async JavaScript',
    ],
  },
]

const strengths = [
  { icon: '🏗️', title: 'End-to-End Development', desc: 'From wireframe to deployment — owns the full cycle.' },
  { icon: '🤖', title: 'AI Workflow Integration', desc: 'Integrates LLMs and ML models into real business apps.' },
  { icon: '📐', title: 'API Design & DB Modeling', desc: 'Clean RESTful APIs with structured MongoDB schemas.' },
  { icon: '🚀', title: 'Rapid Prototyping', desc: 'Ships working MVPs fast without sacrificing code quality.' },
  { icon: '🧠', title: 'Problem-Solving', desc: 'Finds practical solutions to complex technical challenges.' },
  { icon: '🔄', title: 'Continuous Learning', desc: 'New tech stack? Operational within days, not months.' },
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

function TimelineCard({ item, index }) {
  const [ref, visible] = useScrollReveal()
  const [expanded, setExpanded] = useState(true)
  const [hovered, setHovered] = useState(false)

  return (
    <article
      ref={ref}
      className={`rounded-2xl border p-6 ${item.color} relative overflow-hidden cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateX(8px) scale(1.01)' : 'translateX(0) scale(1)'
          : 'translateX(-80px)',
        transition: `all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${index * 150}ms`,
        boxShadow: hovered ? `6px 6px 30px ${item.accentColor}30, 0 8px 20px rgba(0,0,0,0.08)` : '0 2px 8px rgba(0,0,0,0.04)',
        borderLeft: `4px solid ${item.accentColor}`,
      }}
    >
      {/* Animated accent line */}
      <div
        className="absolute left-0 top-0 w-1 rounded-l-2xl"
        style={{
          height: hovered ? '100%' : '0%',
          background: item.accentColor,
          transition: 'height 0.5s ease',
        }}
      />

      {/* Floating icon */}
      <div
        className="absolute top-4 right-4 text-4xl opacity-10 select-none pointer-events-none"
        style={{
          transform: hovered ? 'scale(1.4) rotate(10deg)' : 'scale(1) rotate(0)',
          transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {item.icon}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <div>
          <p className="text-lg font-bold text-neutral-900">
            {item.icon} {item.role}
          </p>
          <p className="text-sm font-semibold text-neutral-600">{item.org}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${item.badge}`}>{item.type}</span>
          <span className="text-xs text-neutral-500 font-medium">{item.period}</span>
        </div>
      </div>

      <ul className="space-y-2 mt-2">
        {item.points.map((p, pi) => (
          <li
            key={p}
            className="text-sm text-neutral-700 flex items-start gap-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `all 0.5s ease ${index * 150 + pi * 80 + 300}ms`,
            }}
          >
            <span className="mt-0.5 shrink-0" style={{ color: item.accentColor }}>▸</span>
            {p}
          </li>
        ))}
      </ul>
    </article>
  )
}

function StrengthCard({ s, index }) {
  const [ref, visible] = useScrollReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-orange-200 bg-white p-4 shadow-sm cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-10px) scale(1.05) rotate(-1deg)' : 'translateY(0) scale(1) rotate(0)'
          : 'translateY(40px) scale(0.8)',
        transition: `all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${index * 80}ms`,
        boxShadow: hovered ? '0 20px 40px rgba(249,115,22,0.2)' : '0 2px 6px rgba(0,0,0,0.04)',
      }}
    >
      <p
        className="text-2xl"
        style={{
          display: 'inline-block',
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          transform: hovered ? 'scale(1.4) rotate(15deg)' : 'scale(1) rotate(0)',
        }}
      >
        {s.icon}
      </p>
      <p className="mt-2 font-bold text-neutral-900 text-sm">{s.title}</p>
      <p className="mt-1 text-xs text-neutral-600">{s.desc}</p>
    </div>
  )
}

function ExperiencePage() {
  const [bannerRef, bannerVisible] = useScrollReveal()

  return (
    <PageWrapper
      title="Experience"
      subtitle="Hands-on development journey — from first HTML page to AI-powered full-stack systems."
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');
        .exp-wrap * { font-family: 'DM Sans', sans-serif; }

        @keyframes timelinePulse {
          0%,100% { transform: scaleY(1); opacity: 0.4; }
          50% { transform: scaleY(1.05); opacity: 0.8; }
        }
        @keyframes dotPop {
          0% { transform: scale(0); }
          60% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        @keyframes bannerSlide {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes githubBtn {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
      `}</style>

      <div className="exp-wrap space-y-5">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-300 via-orange-300 to-green-300 hidden md:block" style={{ animation: 'timelinePulse 3s ease-in-out infinite' }} />

          <div className="space-y-5">
            {timeline.map((item, i) => (
              <TimelineCard key={item.role} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Key strengths */}
        <div>
          <h2 className="text-lg font-bold text-neutral-900 mb-4">🔑 Key Strengths</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s, i) => (
              <StrengthCard key={s.title} s={s} index={i} />
            ))}
          </div>
        </div>

        {/* GitHub banner */}
        <div
          ref={bannerRef}
          className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white p-5 flex flex-col sm:flex-row items-center gap-4 justify-between"
          style={{
            opacity: bannerVisible ? 1 : 0,
            transform: bannerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.34,1.56,0.64,1)',
            boxShadow: bannerVisible ? '0 10px 30px rgba(249,115,22,0.1)' : 'none',
          }}
        >
          <div>
            <p className="font-bold text-neutral-900">🏆 GitHub Achievements Earned</p>
            <p className="text-sm text-neutral-600 mt-1">Pull Shark · YOLO · Quickdraw</p>
          </div>
          <a
            href="https://github.com/sumitkumar7766"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-neutral-900 text-white px-5 py-2 text-sm font-semibold transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
            style={{ animation: bannerVisible ? 'githubBtn 2s ease-in-out 1s infinite' : 'none' }}
          >
            View GitHub Profile →
          </a>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ExperiencePage