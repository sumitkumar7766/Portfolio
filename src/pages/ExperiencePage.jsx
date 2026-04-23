import PageWrapper from '../components/PageWrapper'

const timeline = [
  {
    period: 'Aug 2024 – Present',
    role: 'B.Tech AI/ML Student',
    org: 'LNCT University, Bhopal',
    type: 'Education',
    color: 'border-blue-300 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    icon: '🎓',
    points: [
      'Pursuing Artificial Intelligence & Machine Learning specialization',
      'Maintaining CGPA of 8.41 in semester exams',
      'Actively building projects alongside academic coursework',
    ],
  },
  {
    period: '2024 – Present',
    role: 'Freelance Full-Stack & AI/ML Developer',
    org: 'Self-initiated Projects',
    type: 'Experience',
    color: 'border-orange-300 bg-orange-50',
    badge: 'bg-orange-100 text-orange-700',
    icon: '💼',
    points: [
      'Built and deployed full-stack MERN applications from scratch',
      'Created RAG-based Q&A pipelines using LangChain + FAISS + OpenAI',
      'Developed image verification pipeline with OpenCV and TensorFlow',
      'Designed REST APIs with Node.js/Express with JWT auth and MongoDB',
      'Delivered 6+ client-ready HTML/CSS/JS web projects',
    ],
  },
  {
    period: '2023 – 2024',
    role: 'Self-Taught Web Developer',
    org: 'Personal Learning',
    type: 'Learning',
    color: 'border-green-300 bg-green-50',
    badge: 'bg-green-100 text-green-700',
    icon: '📚',
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

function ExperiencePage() {
  return (
    <PageWrapper
      title="Experience"
      subtitle="Hands-on development journey — from first HTML page to AI-powered full-stack systems."
    >
      {/* Timeline */}
      <div className="space-y-5 mb-8">
        {timeline.map((item) => (
          <article key={item.role} className={`rounded-2xl border p-6 ${item.color}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <p className="text-lg font-bold text-neutral-900">
                  {item.icon} {item.role}
                </p>
                <p className="text-sm font-semibold text-neutral-600">{item.org}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${item.badge}`}>
                  {item.type}
                </span>
                <span className="text-xs text-neutral-500 font-medium">{item.period}</span>
              </div>
            </div>
            <ul className="space-y-1.5 mt-2">
              {item.points.map((p) => (
                <li key={p} className="text-sm text-neutral-700 flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5 shrink-0">▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Key strengths */}
      <div>
        <h2 className="text-lg font-bold text-neutral-900 mb-4">🔑 Key Strengths</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => (
            <div key={s.title} className="rounded-2xl border border-orange-200 bg-white p-4 shadow-sm">
              <p className="text-2xl">{s.icon}</p>
              <p className="mt-2 font-bold text-neutral-900 text-sm">{s.title}</p>
              <p className="mt-1 text-xs text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub stats banner */}
      <div className="mt-6 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white p-5 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <div>
          <p className="font-bold text-neutral-900">🏆 GitHub Achievements Earned</p>
          <p className="text-sm text-neutral-600 mt-1">Pull Shark · YOLO · Quickdraw</p>
        </div>
        <a
          href="https://github.com/sumitkumar7766"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-neutral-900 text-white px-5 py-2 text-sm font-semibold hover:bg-neutral-700 transition"
        >
          View GitHub Profile →
        </a>
      </div>
    </PageWrapper>
  )
}

export default ExperiencePage