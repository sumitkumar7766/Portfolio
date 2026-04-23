import { useState, useRef, useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import { title } from 'framer-motion/client'

const projects = [
  {
    title: 'SafaiMitra',
    stack: 'MERN · React Native (Expo) · AI Image Verification · GPS',
    category: 'Full-Stack',
    description: 'Built a municipal sanitation platform where citizens report waste with geotagged images and real-time tracking, with AI-based image verification, REST APIs in Node.js/Express, a Next.js web app, MongoDB, and a React Native (Expo) mobile app.',
    github: 'https://github.com/sumitkumar7766/safaimitra',
    highlights: ['Geotagged reporting', 'AI verification', 'Real-time tracking'],
  },
  {
    title: 'ML Course RAG System',
    stack: 'Python · RAG · LangChain · FAISS · NLP · Flask',
    category: 'AI/ML',
    description: 'Built a RAG-based Q&A system using embeddings and semantic search to answer ML course queries with context-aware LLM responses using Python, LangChain, Ollama, FAISS, and LLM integration.',
    github: 'https://github.com/sumitkumar7766/Machin-Learning-Course-Rag-based-System',
    highlights: ['Embeddings', 'Semantic search', 'Context-aware answers'],
  },
  {
    title: 'Methane Guardian AI',
    stack: 'FastAPI · Next.js · U-Net++ · PINN · GNN · RAG',
    category: 'AI/ML',
    description: 'Developed a methane leak detection solution using satellite data by training U-Net++, PINN, and GNN models with agent-based validation, plus a full-stack product with Next.js frontend and FastAPI backend.',
    github: 'https://github.com/sumitkumar7766/methane-guardian-ai',
    highlights: ['Satellite data', 'Model ensemble', 'FastAPI + Next.js'],
  },
  {
    title: 'House Value Prediction',
    stack: 'Python · Scikit-learn · Pandas · NumPy · Regression',
    category: 'AI/ML',
    description: 'Built a regression-based ML model to predict house prices from structured housing datasets, including data cleaning, feature engineering, EDA, and evaluation with MSE and R² for accuracy optimization.',
    github: 'https://github.com/sumitkumar7766/House_Mean_Value_Predection',
    highlights: ['Feature engineering', 'Model training', 'MSE/R² evaluation'],
  },
  {
    title: 'Vinayak Cyber Zone & Travels',
    stack: 'Full-Stack MERN · Client Project',
    category: 'Full-Stack',
    description: 'Built and sold a full-stack cyber cafe management system to automate customer tracking, service management, and online bookings using React, Node.js, Express, and MongoDB with authentication and efficient data handling.',
    github: 'https://github.com/sumitkumar7766/Vinayak-Cyber-Zone-And-Travels',
    highlights: ['Client delivery', 'Auth-enabled MERN app', 'Booking workflow'],
  },
  {
    title: 'Major Project (EJS) 🚀', stack: 'Node.js · Express · EJS · MongoDB', category: 'Full-Stack',
    description: 'A full-stack web application built with Node.js and EJS templating. Demonstrates backend routing, database connections, and server-side rendering capabilities.',
    github: 'https://github.com/sumitkumar7766/Major-Project',
    highlights: ['SSR with EJS', 'Express routing', 'MongoDB'],
  },
  {
    title: "10+ basic projects",
    stack: 'HTML · CSS · JavaScript',
    category: 'Web',
    description: 'A collection of 10+ basic projects built with HTML, CSS, and JavaScript. Demonstrates frontend development skills and web application capabilities.',
    github: 'https://github.com/sumitkumar7766?tab=repositories',
    highlights: ['HTML', 'CSS', 'JavaScript'],
  }
]

const categories = ['All', 'Web', 'Full-Stack', 'AI/ML', 'Utility', 'Portfolio']
const categoryColors = {
  Web: 'bg-blue-100 text-blue-700',
  'Full-Stack': 'bg-purple-100 text-purple-700',
  'AI/ML': 'bg-green-100 text-green-700',
  Utility: 'bg-yellow-100 text-yellow-700',
  Portfolio: 'bg-pink-100 text-pink-700',
}
const categoryGlows = {
  Web: 'rgba(59,130,246,0.3)',
  'Full-Stack': 'rgba(139,92,246,0.3)',
  'AI/ML': 'rgba(16,185,129,0.3)',
  Utility: 'rgba(245,158,11,0.3)',
  Portfolio: 'rgba(236,72,153,0.3)',
}

function ProjectCard({ project, index }) {
  const [ref, setRef] = useState(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])

  return (
    <article
      ref={setRef}
      className="group flex flex-col rounded-2xl border border-orange-200 bg-white p-5 relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0) scale(1)'
          : `translateY(60px) scale(0.9)`,
        transition: `all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${index * 80}ms`,
        boxShadow: hovered
          ? `0 25px 50px ${categoryGlows[project.category] || 'rgba(249,115,22,0.2)'}, 0 8px 16px rgba(0,0,0,0.08)`
          : '0 2px 8px rgba(0,0,0,0.04)',
        transform: visible
          ? hovered
            ? 'translateY(-10px) scale(1.02) rotate(-0.5deg)'
            : 'translateY(0) scale(1)'
          : 'translateY(60px) scale(0.9)',
      }}
    >
      {/* Animated top border */}
      <div
        className="absolute top-0 left-0 h-1 rounded-t-2xl"
        style={{
          width: hovered ? '100%' : '0%',
          background: `linear-gradient(90deg, #f97316, #fb923c)`,
          transition: 'width 0.4s ease',
        }}
      />

      {/* Glowing bg on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: hovered
            ? `radial-gradient(circle at 50% 0%, ${categoryGlows[project.category] || 'rgba(249,115,22,0.1)'} 0%, transparent 70%)`
            : 'transparent',
          transition: 'background 0.4s ease',
        }}
      />

      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base font-bold text-neutral-900 transition-colors group-hover:text-orange-600 duration-300">
            {project.title}
          </h2>
          <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${categoryColors[project.category]}`}>
            {project.category}
          </span>
        </div>
        <p className="mt-1 text-xs font-medium text-orange-600 uppercase tracking-wide">{project.stack}</p>
        <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.highlights.map((h, hi) => (
            <span
              key={h}
              className="rounded-full border border-orange-100 bg-orange-50 px-2.5 py-0.5 text-xs text-orange-700 transition-all duration-300"
              style={{
                transitionDelay: `${hi * 40}ms`,
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {h}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-all duration-300 hover:gap-3 w-fit"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </article>
  )
}

function ProjectsPage() {
  const [active, setActive] = useState('All')
  const [animating, setAnimating] = useState(false)
  const [displayedProjects, setDisplayedProjects] = useState(projects)

  const handleFilter = (cat) => {
    if (cat === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(cat)
      setDisplayedProjects(cat === 'All' ? projects : projects.filter((p) => p.category === cat))
      setAnimating(false)
    }, 300)
  }

  return (
    <PageWrapper
      title="Projects"
      subtitle={`${projects.length} projects across Web, Full-Stack, AI/ML and more — built and shipped.`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');
        .projects-wrap * { font-family: 'DM Sans', sans-serif; }

        @keyframes filterPop {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes filterBtnBounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .filter-btn {
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          position: relative;
          overflow: hidden;
        }
        .filter-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.2);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .filter-btn:hover::after { transform: scaleX(1); }
        .filter-btn:hover { transform: translateY(-3px) scale(1.05); }
        .filter-btn:active { transform: scale(0.95); }
        .filter-btn-active { animation: filterBtnBounce 0.5s ease; }

        .grid-container {
          transition: opacity 0.3s ease;
        }
      `}</style>

      <div className="projects-wrap">
        {/* Filter tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`filter-btn rounded-full px-4 py-1.5 text-sm font-semibold ${
                active === cat
                  ? 'bg-orange-500 text-white shadow-lg filter-btn-active'
                  : 'border border-orange-200 bg-orange-50 text-orange-700'
              }`}
              style={{
                animation: `filterPop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 60}ms both`,
                boxShadow: active === cat ? '0 8px 25px rgba(249,115,22,0.4)' : '',
              }}
            >
              {cat}
              {active === cat && (
                <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/25 text-xs">
                  {displayedProjects.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="grid-container grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{ opacity: animating ? 0 : 1 }}
        >
          {displayedProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-400" style={{ animation: 'fadeSlideUp 0.6s ease 1s both' }}>
          More projects at{' '}
          <a
            href="https://github.com/sumitkumar7766"
            className="text-orange-500 hover:underline hover:text-orange-600 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            github.com/sumitkumar7766
          </a>
        </p>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </PageWrapper>
  )
}

export default ProjectsPage