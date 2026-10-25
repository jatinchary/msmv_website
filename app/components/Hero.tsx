'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useCounter, useMouseParallax, useStaggeredReveal } from '../hooks/useAnimations'

const highlights = [
  { icon: CheckCircle, text: 'Proactive, not reactive' },
  { icon: CheckCircle, text: 'Coordinated with your CPA & attorney' },
  { icon: CheckCircle, text: 'Built for business owners & executives' },
]

const stats = [
  { value: 150, suffix: 'K+', label: 'Tax threshold' },
  { value: 30, suffix: ' min', label: 'Strategy call' },
  { value: 100, suffix: '%', label: 'Confidential' },
  { value: 12, suffix: '+', label: 'CPA partners' },
]

export default function Hero() {
  const { x: mouseX, y: mouseY } = useMouseParallax(15)
  const { scrollY } = useScroll()
  
  const heroParallaxY = useTransform(scrollY, [0, 800], [0, -150])
  const blob1Y = useTransform(scrollY, [0, 800], [0, -100])
  const blob2Y = useTransform(scrollY, [0, 800], [0, 80])

  const statCounters = stats.map((stat) => useCounter(stat.value, 2000))
  const highlightAnimations = useStaggeredReveal(highlights.length, 0.08)

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          style={{ y: blob1Y, background: '#3b82f6', transformOrigin: 'center center' }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.div
          style={{ y: blob2Y, background: '#2563eb', transformOrigin: 'center center' }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
        <motion.div
          style={{ x: mouseX, y: mouseY, background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 pointer-events-none"
        />
      </div>

      <motion.div
        style={{ y: heroParallaxY }}
        className="container relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{ background: '#eff6ff', color: '#1d4ed8' }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full"
              style={{ background: '#3b82f6' }}
            />
            For business owners & executives paying $150K+ in taxes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
            className="section-title mb-6 leading-tight text-balance"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Keep more of what you&apos;ve built
            </motion.span>
            <br />
            <motion.span
              className="text-brand-600"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              with proactive tax strategy
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-subtitle mx-auto mb-10 text-lg sm:text-xl max-w-3xl"
          >
            Most high-earning business owners are well-serviced for tax compliance — filing past numbers — 
            but miss out on forward-looking strategy. We coordinate directly with specialized CPAs and tax 
            attorneys to help you structure income and entities more efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://calendly.com/haritham-msvvwealthpartners/30min?month=2026-10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group w-full sm:w-auto relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
              }}
            >
              <motion.span
                layoutId="button-text"
                className="relative z-10 flex items-center gap-2"
              >
                <span>Schedule a 30-minute strategy call</span>
                <ArrowRight className="w-5 h-5" />
              </motion.span>
              <motion.div
                layoutId="button-glow"
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <Link href="#services" className="btn-secondary w-full sm:w-auto">
              See how we work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-slate-600"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                {...highlightAnimations[index]}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: '#22c55e' }}
                >
                  <item.icon />
                </motion.span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                ref={statCounters[index].ref}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.08 * index + 0.7, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 text-center overflow-hidden hover:border-brand-300 transition-all duration-500"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <motion.span
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-600 mb-2 block"
                  >
                    {statCounters[index].count.toLocaleString()}
                    <span className="text-2xl sm:text-3xl font-medium text-slate-500">{stat.suffix}</span>
                  </motion.span>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}