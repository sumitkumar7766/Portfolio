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
  {
    icon: '⚡',
    title: 'Fast Learner',
    desc: 'Picks up new frameworks and tools quickly — from LangChain to Docker in weeks.',
  },
  {
    icon: '🏗️',
    title: 'Builder Mindset',
    desc: 'Prefers shipping real projects over tutorials. 12+ public repos and counting.',
  },
  {
    icon: '🤝',
    title: 'Team Collaborator',
    desc: 'Open to collaborations, pair programming, and contributing to open source.',
  },
  {
    icon: '🎯',
    title: 'Practical Focus',
    desc: 'Every project solves a real problem — not just a portfolio piece.',
  },
]

function AboutPage() {
  return (
    <PageWrapper title="About Me" subtitle="B.Tech AI/ML student passionate about building things that work in the real world.">
      
      {/* Bio + Profile grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <h2 className="text-xl font-bold text-neutral-900">Who Am I?</h2>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            I'm <strong>Sumit Kumar</strong>, a first-year B.Tech student specializing in Artificial
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

        {/* Education card */}
        <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-neutral-900 mb-4">🎓 Education</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-neutral-800 text-sm">B.Tech — AI & ML</p>
              <p className="text-xs text-orange-600 font-medium">LNCT University, Bhopal</p>
              <p className="text-xs text-neutral-500">Aug 2024 – May 2028</p>
              <span className="mt-1 inline-block rounded-full bg-green-100 text-green-700 text-xs px-2 py-0.5 font-semibold">CGPA: 8.41</span>
            </div>
            <hr className="border-orange-100" />
            <div>
              <p className="font-semibold text-neutral-800 text-sm">Class XII — Science</p>
              <p className="text-xs text-orange-600 font-medium">SSV College Kahalgaon, BSEB</p>
              <p className="text-xs text-neutral-500">2022 – 2024</p>
              <span className="mt-1 inline-block rounded-full bg-blue-100 text-blue-700 text-xs px-2 py-0.5 font-semibold">68.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Traits */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((t) => (
          <div key={t.title} className="rounded-2xl border border-orange-200 bg-white p-5 shadow-sm">
            <p className="text-2xl">{t.icon}</p>
            <p className="mt-2 font-bold text-neutral-900">{t.title}</p>
            <p className="mt-1 text-sm text-neutral-600">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6">
        <h2 className="text-lg font-bold text-neutral-900 mb-4">⭐ Quick Highlights</h2>
        <ul className="space-y-2">
          {highlights.map((item) => (
            <li key={item} className="text-neutral-700 text-sm flex items-start gap-2">
              <span className="shrink-0">{item.slice(0, 2)}</span>
              <span>{item.slice(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  )
}

export default AboutPage