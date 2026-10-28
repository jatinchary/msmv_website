'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Calendar, Users, Shield, CheckCircle, Clock, Sparkles } from 'lucide-react'
import { useMagnetic, useStaggeredReveal, useMouseParallax } from '../hooks/useAnimations'

const whatToExpect = [
  { icon: Calendar, title: '30-minute focused session', desc: 'No sales pitch. Pure diagnostic value.' },
  { icon: Users, title: 'Partner-level attention', desc: 'You speak directly with a principal, not a junior associate.' },
  { icon: Shield, title: 'Complete confidentiality', desc: 'Attorney-client privilege standards from day one.' },
  { icon: CheckCircle, title: 'Actionable next steps', desc: 'Leave with a written summary of structural opportunities.' },
]

export default function CTA() {
  const { x: mouseX, y: mouseY } = useMouseParallax(20)
  const primaryMagnetic = useMagnetic<HTMLAnchorElement>(0.4)
  const secondaryMagnetic = useMagnetic<HTMLAnchorElement>(0.3)
  const expectAnimations = useStaggeredReveal(whatToExpect.length, 0.08)

  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        <motion.div
          style={{ x: mouseX * 0.5, y: mouseY * 0.5, background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
        />
        <motion.div
          style={{ x: mouseX * -0.3, y: mouseY * -0.3, background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
        />
        <motion.div
          className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-10"
          style={{ background: '#ffffff' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative bg-brand-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="absolute inset-0"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
                style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/10"
                  style={{
                    width: 4 + i * 2,
                    height: 4 + i * 2,
                    top: 20 + i * 40 + Math.random() * 60,
                    left: 30 + i * 50 + Math.random() * 80,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.5, 1] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>

            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-white"
                />
                <Sparkles className="w-4 h-4" />
                Complimentary strategy session
              </motion.span>

              <motion.h2
                id="cta-heading"
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Let&apos;s review your structure
                </motion.span>
                <br />
                <motion.span
                  className="text-brand-200 relative"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
                >
                  this week
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-1.5 bg-brand-300/50"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl text-brand-100 max-w-2xl mx-auto mb-12"
              >
                We&apos;re offering a brief, 30-minute strategy call to review your current setup alongside our partner network and identify potential structural opportunities. No obligation. Pure value.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="grid md:grid-cols-2 gap-4 mb-12 text-left"
              >
                {whatToExpect.map((item, index) => (
                  <motion.div
                    key={item.title}
                    {...expectAnimations[index]}
                    animate={expectAnimations[index].animate}
                    transition={expectAnimations[index].transition}
                    className="group relative flex items-start gap-3 p-5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
                    whileHover={{ x: 4, scale: 1.01 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                      whileHover={{ scale: 1.15, rotate: 6, background: 'rgba(255, 255, 255, 0.25)' }}
                      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index + 0.45 }}
                    >
                      <h4 className="font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-brand-100">{item.desc}</p>
                    </motion.div>
                    <motion.div
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-white/70" />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  ref={primaryMagnetic.ref}
                  onMouseMove={primaryMagnetic.onMouseMove}
                  onMouseLeave={primaryMagnetic.onMouseLeave}
                  href="https://calendly.com/haritham-msvvwealthpartners/30min?month=2026-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-brand-600 bg-white rounded-xl overflow-hidden w-full sm:w-auto"
                  style={{ 
                    boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 8px 30px rgba(37, 99, 235, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    layoutId="cta-button"
                  >
                    Request your strategy call
                    <motion.div
                      whileHover={{ x: [0, 6, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'left center' }}
                  />
                </motion.a>
{/* 
                <motion.a
                  ref={secondaryMagnetic.ref}
                  onMouseMove={secondaryMagnetic.onMouseMove}
                  onMouseLeave={secondaryMagnetic.onMouseLeave}
                  href="tel:+15551234567"
                  className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-xl w-full sm:w-auto backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.03,
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                > */}
                  {/* <Clock className="w-5 h-5" />
                  Call direct: (555) 123-4567
                  <motion.div
                    className="absolute inset-0 bg-white/5"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'right center' }}
                  /> */}
                {/* </motion.a> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 pt-8 border-t border-white/10 relative"
              >
                <motion.div
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-brand-300 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                <p className="text-brand-200 text-sm">
                  From the desk of
                  <br />
                  <span className="font-medium text-white">Haritha Madhava Reddy</span>
                  <br />
                  <span className="text-brand-300">Principal, MSVV Wealth Partners</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}