import PageWrapper from '../components/PageWrapper'

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: '💻',
    color: 'border-blue-200 bg-blue-50',
    tagColor: 'bg-blue-100 text-blue-800',
    skills: ['Python', 'JavaScript (ES6+)', 'C', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend Development',
    icon: '🎨',
    color: 'border-pink-200 bg-pink-50',
    tagColor: 'bg-pink-100 text-pink-800',
    skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'EJS Templating', 'Responsive Design'],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    color: 'border-purple-200 bg-purple-50',
    tagColor: 'bg-purple-100 text-purple-800',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST API Design', 'JWT Authentication'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'border-green-200 bg-green-50',
    tagColor: 'bg-green-100 text-green-800',
    skills: ['MongoDB', 'Mongoose ODM', 'MySQL', 'FAISS (Vector DB)', 'Redis (basics)'],
  },
  {
    category: 'AI / Machine Learning',
    icon: '🤖',
    color: 'border-orange-200 bg-orange-50',
    tagColor: 'bg-orange-100 text-orange-800',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'RAG Pipelines', 'OpenCV', 'NumPy', 'Pandas'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    color: 'border-yellow-200 bg-yellow-50',
    tagColor: 'bg-yellow-100 text-yellow-800',
    skills: ['Git & GitHub', 'Docker (basics)', 'VS Code', 'Postman', 'Linux/Bash', 'Vercel', 'Render'],
  },
]

const proficiencyData = [
  { skill: 'MERN Stack', level: 85 },
  { skill: 'Python & ML', level: 80 },
  { skill: 'LangChain / RAG', level: 70 },
  { skill: 'UI/CSS Design', level: 75 },
  { skill: 'API Design', level: 78 },
  { skill: 'Docker / DevOps', level: 45 },
]

function SkillsPage() {
  return (
    <PageWrapper
      title="Skills"
      subtitle="Full-stack capabilities across programming, frontend, backend, AI/ML, databases, and tooling."
    >
      {/* Proficiency bars */}
      <div className="mb-8 rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-neutral-900 mb-5">📊 Proficiency Overview</h2>
        <div className="space-y-4">
          {proficiencyData.map((item) => (
            <div key={item.skill}>
              <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
                <span>{item.skill}</span>
                <span className="text-orange-500">{item.level}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-orange-100">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill categories */}
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <article
            key={cat.category}
            className={`rounded-2xl border p-5 ${cat.color}`}
          >
            <h2 className="flex items-center gap-2 text-base font-bold text-neutral-900 mb-3">
              <span>{cat.icon}</span>
              {cat.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${cat.tagColor}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Currently learning */}
      <div className="mt-6 rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-5">
        <h2 className="text-base font-bold text-neutral-900 mb-3">🌱 Currently Exploring</h2>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'GraphQL', 'Kubernetes', 'Hugging Face Transformers', 'LLM Fine-tuning', 'WebSockets'].map(
            (s) => (
              <span key={s} className="rounded-full border border-orange-300 px-3 py-1 text-sm text-orange-600 font-medium">
                {s}
              </span>
            ),
          )}
        </div>
      </div>
    </PageWrapper>
  )
}

export default SkillsPage