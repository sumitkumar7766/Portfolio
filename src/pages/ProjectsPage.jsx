import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'

const projects = [
  {
    title: 'Rock-Mart 🛒',
    stack: 'HTML · CSS · JavaScript',
    category: 'Web',
    description:
      'A full shopping website where users can search products, add to cart, and place orders. Employee login panel with admin-level access. Fully functional frontend e-commerce clone.',
    github: 'https://github.com/sumitkumar7766/Rock-Mart',
    highlights: ['Cart system', 'Employee login', 'Product search'],
  },
  {
    title: 'Clone of Amazon 🛍️',
    stack: 'HTML · CSS',
    category: 'Web',
    description:
      'Pixel-perfect Amazon homepage clone built with pure HTML and CSS. Includes navbar, hero banner, product sections, and footer — showcasing strong layout fundamentals.',
    github: 'https://github.com/sumitkumar7766/Clone-Of-Amazon',
    highlights: ['Responsive layout', 'CSS Flexbox/Grid', 'UI accuracy'],
  },
  {
    title: 'Converter Tools ⚙️',
    stack: 'HTML · CSS · JavaScript',
    category: 'Utility',
    description:
      'Multi-tool web app for area, perimeter, volume calculations and unit conversions. All functions are live and interactive — useful for students and professionals.',
    github: 'https://github.com/sumitkumar7766/Converter-Tools',
    highlights: ['Math utilities', 'Unit converter', 'Area/Volume calc'],
  },
  {
    title: 'Attendance Sheet 📋',
    stack: 'HTML · CSS · JavaScript',
    category: 'Utility',
    description:
      'Employee attendance management system. Employees log in with credentials and mark attendance. Built for real company usage with structured data handling.',
    github: 'https://github.com/sumitkumar7766/Attendense-Sheet',
    highlights: ['Employee login', 'Attendance tracking', 'Data management'],
  },
  {
    title: 'Personal Portfolio 🧑‍💻',
    stack: 'HTML · CSS',
    category: 'Portfolio',
    description:
      'Early personal portfolio project showcasing profile, skills, and projects. Foundation of the portfolio-building journey that led to this current React-based version.',
    github: 'https://github.com/sumitkumar7766/Persoal-Potrate',
    highlights: ['Clean design', 'Responsive', 'Self-introduction'],
  },
  {
    title: 'Major Project (EJS) 🚀',
    stack: 'Node.js · Express · EJS · MongoDB',
    category: 'Full-Stack',
    description:
      'A full-stack web application built with Node.js and EJS templating. Demonstrates backend routing, database connections, and server-side rendering capabilities.',
    github: 'https://github.com/sumitkumar7766/Major-Project',
    highlights: ['SSR with EJS', 'Express routing', 'MongoDB'],
  },
  {
    title: 'RAG Q&A System 🤖',
    stack: 'Python · LangChain · FAISS · OpenAI',
    category: 'AI/ML',
    description:
      'Retrieval-Augmented Generation pipeline for intelligent document Q&A. Upload documents and ask questions — the system retrieves context and generates accurate answers.',
    github: 'https://github.com/sumitkumar7766',
    highlights: ['LangChain', 'Vector search', 'Context-aware answers'],
  },
  {
    title: 'Image Verification Pipeline 🖼️',
    stack: 'Python · OpenCV · TensorFlow',
    category: 'AI/ML',
    description:
      'AI-powered image verification system for automated quality checks. Processes images through a classification pipeline and flags anomalies for review.',
    github: 'https://github.com/sumitkumar7766',
    highlights: ['OpenCV processing', 'CNN classification', 'Automated flags'],
  },
]

const categories = ['All', 'Web', 'Full-Stack', 'AI/ML', 'Utility', 'Portfolio']

const categoryColors = {
  Web: 'bg-blue-100 text-blue-700',
  'Full-Stack': 'bg-purple-100 text-purple-700',
  'AI/ML': 'bg-green-100 text-green-700',
  Utility: 'bg-yellow-100 text-yellow-700',
  Portfolio: 'bg-pink-100 text-pink-700',
}

function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <PageWrapper
      title="Projects"
      subtitle={`${projects.length} projects across Web, Full-Stack, AI/ML and more — built and shipped.`}
    >
      {/* Filter tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              active === cat
                ? 'bg-orange-500 text-white shadow'
                : 'border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-orange-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-base font-bold text-neutral-900">{project.title}</h2>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${categoryColors[project.category]}`}>
                {project.category}
              </span>
            </div>
            <p className="mt-1 text-xs font-medium text-orange-600 uppercase tracking-wide">
              {project.stack}
            </p>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">
              {project.description}
            </p>
            {/* Highlights */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.highlights.map((h) => (
                <span key={h} className="rounded-full border border-orange-100 bg-orange-50 px-2.5 py-0.5 text-xs text-orange-700">
                  {h}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-neutral-400">
        More projects at{' '}
        <a href="https://github.com/sumitkumar7766" className="text-orange-500 hover:underline" target="_blank" rel="noreferrer">
          github.com/sumitkumar7766
        </a>
      </p>
    </PageWrapper>
  )
}

export default ProjectsPage