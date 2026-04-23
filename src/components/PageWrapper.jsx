import { motion } from 'framer-motion'

function PageWrapper({ title, subtitle, children }) {
  const MotionSection = motion.section

  return (
    <MotionSection
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm md:p-10"
    >
      <h1 className="text-3xl font-bold text-orange-600 md:text-4xl">{title}</h1>
      {subtitle ? <p className="mt-3 max-w-3xl text-neutral-700">{subtitle}</p> : null}
      <div className="mt-6">{children}</div>
    </MotionSection>
  )
}

export default PageWrapper
