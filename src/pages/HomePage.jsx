import { useEffect, useState } from 'react'

const roles = ['MERN Stack Developer', 'Data Scientist', 'AI/ML Engineer', 'Full-Stack Builder']

function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

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

  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      {/* Hero */}
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:items-center">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block rounded-full bg-orange-100 border border-orange-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-600 mb-4">
            Open to Internships & Projects
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-neutral-900 md:text-6xl">
            Hi, I'm <span className="text-orange-500">Sumit Kumar</span>
          </h1>
          <div className="mt-3 h-10 flex items-center justify-center md:justify-start">
            <span className="text-xl font-semibold text-neutral-600 md:text-2xl">
              {displayed}
              <span className="ml-0.5 inline-block w-0.5 h-6 bg-orange-400 animate-pulse align-middle" />
            </span>
          </div>
          <p className="mt-4 max-w-lg text-neutral-600 text-base leading-relaxed">
            I build production-ready full-stack applications, AI-powered tools, and intelligent
            systems. From idea to deployment — React, Node.js, Python, and beyond.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="mailto:sumitkumarjaimahaakaal@gmail.com"
              className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-orange-200 hover:shadow-lg"
            >
              📧 Email Me
            </a>
            <a
              href="https://github.com/sumitkumar7766"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-orange-400 px-6 py-2.5 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
            >
              GitHub →
            </a>
            <a
              href="https://linkedin.com/in/sumit776693"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-blue-300 px-6 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-orange-300 via-orange-100 to-white opacity-70 blur-xl" />
          <img
            src="https://avatars.githubusercontent.com/u/184242398?v=4"
            alt="Sumit Kumar"
            className="relative h-52 w-52 rounded-full border-4 border-orange-200 object-cover shadow-2xl md:h-64 md:w-64"
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { label: 'Projects Built', value: '12+' },
          { label: 'GitHub Repos', value: '12' },
          { label: 'Technologies', value: '20+' },
          { label: 'CGPA', value: '8.41' },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-orange-200 bg-white/70 backdrop-blur p-5 text-center shadow-sm"
          >
            <p className="text-3xl font-extrabold text-orange-500">{s.value}</p>
            <p className="mt-1 text-xs text-neutral-500 font-medium uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick tech pills */}
      <div className="mt-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
          Core Stack
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'TensorFlow', 'LangChain', 'FastAPI', 'Docker', 'Git'].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage