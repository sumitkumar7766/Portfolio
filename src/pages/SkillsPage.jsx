import { useEffect, useRef, useState } from 'react'
import PageWrapper from '../components/PageWrapper'

const skillCategories = [
  {
    category: 'Programming Languages', icon: '💻',
    color: 'border-blue-200 bg-blue-50', tagColor: 'bg-blue-100 text-blue-800',
    skills: ['java', 'C++','Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS'],
  },
  {
    category: 'Frontend & Mobile', icon: '🎨',
    color: 'border-pink-200 bg-pink-50', tagColor: 'bg-pink-100 text-pink-800',
    skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'EJS Templating', 'Responsive Design', 'React Native (Expo)'],
  },
  {
    category: 'Backend Development', icon: '⚙️',
    color: 'border-purple-200 bg-purple-50', tagColor: 'bg-purple-100 text-purple-800',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST API Design', 'JWT Authentication', 'Socket.io'],
  },
  {
    category: 'Databases', icon: '🗄️',
    color: 'border-green-200 bg-green-50', tagColor: 'bg-green-100 text-green-800',
    skills: ['MongoDB', 'Mongoose ODM', 'MySQL', 'FAISS (Vector DB)', 'Redis (basics)', 'Git and GitHub', 'Cloudinary'],
  },
  {
    category: 'AI / Machine Learning', icon: '🤖',
    color: 'border-orange-200 bg-orange-50', tagColor: 'bg-orange-100 text-orange-800',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'RAG Pipelines', 'OpenCV', 'NumPy', 'Pandas', 'Hugging Face Transformers', 'RAG', 'LLM Fine-tuning', 'NLP', 'n8n'],
  },
  {
    category: 'DevOps & Tools', icon: '🛠️',
    color: 'border-yellow-200 bg-yellow-50', tagColor: 'bg-yellow-100 text-yellow-800',
    skills: ['Git & GitHub', 'Docker (basics)', 'VS Code', 'Postman', 'Linux/Bash', 'Vercel', 'Render'],
  },
]

const proficiencyData = [
  { skill: 'MERN Stack', level: 85, color: '#f97316' },
  { skill: 'Python & ML', level: 80, color: '#3b82f6' },
  { skill: 'LangChain / RAG', level: 70, color: '#8b5cf6' },
  { skill: 'UI/CSS Design', level: 75, color: '#ec4899' },
  { skill: 'API Design', level: 78, color: '#10b981' },
  { skill: 'Docker / DevOps', level: 45, color: '#f59e0b' },
]

function AnimatedBar({ item, index }) {
  const [width, setWidth] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setWidth(item.level), index * 150 + 300)
      return () => clearTimeout(timer)
    }
  }, [visible, item.level, index])

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
        <span>{item.skill}</span>
        <span className="font-bold" style={{ color: item.color }}>{width > 0 ? `${item.level}%` : '0%'}</span>
      </div>
      <div className="h-3 w-full rounded-full bg-orange-100 overflow-hidden" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}>
        <div
          className="h-3 rounded-full relative overflow-hidden"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${item.color}cc, ${item.color})`,
            transition: 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            boxShadow: `0 0 10px ${item.color}60`,
          }}
        >
          {/* Shimmer inside bar */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: width > 0 ? 'barShimmer 2s linear infinite' : 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function useScrollReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

function SkillsPage() {
  const [hoveredCat, setHoveredCat] = useState(null)

  return (
    <PageWrapper
      title="Skills"
      subtitle="Full-stack capabilities across programming, frontend, backend, AI/ML, databases, and tooling."
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');
        .skills-wrap * { font-family: 'DM Sans', sans-serif; }

        @keyframes barShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes tagPop {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          60% { transform: scale(1.15) rotate(3deg); }
          100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        @keyframes cardFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 0 rgba(249,115,22,0); }
          50% { box-shadow: 0 0 25px rgba(249,115,22,0.3); }
        }
        @keyframes spinBadge {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes exploring {
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.03); }
        }

        .skill-cat-card {
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          cursor: default;
        }
        .skill-cat-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
          z-index: 10;
        }
        .skill-tag {
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          cursor: default;
        }
        .skill-tag:hover {
          transform: scale(1.15) translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .exploring-tag {
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          cursor: default;
        }
        .exploring-tag:hover {
          transform: scale(1.1) translateY(-4px);
          background: #f97316 !important;
          color: white !important;
          border-color: #f97316 !important;
          box-shadow: 0 8px 20px rgba(249,115,22,0.4);
        }
        .proficiency-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .proficiency-card:hover {
          transform: scale(1.01);
          box-shadow: 0 15px 30px rgba(249,115,22,0.15);
        }
        .icon-spin:hover {
          animation: spinBadge 0.6s ease;
        }
      `}</style>

      <div className="skills-wrap space-y-8">
        {/* Proficiency bars */}
        <div className="proficiency-card rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-neutral-900 mb-5">📊 Proficiency Overview</h2>
          <div className="space-y-5">
            {proficiencyData.map((item, i) => (
              <AnimatedBar key={item.skill} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Skill categories */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((cat, catIndex) => {
            const [ref, visible] = useScrollReveal()
            return (
              <article
                ref={ref}
                key={cat.category}
                className={`skill-cat-card rounded-2xl border p-5 ${cat.color}`}
                onMouseEnter={() => setHoveredCat(cat.category)}
                onMouseLeave={() => setHoveredCat(null)}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s cubic-bezier(0.34,1.56,0.64,1) ${catIndex * 100}ms`,
                }}
              >
                <h2 className="flex items-center gap-2 text-base font-bold text-neutral-900 mb-3">
                  <span className="icon-spin text-xl">{cat.icon}</span>
                  {cat.category}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIdx) => (
                    <span
                      key={skill}
                      className={`skill-tag rounded-full px-3 py-1 text-sm font-medium ${cat.tagColor}`}
                      style={{
                        opacity: visible ? 1 : 0,
                        animation: visible ? `tagPop 0.5s cubic-bezier(0.34,1.56,0.64,1) ${catIndex * 100 + skillIdx * 60 + 200}ms both` : 'none',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        {/* Currently exploring */}
        <div
          className="rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-5"
          style={{ animation: 'fadeSlideUp 0.7s ease 0.3s both' }}
        >
          <h2 className="text-base font-bold text-neutral-900 mb-3">🌱 Currently Exploring</h2>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'GraphQL', 'Kubernetes', 'Hugging Face Transformers', 'LLM Fine-tuning', 'WebSockets'].map(
              (s, i) => (
                <span
                  key={s}
                  className="exploring-tag rounded-full border border-orange-300 px-3 py-1 text-sm text-orange-600 font-medium"
                  style={{ animation: `exploring ${2 + i * 0.3}s ease-in-out ${i * 0.2}s infinite` }}
                >
                  {s}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default SkillsPage