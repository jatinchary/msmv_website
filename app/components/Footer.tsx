'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Shield, TrendingUp, Users, Target, Mail, Phone, MapPin, Linkedin, ArrowRight, Sparkles } from 'lucide-react'
import { useStaggeredReveal } from '../hooks/useAnimations'

const footerLinks = {
  company: [
    { label: 'About us', href: '#about' },
    { label: 'Our approach', href: '#approach' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Careers', href: '#careers' },
  ],
  services: [
    { label: 'Roth Excelerator', href: '/services/roth-excelerator' },
    { label: 'Tax Strategies', href: '/services/tax-strategies' },
    { label: 'Business Exit Planning', href: '/services/business-exit-planning' },
    { label: 'Capital Gains Mitigation', href: '/services/capital-gains-mitigation' },
  ],
  resources: [
    { label: 'Insights & articles', href: '#insights' },
    { label: 'Case studies', href: '#case-studies' },
    { label: 'Tax guides', href: '#guides' },
    { label: 'Webinars', href: '#webinars' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy-policy' },
    { label: 'Terms of service', href: '#terms' },
    { label: 'Disclosures', href: '#disclosures' },
    { label: 'ADA compliance', href: '#ada' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/142878312/', label: 'LinkedIn' },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'haritha@msvvwealth.com', href: 'mailto:haritha@msvvwealth.com' },
  // { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
  // { icon: MapPin, label: 'Address', value: '100 Financial District, NY 10005', href: '#' },
]

const whyMSVV = [
  { icon: Shield, title: 'Fiduciary standard', desc: 'Legally bound to your best interest' },
  { icon: TrendingUp, title: 'Proactive strategy', desc: 'Forward-looking, not reactive' },
  { icon: Users, title: 'Specialist network', desc: 'Top-tier CPAs & tax attorneys' },
  { icon: Target, title: 'Quantified results', desc: 'Modeled tax alpha & ROI' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const resolveHref = (href: string) =>
    href.startsWith('#') && pathname !== '/' ? `/${href}` : href
  const linkAnimations = useStaggeredReveal(15, 0.03)
  const whyAnimations = useStaggeredReveal(whyMSVV.length, 0.06)
  const contactAnimations = useStaggeredReveal(contactInfo.length, 0.06)

  return (
    <footer className="bg-slate-50 border-t border-slate-200 relative overflow-hidden" role="contentinfo">
      <motion.div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      />

      <div className="container py-12 sm:py-16 lg:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12"
        >
          <motion.div
            className="lg:col-span-2 xl:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href={pathname === '/' ? '#home' : '/'}
              className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-5"
              aria-label="MSVV Wealth Partners Home"
            >
              <motion.div
                className="relative w-9 h-9"
                whileHover={{ rotate: 6, scale: 1.05 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              >
                <Image
                  src="/images/image.png"
                  alt="MSVV Wealth Partners"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-lg"
                  priority
                />
              </motion.div>
              <span>MSVV Wealth Partners</span>
            </Link>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 max-w-xs mb-8 leading-relaxed"
            >
              We design integrated financial and wealth strategies for high-earning business owners and executives, coordinating directly with specialized CPA and tax law partners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.05 * index + 0.35, duration: 0.3, type: 'spring', stiffness: 300 }}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.15,
                    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)',
                    background: '#eff6ff',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-brand-600 hover:bg-brand-50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.nav
            aria-label="Company links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-medium text-slate-900 mb-4"
            >
              Company
            </motion.h4>
            <ul className="space-y-2.5" role="list">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * index + 0.15 }}
                >
                  <motion.a
                    href={resolveHref(link.href)}
                    className="text-sm text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-1.5 group"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                    <motion.span
                      className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight />
                    </motion.span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            aria-label="Services links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-medium text-slate-900 mb-4"
            >
              Services
            </motion.h4>
            <ul className="space-y-2.5" role="list">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * index + 0.15 }}
                >
                  <motion.a
                    href={resolveHref(link.href)}
                    className="text-sm text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-1.5 group"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                    <motion.span
                      className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight />
                    </motion.span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            aria-label="Resources links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-medium text-slate-900 mb-4"
            >
              Resources
            </motion.h4>
            <ul className="space-y-2.5" role="list">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * index + 0.15 }}
                >
                  <motion.a
                    href={resolveHref(link.href)}
                    className="text-sm text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-1.5 group"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                    <motion.span
                      className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight />
                    </motion.span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-slate-200"
        >
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-medium text-slate-900 mb-5"
              >
                Get in touch
              </motion.h4>
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, staggerChildren: 0.05 }}
              >
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index + 0.2 }}
                    className="group relative flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300"
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ y: -4, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', border: '1px solid rgba(37, 99, 235, 0.1)' }}
                      whileHover={{ scale: 1.1, rotate: 4, background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' }}
                      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                    >
                      <contact.icon className="w-5 h-5" style={{ color: '#2563eb' }} />
                    </motion.div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{contact.label}</div>
                      <motion.div
                        className="text-sm text-slate-700 group-hover:text-brand-600 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        {contact.value}
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-brand-500" />
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-medium text-slate-900 mb-5"
              >
                Why MSVV?
              </motion.h4>
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, staggerChildren: 0.05 }}
              >
                {whyMSVV.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.05 * index + 0.2 }}
                    className="group relative flex items-start gap-3 p-5 bg-white rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -4, x: 4 }}
                  >
                    <motion.div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', border: '1px solid rgba(37, 99, 235, 0.1)' }}
                      whileHover={{ scale: 1.15, rotate: 6, background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.2)' }}
                      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: '#2563eb' }} />
                    </motion.div>
                    <div>
                      <motion.div
                        className="font-medium text-slate-900 text-sm group-hover:text-brand-600 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        {item.title}
                      </motion.div>
                      <motion.div className="text-xs text-slate-500">{item.desc}</motion.div>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 relative"
          >
            <motion.div
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-300 to-transparent hidden md:block"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-sm"
            >
              &copy; {currentYear} MSVV Wealth Partners. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.03 }}
              className="flex items-center gap-6"
            >
              {footerLinks.legal.map((link) => (
                <motion.a
                  key={link.label}
                  href={resolveHref(link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                  whileHover={{ color: '#2563eb', x: 2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-1.5 text-xs text-slate-500"
            >
              <motion.div
                className="w-3.5 h-3.5 text-brand-500"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Shield />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                SEC Registered Investment Adviser
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}