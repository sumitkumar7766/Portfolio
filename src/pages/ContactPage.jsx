import PageWrapper from '../components/PageWrapper'

const contacts = [
  {
    icon: '📧',
    label: 'Email',
    value: 'sumitkumarjaimahaakaal@gmail.com',
    display: 'sumitkumarjaimahaakaal@gmail.com',
    href: 'mailto:sumitkumarjaimahaakaal@gmail.com',
    color: 'border-red-200 bg-red-50 hover:bg-red-100',
    textColor: 'text-red-700',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sumit776693',
    display: 'linkedin.com/in/sumit776693',
    href: 'https://linkedin.com/in/sumit776693',
    color: 'border-blue-200 bg-blue-50 hover:bg-blue-100',
    textColor: 'text-blue-700',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/sumitkumar7766',
    display: 'github.com/sumitkumar7766',
    href: 'https://github.com/sumitkumar7766',
    color: 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100',
    textColor: 'text-neutral-700',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 6204414757',
    display: '+91 6204414757',
    href: 'tel:+916204414757',
    color: 'border-green-200 bg-green-50 hover:bg-green-100',
    textColor: 'text-green-700',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bhopal, Madhya Pradesh, India',
    display: 'Bhopal, MP, India',
    href: null,
    color: 'border-orange-200 bg-orange-50',
    textColor: 'text-orange-700',
  },
]

function ContactPage() {
  return (
    <PageWrapper
      title="Contact"
      subtitle="Open to internships, freelance projects, and collaborations. Let's build something great together."
    >
      {/* CTA card */}
      <div className="mb-8 rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-500 to-orange-400 p-6 text-white shadow-lg">
        <h2 className="text-xl font-bold">👋 Let's Connect!</h2>
        <p className="mt-2 text-orange-100 text-sm leading-relaxed">
          I'm currently a B.Tech AI/ML student at LNCT University and actively looking for
          internship opportunities in Full-Stack, AI/ML, or Data Science. Whether you have a
          project idea or want to collaborate — I'd love to hear from you.
        </p>
        <a
          href="mailto:sumitkumarjaimahaakaal@gmail.com"
          className="mt-4 inline-block rounded-full bg-white text-orange-600 px-6 py-2 text-sm font-bold shadow hover:shadow-md transition"
        >
          📧 Send Me an Email
        </a>
      </div>

      {/* Contact grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c) =>
          c.href ? (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`rounded-2xl border p-5 transition ${c.color}`}
            >
              <p className="text-2xl">{c.icon}</p>
              <h2 className="mt-2 text-base font-bold text-neutral-900">{c.label}</h2>
              <p className={`mt-1 text-sm font-medium ${c.textColor} break-all`}>{c.display}</p>
            </a>
          ) : (
            <div key={c.label} className={`rounded-2xl border p-5 ${c.color}`}>
              <p className="text-2xl">{c.icon}</p>
              <h2 className="mt-2 text-base font-bold text-neutral-900">{c.label}</h2>
              <p className={`mt-1 text-sm font-medium ${c.textColor}`}>{c.display}</p>
            </div>
          ),
        )}
      </div>

      {/* Response time note */}
      <div className="mt-6 rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-4 text-center">
        <p className="text-sm text-neutral-600">
          ⏱️ Typical response time: <strong className="text-orange-600">within 24 hours</strong> via Email or LinkedIn.
        </p>
      </div>
    </PageWrapper>
  )
}

export default ContactPage