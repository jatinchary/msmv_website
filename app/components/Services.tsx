'use client'

import Link from 'next/link'
import { motion, useMotionValue } from 'framer-motion'
import {
  Building2,
  Scale,
  Brain,
  Link2,
  Target,
  RefreshCw,
  Percent,
  Handshake,
  TrendingUp,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'
import { useTilt, useStaggeredReveal } from '../hooks/useAnimations'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  gradient: string
  href?: string
}

const services: Service[] = [
  {
    icon: RefreshCw,
    title: 'Roth Excelerator',
    description:
      'A multi-year Roth conversion plan for high earners with substantial pre-tax retirement assets — designed to ease future RMD pressure and diversify your tax buckets.',
    features: [
      'Tax-bucket diversification',
      'Multi-year conversion timing',
      'Future RMD reduction',
      'Built for $500K+ in pre-tax assets',
    ],
    gradient: 'linear-gradient(135deg, #3b82f6, #1e40af)',
    href: '/services/roth-excelerator',
  },
  {
    icon: Percent,
    title: 'Tax Strategies',
    description:
      'A structured tax-reduction review for high-income professionals who have outgrown standard tax prep — built around your income, compensation, and timing.',
    features: [
      'Built for $150K+ combined income',
      'Compensation & equity diagnostics',
      'Deferral and offset modeling',
      'Written, executable roadmap',
    ],
    gradient: 'linear-gradient(135deg, #4f46e5, #1e40af)',
    href: '/services/tax-strategies',
  },
  {
    icon: Handshake,
    title: 'Business Exit Planning',
    description:
      'A pre-sale readiness engagement for owners planning to sell, transition, recapitalize, or step away within the next 2–3 years — with the cleanup done before buyers start looking.',
    features: [
      'Pre-sale financial readiness',
      'Diligence preparation',
      'Owner transition sequencing',
      'Built for a 2–3 year horizon',
    ],
    gradient: 'linear-gradient(135deg, #14b8a6, #0f766e)',
    href: '/services/business-exit-planning',
  },
  {
    icon: TrendingUp,
    title: 'Capital Gains Mitigation',
    description:
      'A planning process for owners and investors facing a meaningful liquidity event — business sale, asset sale, or recapitalization — before the tax result locks in.',
    features: [
      'Advance planning before closing',
      'Proceeds protection',
      'Coordinated execution',
      'Works before and after a gain',
    ],
    gradient: 'linear-gradient(135deg, #f59e0b, #b45309)',
    href: '/services/capital-gains-mitigation',
  },
  /*
  {
    icon: Building2,
    title: 'Business Succession Planning',
    description:
      'Structure seamless ownership transitions that preserve wealth, minimize tax drag, and protect your legacy across generations.',
    features: [
      'Buy-sell agreement design',
      'Family governance frameworks',
      'Key person risk mitigation',
      'ESOP & equity compensation',
    ],
    gradient: 'linear-gradient(135deg, #10b981, #0d9488)',
  },
  {
    icon: Scale,
    title: 'Wealth Protection',
    description:
      'Implement advanced legal structures to safeguard assets from creditors, litigation, and unforeseen liabilities.',
    features: [
      'Domestic asset protection trusts',
      'LLC & LP layering strategies',
      'Insurance integration',
      'Creditor exemption planning',
    ],
    gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)',
  },
  {
    icon: Brain,
    title: 'Executive Compensation',
    description:
      'Restructure compensation packages to maximize after-tax value while aligning with long-term wealth objectives.',
    features: [
      'Deferred compensation plans',
      'Stock option strategies',
      'Golden parachute design',
      'Section 83(b) elections',
    ],
    gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
  },
  {
    icon: Link2,
    title: 'CPA & Attorney Coordination',
    description:
      'We serve as the quarterback, coordinating your advisor network to ensure unified strategy execution.',
    features: [
      'Quarterly strategy sessions',
      'Cross-disciplinary review',
      'Documentation & compliance',
      'Regulatory change monitoring',
    ],
    gradient: 'linear-gradient(135deg, #06b6d4, #2563eb)',
  },
  {
    icon: Target,
    title: 'Charitable Planning',
    description:
      'Align philanthropic goals with tax efficiency through structured giving vehicles that maximize impact and deductions.',
    features: [
      'Donor-advised funds',
      'Charitable remainder trusts',
      'Private foundation setup',
      'Impact investing alignment',
    ],
    gradient: 'linear-gradient(135deg, #f43f5e, #db2777)',
  },
  */
]

export default function Services() {
  const cardAnimations = useStaggeredReveal(services.length, 0.06)

  return (
    <section
      id="services"
      className="section bg-slate-50 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ background: '#eff6ff', color: '#1d4ed8' }}>
            What we do
          </span>
          <h2 id="services-heading" className="section-title mb-4">
            Integrated strategies for <span className="text-brand-600">holistic wealth</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Each service is designed to work in concert with your existing advisors, creating a unified approach that addresses the full spectrum of your financial life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              animation={cardAnimations[index]}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">Ready to explore how these strategies apply to your situation?</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
            Start the conversation
            <motion.span
              className="w-5 h-5"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, animation }: { 
  service: Service, 
  index: number,
  animation: ReturnType<typeof useStaggeredReveal>[0]
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(4)
  const iconScale = useMotionValue(1)
  const iconRotate = useMotionValue(0)
  const borderGlow = useMotionValue(0)

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ 
        transform: iconScale.get() !== 1 || iconRotate.get() !== 0 
          ? undefined 
          : undefined,
      }}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={animation.transition}
      animate={animation.animate}
      className="group relative bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 overflow-hidden transition-all duration-500"
      whileHover={{ 
        y: -12, 
        scale: 1.015,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 0.3)',
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500"
        style={{ background: service.gradient }}
      />

      <motion.div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: service.gradient }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 * index + 0.2, duration: 0.6 }}
      />

      <div className="relative z-10">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
          style={{ background: service.gradient }}
          whileHover={{ rotate: 6, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <service.icon className="w-6 h-6 text-white" />
        </motion.div>

        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-600 mb-5 leading-relaxed">{service.description}</p>

        <ul className="space-y-2.5" role="list">
          {service.features.map((feature, featureIndex) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * featureIndex + 0.2, duration: 0.4 }}
              className="flex items-start gap-2.5 text-sm text-slate-600 group-hover:text-slate-900 transition-colors"
            >
              <motion.span
                className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center rounded"
                style={{ background: service.gradient }}
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * featureIndex + 0.25, duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
              >
                <ChevronRight className="w-2.5 h-2.5 text-white" />
              </motion.span>
              {feature}
            </motion.li>
          ))}
        </ul>

        <motion.div
          className={`mt-6 pt-4 border-t border-slate-200/50 flex items-center gap-2 text-sm font-medium text-brand-600 transition-all duration-300 ${
            service.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {service.href ? 'View full details' : 'Learn more'}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>

      {service.href && (
        <Link
          href={service.href}
          className="absolute inset-0 z-20 rounded-2xl"
          aria-label={`View full details for ${service.title}`}
        />
      )}
    </motion.article>
  )
}