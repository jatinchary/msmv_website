'use client'

import { useState, useEffect, useCallback, useRef, type RefObject } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, Shield, Users, Target, TrendingUp } from 'lucide-react'
import { useCounter, useStaggeredReveal, useScroll } from '../hooks/useAnimations'

const testimonials = [
  {
    quote:
      "MSVV didn't just save us money — they restructured how our entire family office operates. The coordination with our existing CPA and tax attorney was seamless. We're looking at seven figures in annual tax savings.",
    author: 'James M.',
    role: 'Founder, Tech Exit ($200M+)',
    initial: 'JM',
    industry: 'Private Equity',
  },
  {
    quote:
      "As a surgeon with multiple practice locations and surgery centers, I was bleeding money on entity structure. MSVV brought in a healthcare-specialized tax attorney who redesigned everything. The 30-minute call was the highest ROI hour of my career.",
    author: 'Dr. Sarah K.',
    role: 'Orthopedic Surgeon & Practice Owner',
    initial: 'SK',
    industry: 'Healthcare',
  },
  {
    quote:
      "The quarterback model is real. I've had wealth advisors before, but nobody actually coordinated my CPA, estate attorney, and insurance agent until MSVV. Quarterly reviews keep everyone accountable and the strategy sharp.",
    author: 'Robert T.',
    role: 'CEO, Manufacturing ($85M Revenue)',
    initial: 'RT',
    industry: 'Manufacturing',
  },
  {
    quote:
      "We had a complex international structure with entities in three countries. MSVV's network included a cross-border tax specialist who identified $400K in annual savings we'd missed for years. Proactive, not reactive.",
    author: 'Elena V.',
    role: 'Serial Entrepreneur, FinTech',
    initial: 'EV',
    industry: 'Technology',
  },
  {
    quote:
      "The succession planning for our family business was the most stressful decision of my life. MSVV brought clarity, modeled every scenario, and coordinated the legal execution flawlessly. My children's inheritance is protected.",
    author: 'Michael R.',
    role: '3rd Gen Family Business Owner',
    initial: 'MR',
    industry: 'Distribution',
  },
]

const stats = [
  { value: 850, suffix: 'K+', label: 'Avg annual tax savings', icon: TrendingUp },
  { value: 92, suffix: '%', label: 'Client retention rate', icon: Shield },
  { value: 10, suffix: '+', label: 'Specialist partners', icon: Users },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const prev = useCallback(() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1)), [])
  const next = useCallback(() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1)), [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [isPaused, next])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
    setTouchStart(null)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const statCounters = stats.map((stat) => useCounter(stat.value, 1800))
  const statAnimations = useStaggeredReveal(stats.length, 0.08)

  return (
    <section
      id="testimonials"
      className="section bg-slate-50 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{ background: '#eff6ff', color: '#1d4ed8' }}
          >
            Client results
          </motion.span>
          <h2 id="testimonials-heading" className="section-title mb-4">
            Trusted by <span className="text-brand-600">high-net-worth leaders</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real business owners and executives who discovered the difference proactive strategy makes.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={containerRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="px-4"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="flex items-center justify-center gap-3 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button
              onClick={prev}
              className="bg-white rounded-full p-3 border border-slate-200 hover:border-brand-300 hover:bg-brand-50 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </motion.button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-brand-500 w-10 shadow-lg shadow-brand-500/30'
                      : 'bg-slate-300 hover:bg-slate-400 hover:scale-125'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  role="tab"
                  aria-selected={currentIndex === index}
                  aria-label={`Go to testimonial ${index + 1}`}
                  animate={{ scale: currentIndex === index ? 1.1 : 1 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="bg-white rounded-full p-3 border border-slate-200 hover:border-brand-300 hover:bg-brand-50 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              count={statCounters[index].count}
              counterRef={statCounters[index].ref}
              animation={statAnimations[index]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-center gap-1.5 mb-6"
      >
        {[1, 2, 3, 4, 5].map((star, i) => (
          <motion.span
            key={star}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          >
            <Star />
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative mb-8"
      >
        <Quote className="absolute -top-4 -left-2 w-12 h-12 text-brand-100" />
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed relative z-10">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex items-center gap-4 pt-6 border-t border-slate-100"
      >
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        >
          {testimonial.initial}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <div className="font-semibold text-slate-900">{testimonial.author}</div>
          <div className="text-sm text-slate-600">{testimonial.role}</div>
          <div className="text-xs text-brand-600 font-medium mt-0.5">{testimonial.industry}</div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function StatCard({ stat, count, counterRef, animation }: { 
  stat: typeof stats[0], 
  count: number,
  counterRef: RefObject<HTMLDivElement>,
  animation: ReturnType<typeof useStaggeredReveal>[0]
}) {
  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={animation.transition}
      animate={animation.animate}
      className="group relative bg-white rounded-2xl border border-slate-200 p-8 text-center overflow-hidden"
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
          className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
          style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)' }}
          whileHover={{ scale: 1.15, rotate: 6, boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)' }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
        >
          <stat.icon className="w-7 h-7" style={{ color: '#2563eb' }} />
        </motion.div>
        
        <motion.div
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-600 mb-2"
        >
          {count.toLocaleString()}
          <span className="text-2xl sm:text-3xl font-medium text-slate-500">{stat.suffix}</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 text-sm font-medium"
        >
          {stat.label}
        </motion.p>
      </div>
    </motion.div>
  )
}