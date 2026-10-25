'use client'

import { motion, useMotionValue } from 'framer-motion'
import { Search, Lightbulb, Puzzle, Target, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { useTilt, useStaggeredReveal } from '../hooks/useAnimations'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Diagnostic',
    description:
      'We conduct a comprehensive review of your current tax returns, entity structures, compensation arrangements, and wealth objectives. This isn\'t a surface-level audit — it\'s a deep diagnostic to uncover hidden inefficiencies.',
    details: [
      'Multi-year tax return analysis',
      'Entity structure mapping',
      'Compensation & benefit review',
      'Risk tolerance assessment',
      'Legacy & philanthropic goals',
    ],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy Architecture',
    description:
      'Our team collaborates with your CPA and tax counsel to design a customized blueprint. We model multiple scenarios, quantifying the tax alpha and wealth impact of each structural change.',
    details: [
      'Scenario modeling & quantification',
      'Cross-jurisdictional optimization',
      'Entity restructuring proposals',
      'Compensation redesign',
      'Charitable vehicle selection',
    ],
  },
  {
    number: '03',
    icon: Puzzle,
    title: 'Coordinated Implementation',
    description:
      'We quarterback the execution across your advisor network — drafting documents, filing elections, restructuring entities, and ensuring every piece locks together seamlessly.',
    details: [
      'Legal document preparation',
      'Tax election filings',
      'Entity formation & restructuring',
      'Insurance policy placement',
      'Ongoing compliance calendar',
    ],
  },
  {
    number: '04',
    icon: Target,
    title: 'Quarterly Review & Adaptation',
    description:
      'Tax law changes. Your business evolves. We meet quarterly with your CPA and legal counsel to stress-test the strategy, capture new opportunities, and maintain optimal positioning.',
    details: [
      'Quarterly strategy sessions',
      'Legislative change alerts',
      'Performance benchmarking',
      'Proactive adjustments',
      'Annual comprehensive review',
    ],
  },
]

const differentiators = [
  {
    icon: Shield,
    title: 'Fiduciary alignment',
    description: 'We don\'t sell products. Our only incentive is your outcome.',
  },
  {
    icon: Users,
    title: 'Specialist network',
    description: 'Direct access to top-tier tax attorneys, CPAs, and actuaries.',
  },
  {
    icon: Target,
    title: 'Quantified impact',
    description: 'Every recommendation modeled with projected tax alpha and ROI.',
  },
]

export default function Approach() {
  const stepAnimations = useStaggeredReveal(steps.length, 0.08)
  const diffAnimations = useStaggeredReveal(differentiators.length, 0.08)

  return (
    <section
      id="approach"
      className="section relative overflow-hidden"
      aria-labelledby="approach-heading"
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{ background: '#eff6ff', color: '#1d4ed8' }}
          >
            Our process
          </motion.span>
          <h2 id="approach-heading" className="section-title mb-4">
            A <span className="text-brand-600">four-phase</span> framework for precision
          </h2>
          <p className="section-subtitle mx-auto">
            We don\'t guess. We diagnose, design, implement, and adapt — a continuous cycle of optimization coordinated across your entire advisory team.
          </p>
        </motion.div>

        <div className="space-y-10 lg:space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              total={steps.length}
              animation={stepAnimations[index]}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center text-slate-900 mb-10">
            Why clients choose <span className="text-brand-600">MSVV</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {differentiators.map((diff, index) => (
              <DifferentiatorCard
                key={diff.title}
                diff={diff}
                animation={diffAnimations[index]}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StepCard({ step, index, total, animation, isLast }: { 
  step: typeof steps[0], 
  index: number,
  total: number,
  animation: ReturnType<typeof useStaggeredReveal>[0],
  isLast: boolean
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(3)
  const iconScale = useMotionValue(1)
  const lineProgress = useMotionValue(0)

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={animation.transition}
      animate={animation.animate}
      className="relative flex flex-col lg:flex-row gap-8 items-start"
    >
      <div className="flex-shrink-0 w-full lg:w-1/3 relative">
        <div className="relative flex flex-col items-center lg:items-end pr-8 lg:pr-0 z-10">
          <motion.div
            className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-4"
            style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)' }}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.2, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1, rotate: 6 }}
          >
            <step.icon className="w-7 h-7" style={{ color: '#2563eb' }} />
          </motion.div>
          
          <motion.div
            className="absolute left-7 top-14 bottom-0 w-0.5 hidden lg:block"
            style={{ 
              background: 'linear-gradient(180deg, #e2e8f0, #3b82f6, #e2e8f0)',
              transformOrigin: 'top center',
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.1 * index + 0.3, duration: 0.8, ease: 'easeOut' }}
          />
          
          <motion.div
            className="text-2xl font-bold text-brand-600 mb-2 text-right lg:w-28"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.25 }}
          >
            {step.number}
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.3 }}
            className="text-lg font-semibold text-slate-900 text-right lg:w-40"
          >
            {step.title}
          </motion.h3>
        </div>
      </div>

      <div className="flex-1 lg:pl-8 relative">
        <motion.div
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 relative overflow-hidden group"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 * index + 0.15, duration: 0.5 }}
          whileHover={{ 
            x: 8,
            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.08)',
            borderColor: 'rgba(59, 130, 246, 0.3)',
          }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.2, duration: 0.6 }}
          />
          
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index + 0.25 }}
              className="text-slate-600 mb-5 leading-relaxed"
            >
              {step.description}
            </motion.p>
            <ul className="space-y-2" role="list">
              {step.details.map((detail, detailIndex) => (
                <motion.li
                  key={detail}
                  initial={{ opacity: 0, x: -15, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * detailIndex + 0.1 * index + 0.3, duration: 0.4, type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-2.5 text-sm text-slate-600 group-hover:text-slate-900 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <motion.span
                    className="w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{ background: '#dcfce7', color: '#22c55e' }}
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.04 * detailIndex + 0.1 * index + 0.35, duration: 0.3, type: 'spring', stiffness: 260 }}
                  >
                    <CheckCircle className="w-2.5 h-2.5" />
                  </motion.span>
                  {detail}
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
              whileHover={{ x: 4 }}
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 * index + 0.4 }}
            >
              Phase complete
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function DifferentiatorCard({ diff, animation }: { 
  diff: typeof differentiators[0], 
  animation: ReturnType<typeof useStaggeredReveal>[0]
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(5)
  const glow = useMotionValue(0)

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={animation.transition}
      animate={animation.animate}
      className="group relative card text-center overflow-hidden"
      whileHover={{ 
        y: -8,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        borderColor: 'rgba(59, 130, 246, 0.3)',
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative z-10">
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
          style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)' }}
          whileHover={{ scale: 1.15, rotate: 8, boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)' }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
        >
          <diff.icon className="w-7 h-7" style={{ color: '#2563eb' }} />
        </motion.div>
        
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg font-semibold text-slate-900 mb-2"
        >
          {diff.title}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-slate-600 text-sm"
        >
          {diff.description}
        </motion.p>
      </div>
    </motion.div>
  )
}